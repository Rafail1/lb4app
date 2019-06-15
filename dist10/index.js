"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.KerzachiApplication = application_1.KerzachiApplication;
async function main(options = {}) {
    const app = new application_1.KerzachiApplication(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBa0Q7QUFHMUMsOEJBSEEsaUNBQW1CLENBR0E7QUFFcEIsS0FBSyxVQUFVLElBQUksQ0FBQyxVQUE2QixFQUFFO0lBQ3hELE1BQU0sR0FBRyxHQUFHLElBQUksaUNBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsTUFBTSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQztJQUUvQixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFWRCxvQkFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7S2VyemFjaGlBcHBsaWNhdGlvbn0gZnJvbSAnLi9hcHBsaWNhdGlvbic7XG5pbXBvcnQge0FwcGxpY2F0aW9uQ29uZmlnfSBmcm9tICdAbG9vcGJhY2svY29yZSc7XG5cbmV4cG9ydCB7S2VyemFjaGlBcHBsaWNhdGlvbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKG9wdGlvbnM6IEFwcGxpY2F0aW9uQ29uZmlnID0ge30pIHtcbiAgY29uc3QgYXBwID0gbmV3IEtlcnphY2hpQXBwbGljYXRpb24ob3B0aW9ucyk7XG4gIGF3YWl0IGFwcC5ib290KCk7XG4gIGF3YWl0IGFwcC5zdGFydCgpO1xuXG4gIGNvbnN0IHVybCA9IGFwcC5yZXN0U2VydmVyLnVybDtcbiAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nIGF0ICR7dXJsfWApO1xuICBjb25zb2xlLmxvZyhgVHJ5ICR7dXJsfS9waW5nYCk7XG5cbiAgcmV0dXJuIGFwcDtcbn1cbiJdfQ==