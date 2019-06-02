import { HttpErrors } from "@loopback/rest";
import { AuthenticationBindings } from "@loopback/authentication";
import { inject } from "@loopback/core";
import { User } from "../models";

export class OwnerMixin {
  constructor(@inject(AuthenticationBindings.CURRENT_USER) protected currentUser: User) {

  }
  async checkOwner(repository: any, id: any) {
    const cnt = await repository.count({ id: id, userId: this.currentUser.id });
    if (!cnt.count) {
      throw new HttpErrors.Unauthorized('Only owner can do it');
    }
  }
}
