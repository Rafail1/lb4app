import { DefaultCrudRepository } from '@loopback/repository';
import { Role } from '../models';
import { MongoDataSource } from '../datasources';
export declare class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.id> {
    constructor(dataSource: MongoDataSource);
}
