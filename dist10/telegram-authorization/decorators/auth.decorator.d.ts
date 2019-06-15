import { SecuredType } from "../permission-key";
import { Repository, Model } from '@loopback/repository';
export declare function secured(type?: SecuredType, roles?: string[], model?: Repository<Model> | undefined, id?: string | undefined): MethodDecorator;
