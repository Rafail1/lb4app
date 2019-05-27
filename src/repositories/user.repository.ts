import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';
import * as crypto from "crypto";

export class UserRepository extends DefaultCrudRepository<User,
    typeof User.prototype.id> {
    constructor(
        @inject('datasources.mongo') dataSource: MongoDataSource,
    ) {
        super(User, dataSource);
    }

    checkUser(user: User) {
        const checkHash = user.hash;
        let data_check_string = '';
        Object.keys(user).sort().forEach((key) => {
            if(key === 'hash') return;
            // @ts-ignore
            data_check_string += key + '=' + user[key] + '\n';
        });
        data_check_string = data_check_string.slice(0, data_check_string.length - 1);
        const secret_key = crypto.createHash('sha256').update('700198718:AAF9wDFELMBDNlIioQnoPrHq6XbbvAay5CA', 'utf8').digest();
        const hmac = crypto.createHmac('sha256', secret_key);
        const hmu = hmac.update(data_check_string);
        const hash = hmu.digest('hex');
        return hash === checkHash;
    }
}
