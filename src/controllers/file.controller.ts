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
import { BotRepository } from '../telegram-bot';
export class FileController {
  storage: multer.StorageEngine;
  constructor(
    @repository(FileRepository)
    public fileRepository: FileRepository,
    @repository(BotRepository)
    public botRepository: BotRepository
  ) { }

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

  @get('/testFile', {
    responses: {
      '204': {
        description: 'File send success',
      },
    },
  })
  async testFile() {
    const file = await this.fileRepository.findOne()
    const botId = 773534786;
    const bot = await this.botRepository.getBot(botId);
    await bot.sendPhoto(453964513, file!.id!)
  }
}
