import { User } from "../models";
import { Filter, Where } from "@loopback/repository";
export declare class Owner {
    protected currentUser: User;
    constructor(currentUser: User);
    ownerWhere(where: Where): void;
    ownerFilter(filter: Filter): void;
    checkOwner(repository: any, id: any): Promise<void>;
}
