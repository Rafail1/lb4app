import { DefaultCrudRepository } from '@loopback/repository';
import { File } from '../models';
import { MongoDataSource } from '../datasources';
export declare class FileRepository extends DefaultCrudRepository<File, typeof File.prototype.id> {
    constructor(dataSource: MongoDataSource);
}
