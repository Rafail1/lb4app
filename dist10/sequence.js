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
const rest_1 = require("@loopback/rest");
const authentication_1 = require("@loopback/authentication");
const SequenceActions = rest_1.RestBindings.SequenceActions;
let MySequence = class MySequence {
    constructor(findRoute, parseParams, invoke, send, reject, authenticateRequest) {
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        this.authenticateRequest = authenticateRequest;
    }
    async handle(context) {
        try {
            const { request, response } = context;
            const route = this.findRoute(request);
            await this.authenticateRequest(request);
            const args = await this.parseParams(request, route);
            const result = await this.invoke(route, args);
            this.send(response, result);
        }
        catch (error) {
            this.reject(context, error);
        }
    }
};
MySequence = __decorate([
    __param(0, context_1.inject(SequenceActions.FIND_ROUTE)),
    __param(1, context_1.inject(SequenceActions.PARSE_PARAMS)),
    __param(2, context_1.inject(SequenceActions.INVOKE_METHOD)),
    __param(3, context_1.inject(SequenceActions.SEND)),
    __param(4, context_1.inject(SequenceActions.REJECT)),
    __param(5, context_1.inject(authentication_1.AuthenticationBindings.AUTH_ACTION)),
    __metadata("design:paramtypes", [Function, Function, Function, Function, Function, Function])
], MySequence);
exports.MySequence = MySequence;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VxdWVuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VxdWVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBeUM7QUFDekMseUNBU3dCO0FBQ3hCLDZEQUFnRjtBQUVoRixNQUFNLGVBQWUsR0FBRyxtQkFBWSxDQUFDLGVBQWUsQ0FBQztBQUVyRCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBQ25CLFlBQ2tELFNBQW9CLEVBQ2xCLFdBQXdCLEVBQ3ZCLE1BQW9CLEVBQ2hDLElBQVUsRUFDUixNQUFjLEVBQ0QsbUJBQW1DO1FBTHpDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNoQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBZ0I7SUFFM0YsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBdUI7UUFDaEMsSUFBSTtZQUNBLE1BQU0sRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDO1lBQ3BDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEMsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNwRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQy9CO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7Q0FDSixDQUFBO0FBdkJZLFVBQVU7SUFFZCxXQUFBLGdCQUFNLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2xDLFdBQUEsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDcEMsV0FBQSxnQkFBTSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNyQyxXQUFBLGdCQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzVCLFdBQUEsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUIsV0FBQSxnQkFBTSxDQUFDLHVDQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFBOztHQVB0QyxVQUFVLENBdUJ0QjtBQXZCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdAbG9vcGJhY2svY29udGV4dCc7XG5pbXBvcnQge1xuICAgIEZpbmRSb3V0ZSxcbiAgICBJbnZva2VNZXRob2QsXG4gICAgUGFyc2VQYXJhbXMsXG4gICAgUmVqZWN0LFxuICAgIFJlcXVlc3RDb250ZXh0LFxuICAgIFJlc3RCaW5kaW5ncyxcbiAgICBTZW5kLFxuICAgIFNlcXVlbmNlSGFuZGxlcixcbn0gZnJvbSAnQGxvb3BiYWNrL3Jlc3QnO1xuaW1wb3J0IHtBdXRoZW50aWNhdGVGbiwgQXV0aGVudGljYXRpb25CaW5kaW5nc30gZnJvbSBcIkBsb29wYmFjay9hdXRoZW50aWNhdGlvblwiO1xuXG5jb25zdCBTZXF1ZW5jZUFjdGlvbnMgPSBSZXN0QmluZGluZ3MuU2VxdWVuY2VBY3Rpb25zO1xuXG5leHBvcnQgY2xhc3MgTXlTZXF1ZW5jZSBpbXBsZW1lbnRzIFNlcXVlbmNlSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBpbmplY3QoU2VxdWVuY2VBY3Rpb25zLkZJTkRfUk9VVEUpIHByb3RlY3RlZCBmaW5kUm91dGU6IEZpbmRSb3V0ZSxcbiAgICAgICAgQGluamVjdChTZXF1ZW5jZUFjdGlvbnMuUEFSU0VfUEFSQU1TKSBwcm90ZWN0ZWQgcGFyc2VQYXJhbXM6IFBhcnNlUGFyYW1zLFxuICAgICAgICBAaW5qZWN0KFNlcXVlbmNlQWN0aW9ucy5JTlZPS0VfTUVUSE9EKSBwcm90ZWN0ZWQgaW52b2tlOiBJbnZva2VNZXRob2QsXG4gICAgICAgIEBpbmplY3QoU2VxdWVuY2VBY3Rpb25zLlNFTkQpIHB1YmxpYyBzZW5kOiBTZW5kLFxuICAgICAgICBAaW5qZWN0KFNlcXVlbmNlQWN0aW9ucy5SRUpFQ1QpIHB1YmxpYyByZWplY3Q6IFJlamVjdCxcbiAgICAgICAgQGluamVjdChBdXRoZW50aWNhdGlvbkJpbmRpbmdzLkFVVEhfQUNUSU9OKSBwcml2YXRlIGF1dGhlbnRpY2F0ZVJlcXVlc3Q6IEF1dGhlbnRpY2F0ZUZuXG4gICAgKSB7XG4gICAgfVxuXG4gICAgYXN5bmMgaGFuZGxlKGNvbnRleHQ6IFJlcXVlc3RDb250ZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7cmVxdWVzdCwgcmVzcG9uc2V9ID0gY29udGV4dDtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdGhpcy5maW5kUm91dGUocmVxdWVzdCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0ZVJlcXVlc3QocmVxdWVzdCk7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gYXdhaXQgdGhpcy5wYXJzZVBhcmFtcyhyZXF1ZXN0LCByb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmludm9rZShyb3V0ZSwgYXJncyk7XG4gICAgICAgICAgICB0aGlzLnNlbmQocmVzcG9uc2UsIHJlc3VsdCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLnJlamVjdChjb250ZXh0LCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=