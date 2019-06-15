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
const authentication_1 = require("@loopback/authentication");
const permission_key_1 = require("../permission-key");
var MyAuthBindings;
(function (MyAuthBindings) {
    MyAuthBindings.STRATEGY = context_1.BindingKey.create('authentication.strategy');
})(MyAuthBindings = exports.MyAuthBindings || (exports.MyAuthBindings = {}));
let MyAuthActionProvider = class MyAuthActionProvider {
    constructor(getStrategy, setCurrentUser, getMetadata) {
        this.getStrategy = getStrategy;
        this.setCurrentUser = setCurrentUser;
        this.getMetadata = getMetadata;
    }
    value() {
        return request => this.action(request);
    }
    async action(request) {
        const metadata = await this.getMetadata();
        if (metadata && metadata.type === permission_key_1.SecuredType.PERMIT_ALL)
            return;
        const strategy = await this.getStrategy();
        if (!strategy)
            return;
        const strategyAdapter = new authentication_1.StrategyAdapter(strategy);
        const user = await strategyAdapter.authenticate(request);
        this.setCurrentUser(user);
        return user;
    }
};
MyAuthActionProvider = __decorate([
    __param(0, context_1.inject.getter(MyAuthBindings.STRATEGY)),
    __param(1, context_1.inject.setter(authentication_1.AuthenticationBindings.CURRENT_USER)),
    __param(2, context_1.inject.getter(authentication_1.AuthenticationBindings.METADATA)),
    __metadata("design:paramtypes", [Function, Function, Function])
], MyAuthActionProvider);
exports.MyAuthActionProvider = MyAuthActionProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1hY3Rpb24ucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVsZWdyYW0tYXV0aG9yaXphdGlvbi9wcm92aWRlcnMvYXV0aC1hY3Rpb24ucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0U7QUFDL0UsNkRBQThHO0FBSTlHLHNEQUE4QztBQUM5QyxJQUFpQixjQUFjLENBRTlCO0FBRkQsV0FBaUIsY0FBYztJQUNkLHVCQUFRLEdBQUcsb0JBQVUsQ0FBQyxNQUFNLENBQXVCLHlCQUF5QixDQUFDLENBQUM7QUFDL0YsQ0FBQyxFQUZnQixjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUU5QjtBQUNELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQzdCLFlBQ3FELFdBQTZCLEVBQ2pCLGNBQW1DLEVBQ3ZDLFdBQTZDO1FBRnJELGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBcUI7UUFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQWtDO0lBQ3ZHLENBQUM7SUFFSixLQUFLO1FBQ0QsT0FBTyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBZ0I7UUFDekIsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUMsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksS0FBSyw0QkFBVyxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBRWpFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUN0QixNQUFNLGVBQWUsR0FBRyxJQUFJLGdDQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUNKLENBQUE7QUF0Qlksb0JBQW9CO0lBRXhCLFdBQUEsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3RDLFdBQUEsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsdUNBQXNCLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDbEQsV0FBQSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyx1Q0FBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTs7R0FKMUMsb0JBQW9CLENBc0JoQztBQXRCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JpbmRpbmdLZXksIEdldHRlciwgaW5qZWN0LCBQcm92aWRlciwgU2V0dGVyfSBmcm9tIFwiQGxvb3BiYWNrL2NvbnRleHRcIjtcbmltcG9ydCB7QXV0aGVudGljYXRlRm4sIEF1dGhlbnRpY2F0aW9uQmluZGluZ3MsIFN0cmF0ZWd5QWRhcHRlciwgVXNlclByb2ZpbGV9IGZyb20gXCJAbG9vcGJhY2svYXV0aGVudGljYXRpb25cIjtcbmltcG9ydCB7U3RyYXRlZ3l9IGZyb20gXCJwYXNzcG9ydFwiO1xuaW1wb3J0IHtSZXF1ZXN0fSBmcm9tIFwiQGxvb3BiYWNrL3Jlc3RcIjtcbmltcG9ydCB7TXlBdXRoZW50aWNhdGlvbk1ldGFkYXRhfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7U2VjdXJlZFR5cGV9IGZyb20gXCIuLi9wZXJtaXNzaW9uLWtleVwiO1xuZXhwb3J0IG5hbWVzcGFjZSBNeUF1dGhCaW5kaW5ncyB7XG4gICAgZXhwb3J0IGNvbnN0IFNUUkFURUdZID0gQmluZGluZ0tleS5jcmVhdGU8U3RyYXRlZ3kgfCB1bmRlZmluZWQ+KCdhdXRoZW50aWNhdGlvbi5zdHJhdGVneScpO1xufVxuZXhwb3J0IGNsYXNzIE15QXV0aEFjdGlvblByb3ZpZGVyIGltcGxlbWVudHMgUHJvdmlkZXI8QXV0aGVudGljYXRlRm4+IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQGluamVjdC5nZXR0ZXIoTXlBdXRoQmluZGluZ3MuU1RSQVRFR1kpIHJlYWRvbmx5IGdldFN0cmF0ZWd5OiBHZXR0ZXI8U3RyYXRlZ3k+LFxuICAgICAgICBAaW5qZWN0LnNldHRlcihBdXRoZW50aWNhdGlvbkJpbmRpbmdzLkNVUlJFTlRfVVNFUikgcmVhZG9ubHkgc2V0Q3VycmVudFVzZXI6IFNldHRlcjxVc2VyUHJvZmlsZT4sXG4gICAgICAgIEBpbmplY3QuZ2V0dGVyKEF1dGhlbnRpY2F0aW9uQmluZGluZ3MuTUVUQURBVEEpIHJlYWRvbmx5IGdldE1ldGFkYXRhOiBHZXR0ZXI8TXlBdXRoZW50aWNhdGlvbk1ldGFkYXRhPixcbiAgICApIHt9XG5cbiAgICB2YWx1ZSgpOiBBdXRoZW50aWNhdGVGbiB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0ID0+IHRoaXMuYWN0aW9uKHJlcXVlc3QpO1xuICAgIH1cblxuICAgIGFzeW5jIGFjdGlvbihyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxVc2VyUHJvZmlsZSB8IHVuZGVmaW5lZD4ge1xuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IHRoaXMuZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgaWYgKG1ldGFkYXRhICYmIG1ldGFkYXRhLnR5cGUgPT09IFNlY3VyZWRUeXBlLlBFUk1JVF9BTEwpIHJldHVybjtcblxuICAgICAgICBjb25zdCBzdHJhdGVneSA9IGF3YWl0IHRoaXMuZ2V0U3RyYXRlZ3koKTtcbiAgICAgICAgaWYgKCFzdHJhdGVneSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBzdHJhdGVneUFkYXB0ZXIgPSBuZXcgU3RyYXRlZ3lBZGFwdGVyKHN0cmF0ZWd5KTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHN0cmF0ZWd5QWRhcHRlci5hdXRoZW50aWNhdGUocmVxdWVzdCk7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFVzZXIodXNlcik7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cbn1cbiJdfQ==