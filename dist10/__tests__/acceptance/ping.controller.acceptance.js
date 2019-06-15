"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const test_helper_1 = require("./test-helper");
describe('PingController', () => {
    let app;
    let client;
    before('setupApplication', async () => {
        ({ app, client } = await test_helper_1.setupApplication());
    });
    after(async () => {
        await app.stop();
    });
    it('invokes GET /ping', async () => {
        const res = await client.get('/ping?msg=world').expect(200);
        testlab_1.expect(res.body).to.containEql({ greeting: 'Hello from LoopBack' });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5jb250cm9sbGVyLmFjY2VwdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvX190ZXN0c19fL2FjY2VwdGFuY2UvcGluZy5jb250cm9sbGVyLmFjY2VwdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBaUQ7QUFFakQsK0NBQStDO0FBRS9DLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDOUIsSUFBSSxHQUF3QixDQUFDO0lBQzdCLElBQUksTUFBYyxDQUFDO0lBRW5CLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNwQyxDQUFDLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBQyxHQUFHLE1BQU0sOEJBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ2YsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDakMsTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELGdCQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NsaWVudCwgZXhwZWN0fSBmcm9tICdAbG9vcGJhY2svdGVzdGxhYic7XG5pbXBvcnQge0tlcnphY2hpQXBwbGljYXRpb259IGZyb20gJy4uLy4uJztcbmltcG9ydCB7c2V0dXBBcHBsaWNhdGlvbn0gZnJvbSAnLi90ZXN0LWhlbHBlcic7XG5cbmRlc2NyaWJlKCdQaW5nQ29udHJvbGxlcicsICgpID0+IHtcbiAgbGV0IGFwcDogS2VyemFjaGlBcHBsaWNhdGlvbjtcbiAgbGV0IGNsaWVudDogQ2xpZW50O1xuXG4gIGJlZm9yZSgnc2V0dXBBcHBsaWNhdGlvbicsIGFzeW5jICgpID0+IHtcbiAgICAoe2FwcCwgY2xpZW50fSA9IGF3YWl0IHNldHVwQXBwbGljYXRpb24oKSk7XG4gIH0pO1xuXG4gIGFmdGVyKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBhcHAuc3RvcCgpO1xuICB9KTtcblxuICBpdCgnaW52b2tlcyBHRVQgL3BpbmcnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldCgnL3Bpbmc/bXNnPXdvcmxkJykuZXhwZWN0KDIwMCk7XG4gICAgZXhwZWN0KHJlcy5ib2R5KS50by5jb250YWluRXFsKHtncmVldGluZzogJ0hlbGxvIGZyb20gTG9vcEJhY2snfSk7XG4gIH0pO1xufSk7XG4iXX0=