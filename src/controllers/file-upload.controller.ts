import multer = require("multer");

// Uncomment these imports to begin using these cool features!

import { inject } from '@loopback/context';
import { post, requestBody, Request, RestBindings, Response, get } from "@loopback/rest";
import { BotRepository } from "../telegram-bot";
import { repository } from "@loopback/repository";
import fs = require("fs");
import { FileRepository } from "../repositories";

export class FileUploadController {
  storage: multer.StorageEngine;
  constructor(
    @repository(FileRepository) private fileRepository: FileRepository,
    @repository(BotRepository) private botRepository: BotRepository) {
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
    const botId = 773534786;
    const bot = await this.botRepository.getBot(botId);

    return new Promise<object>((resolve, reject) => {
      upload.any()(request, response, async err => {
        if (err) reject(err);
        else {

          const files = Object.values(request.files)
          const path = files[0].path
          const fi = await bot.sendPhoto(453964513, fs.createReadStream(path))
          if (!fi || !fi.photo) {
            const error = new Error('error uploading file to bot');
            return reject(error)
          }
          const l = fi.photo.length
          const file = await this.fileRepository.create({ id: fi.photo[l - 1].file_id, botId, uniqueId: "123" })
          fs.unlinkSync(path)
          const tFile = await bot.getFileLink(file.id!)
          resolve({ link: tFile });
        }
      });
    });
  }

}
