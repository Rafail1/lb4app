import { DefaultCrudRepository } from '@loopback/repository';
import { User } from '../models';
import { MongoDataSource } from '../datasources';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
    constructor(dataSource: MongoDataSource);
    checkUser(user: User): boolean;
}
