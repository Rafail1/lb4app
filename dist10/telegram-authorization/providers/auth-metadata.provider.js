"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("@loopback/context");
const providers_1 = require("@loopback/authentication/dist/providers");
const core_1 = require("@loopback/core");
const metadata_1 = require("@loopback/metadata");
const authentication_1 = require("@loopback/authentication");
let MyAuthMetadataProvider = class MyAuthMetadataProvider extends providers_1.AuthMetadataProvider {
    constructor(_controllerClass, _methodName) {
        super(_controllerClass, _methodName);
        this._controllerClass = _controllerClass;
        this._methodName = _methodName;
    }
    value() {
        if (!this._controllerClass || !this._methodName)
            return;
        return metadata_1.MetadataInspector.getMethodMetadata(authentication_1.AUTHENTICATION_METADATA_KEY, this._controllerClass.prototype, this._methodName);
    }
};
MyAuthMetadataProvider = __decorate([
    __param(0, context_1.inject(core_1.CoreBindings.CONTROLLER_CLASS, { optional: true })),
    __param(1, context_1.inject(core_1.CoreBindings.CONTROLLER_METHOD_NAME, { optional: true })),
    __metadata("design:paramtypes", [Object, String])
], MyAuthMetadataProvider);
exports.MyAuthMetadataProvider = MyAuthMetadataProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1tZXRhZGF0YS5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZWxlZ3JhbS1hdXRob3JpemF0aW9uL3Byb3ZpZGVycy9hdXRoLW1ldGFkYXRhLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLHVFQUE2RTtBQUM3RSx5Q0FBeUQ7QUFDekQsaURBQXFEO0FBQ3JELDZEQUFxRTtBQUdyRSxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUF1QixTQUFRLGdDQUFvQjtJQUM1RCxZQUN1RSxnQkFBaUMsRUFDM0IsV0FBbUI7UUFFNUYsS0FBSyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBSDhCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFHaEcsQ0FBQztJQUVELEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQ3hELE9BQU8sNEJBQWlCLENBQUMsaUJBQWlCLENBQ3RDLDRDQUEyQixFQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUMvQixJQUFJLENBQUMsV0FBVyxDQUNuQixDQUFDO0lBQ04sQ0FBQztDQUNKLENBQUE7QUFoQlksc0JBQXNCO0lBRTFCLFdBQUEsZ0JBQU0sQ0FBQyxtQkFBWSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUE7SUFDdkQsV0FBQSxnQkFBTSxDQUFDLG1CQUFZLENBQUMsc0JBQXNCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTs7R0FIekQsc0JBQXNCLENBZ0JsQztBQWhCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSBcIkBsb29wYmFjay9jb250ZXh0XCI7XG5pbXBvcnQge0F1dGhNZXRhZGF0YVByb3ZpZGVyfSBmcm9tIFwiQGxvb3BiYWNrL2F1dGhlbnRpY2F0aW9uL2Rpc3QvcHJvdmlkZXJzXCI7XG5pbXBvcnQge0NvcmVCaW5kaW5ncywgQ29uc3RydWN0b3J9IGZyb20gXCJAbG9vcGJhY2svY29yZVwiO1xuaW1wb3J0IHtNZXRhZGF0YUluc3BlY3Rvcn0gZnJvbSBcIkBsb29wYmFjay9tZXRhZGF0YVwiO1xuaW1wb3J0IHtBVVRIRU5USUNBVElPTl9NRVRBREFUQV9LRVl9IGZyb20gXCJAbG9vcGJhY2svYXV0aGVudGljYXRpb25cIjtcbmltcG9ydCB7TXlBdXRoZW50aWNhdGlvbk1ldGFkYXRhfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIE15QXV0aE1ldGFkYXRhUHJvdmlkZXIgZXh0ZW5kcyBBdXRoTWV0YWRhdGFQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBpbmplY3QoQ29yZUJpbmRpbmdzLkNPTlRST0xMRVJfQ0xBU1MsIHtvcHRpb25hbDogdHJ1ZX0pIHByb3RlY3RlZCBfY29udHJvbGxlckNsYXNzOiBDb25zdHJ1Y3Rvcjx7fT4sXG4gICAgICAgIEBpbmplY3QoQ29yZUJpbmRpbmdzLkNPTlRST0xMRVJfTUVUSE9EX05BTUUsIHtvcHRpb25hbDogdHJ1ZX0pIHByb3RlY3RlZCBfbWV0aG9kTmFtZTogc3RyaW5nLFxuICAgICkge1xuICAgICAgICBzdXBlcihfY29udHJvbGxlckNsYXNzLCBfbWV0aG9kTmFtZSk7XG4gICAgfVxuXG4gICAgdmFsdWUoKTogTXlBdXRoZW50aWNhdGlvbk1ldGFkYXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jb250cm9sbGVyQ2xhc3MgfHwgIXRoaXMuX21ldGhvZE5hbWUpIHJldHVybjtcbiAgICAgICAgcmV0dXJuIE1ldGFkYXRhSW5zcGVjdG9yLmdldE1ldGhvZE1ldGFkYXRhPE15QXV0aGVudGljYXRpb25NZXRhZGF0YT4oXG4gICAgICAgICAgICBBVVRIRU5USUNBVElPTl9NRVRBREFUQV9LRVksXG4gICAgICAgICAgICB0aGlzLl9jb250cm9sbGVyQ2xhc3MucHJvdG90eXBlLFxuICAgICAgICAgICAgdGhpcy5fbWV0aG9kTmFtZSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=