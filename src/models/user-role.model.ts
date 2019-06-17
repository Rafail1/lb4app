import { belongsTo, Entity, model, property } from '@loopback/repository';
import { User } from "./user.model";
import { Role } from "./role.model";

@model()
export class UserRole extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true
  })
  id?: string;

  @belongsTo(() => User)
  user: number;

  @belongsTo(() => Role)
  role: string;

  constructor(data?: Partial<UserRole>) {
    super(data);
  }
}
