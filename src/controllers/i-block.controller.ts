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
} from '@loopback/rest';
import { IBlock, IBlockWithRelations } from '../models';
import { IBlockRepository } from '../repositories';

export class IBlockController {
  constructor(
    @repository(IBlockRepository)
    public iBlockRepository: IBlockRepository,
  ) { }

  @post('/iblocks', {
    responses: {
      '200': {
        description: 'IBlock model instance',
        content: { 'application/json': { schema: { 'x-ts-type': IBlock } } },
      },
    },
  })
  async create(@requestBody() iBlock: IBlockWithRelations): Promise<IBlock> {
    return await this.iBlockRepository.create(iBlock);
  }

  @get('/iblocks/count', {
    responses: {
      '200': {
        description: 'IBlock model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(IBlock)) where?: Where<IBlock>,
  ): Promise<Count> {
    return await this.iBlockRepository.count(where);
  }

  @get('/iblocks', {
    responses: {
      '200': {
        description: 'Array of IBlock model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': IBlock } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(IBlock)) filter?: Filter<IBlock>,
  ): Promise<IBlock[]> {
    return await this.iBlockRepository.find(filter);
  }

  @patch('/iblocks', {
    responses: {
      '200': {
        description: 'IBlock PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() iBlock: IBlock,
    @param.query.object('where', getWhereSchemaFor(IBlock)) where?: Where<IBlock>,
  ): Promise<Count> {
    return await this.iBlockRepository.updateAll(iBlock, where);
  }

  @get('/iblocks/{id}', {
    responses: {
      '200': {
        description: 'IBlock model instance',
        content: { 'application/json': { schema: { 'x-ts-type': IBlock } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<IBlock> {
    return await this.iBlockRepository.findById(id);
  }

  @patch('/iblocks/{id}', {
    responses: {
      '204': {
        description: 'IBlock PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() iBlock: IBlock,
  ): Promise<void> {
    await this.iBlockRepository.updateById(id, iBlock);
  }

  @put('/iblocks/{id}', {
    responses: {
      '204': {
        description: 'IBlock PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() iBlock: IBlock,
  ): Promise<void> {
    await this.iBlockRepository.replaceById(id, iBlock);
  }

  @del('/iblocks/{id}', {
    responses: {
      '204': {
        description: 'IBlock DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.iBlockRepository.deleteById(id);
  }
}
