import { Interceptor, Provider, InvocationContext, ValueOrPromise } from "@loopback/core";

export class Auth implements Provider<Interceptor> {
  constructor() { }

  value() {
    return this.intercept.bind(this);
  }

  async intercept<T>(
    invocationCtx: InvocationContext,
    next: () => ValueOrPromise<T>,
  ) {
    const name = invocationCtx.args[0];

    return await next();
  }
}
