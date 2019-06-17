import multer = require("multer");

// Uncomment these imports to begin using these cool features!

import { inject } from '@loopback/context';
import { post, requestBody, Request, RestBindings, Response, get, HttpErrors } from "@loopback/rest";
import { BotRepository } from "../telegram-bot";
import { repository } from "@loopback/repository";
import fs = require("fs");
import { FileRepository } from "../repositories";
import { secured, SecuredType } from "../telegram-authorization";
import { User } from "../models";
import { AuthenticationBindings } from "@loopback/authentication";

export class FileUploadController {
  storage: multer.StorageEngine;
  constructor(
    @repository(FileRepository) private fileRepository: FileRepository,
    @repository(BotRepository) private botRepository: BotRepository,
    @inject(AuthenticationBindings.CURRENT_USER) protected currentUser: User
  ) {
    this.storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, __dirname + '/../../tmp/uploads')
      },
      filename: function (req, file, cb) {
        const ext = file.originalname.split('.').pop();
        cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
      }
    })
  }

  @secured(SecuredType.IS_AUTHENTICATED)
  @post('/upload', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: '',
      },
    },
  })
  async upload(
    @requestBody({
      description: 'multipart/form-data value.',
      required: true,
      content: {
        'multipart/form-data': {
          'x-parser': 'stream',
          schema: { type: 'object' },
        },
      },
    })
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<object> {
    const upload = multer({ storage: this.storage });
    return new Promise<object>((resolve, reject) => {
      upload.any()(request, response, async err => {
        if (err) reject(err);
        else {
          const files = Object.values(request.files)
          const path = files[0].path
          try {
            const botId = request.body && request.body.botId;
            if (!botId) throw new HttpErrors.BadRequest('no bot id');

            const bot = await this.botRepository.getBot(botId);
            if (!bot) throw new HttpErrors.BadRequest("bot not found");

            const fi = await bot.sendPhoto(this.currentUser.id!, fs.createReadStream(path))
            if (!fi || !fi.photo) {
              throw new HttpErrors.BadRequest("error uploading file to bot");
            }
            const l = fi.photo.length
            const fid = fi.photo[l - 1].file_id

            let tFile;
            try {
              const exists = await this.fileRepository.findById(fid);
              tFile = await bot.getFileLink(exists.id!)
            } catch (e) {
              const file = await this.fileRepository.create({ id: fid, bot: botId })
              tFile = await bot.getFileLink(file.id!)
            }
            fs.unlinkSync(path);
            resolve({ link: tFile, id: fid });
          } catch (e) {
            fs.unlinkSync(path);
            reject(e);
          }

        }
      });
    });
  }

}
