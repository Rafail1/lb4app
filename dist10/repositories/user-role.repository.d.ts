import { DefaultCrudRepository } from '@loopback/repository';
import { UserRole } from '../models';
import { MongoDataSource } from '../datasources';
export declare class UserRoleRepository extends DefaultCrudRepository<UserRole, typeof UserRole.prototype.id> {
    constructor(dataSource: MongoDataSource);
}
