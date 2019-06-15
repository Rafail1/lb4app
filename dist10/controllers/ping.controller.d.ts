/// <reference types="express" />
import { Request } from '@loopback/rest';
/**
 * A simple controller to bounce back http requests
 */
export declare class PingController {
    private req;
    constructor(req: Request);
    ping(): object;
    testIsAuthenticated(): {
        message: string;
    };
    testPermitAll(): {
        message: string;
    };
    testDenyAll(): {
        message: string;
    };
    testHasAnyRole(): {
        message: string;
    };
    testIdRoles(id: string): {
        message: string;
    };
    testHasRoles(): {
        message: string;
    };
}
