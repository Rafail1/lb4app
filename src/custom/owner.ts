import { HttpErrors } from "@loopback/rest";
import { AuthenticationBindings } from "@loopback/authentication";
import { inject } from "@loopback/core";
import { User } from "../models";
import { Filter } from "@loopback/repository";

export class Owner {
  constructor(@inject(AuthenticationBindings.CURRENT_USER) protected currentUser: User) {

  }
  makeFilter(filter: Filter) {
    filter.where = filter.where ? filter.where : {}
    filter.where.userId = this.currentUser.id
  }
  async checkOwner(repository: any, id: any) {
    const cnt = await repository.count({ id: id, userId: this.currentUser.id });
    if (!cnt.count) {
      throw new HttpErrors.Unauthorized('Only owner can do it');
    }
  }
}
