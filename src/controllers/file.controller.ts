import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  RestBindings,
  Request,
  Response,
} from '@loopback/rest';
import { File } from '../models';
import { FileRepository } from '../repositories';
import { inject } from '@loopback/core';
import multer = require('multer');
import { resolve } from 'url';
export class FileController {
  storage: multer.StorageEngine;
  constructor(
    @repository(FileRepository)
    public fileRepository: FileRepository,
  ) {
    this.storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, '/tmp/my-uploads')
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
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
  ): Promise<Object> {
    return new Promise<Object>((resolve, reject) => {
      resolve({ dara: "ok" })
    })
  }

  @post('/files', {
    responses: {
      '200': {
        description: 'File model instance',
        content: { 'application/json': { schema: { 'x-ts-type': File } } },
      },
    },
  })
  async create(@requestBody() file: File): Promise<File> {
    return await this.fileRepository.create(file);
  }

  @get('/files/count', {
    responses: {
      '200': {
        description: 'File model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(File)) where?: Where,
  ): Promise<Count> {
    return await this.fileRepository.count(where);
  }

  @get('/files', {
    responses: {
      '200': {
        description: 'Array of File model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': File } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(File)) filter?: Filter,
  ): Promise<File[]> {
    return await this.fileRepository.find(filter);
  }

  @patch('/files', {
    responses: {
      '200': {
        description: 'File PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() file: File,
    @param.query.object('where', getWhereSchemaFor(File)) where?: Where,
  ): Promise<Count> {
    return await this.fileRepository.updateAll(file, where);
  }

  @get('/files/{id}', {
    responses: {
      '200': {
        description: 'File model instance',
        content: { 'application/json': { schema: { 'x-ts-type': File } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<File> {
    return await this.fileRepository.findById(id);
  }

  @patch('/files/{id}', {
    responses: {
      '204': {
        description: 'File PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() file: File,
  ): Promise<void> {
    await this.fileRepository.updateById(id, file);
  }

  @put('/files/{id}', {
    responses: {
      '204': {
        description: 'File PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() file: File,
  ): Promise<void> {
    await this.fileRepository.replaceById(id, file);
  }

  @del('/files/{id}', {
    responses: {
      '204': {
        description: 'File DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fileRepository.deleteById(id);
  }
}
