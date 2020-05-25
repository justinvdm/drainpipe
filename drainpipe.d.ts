export interface Chainable<A> {
  (): A
  <B, XArgs extends unknown[]>(
    fn: (a: A, ...xargs: XArgs) => B,
    ...xargs: XArgs
  ): Chainable<B>
}

declare function drainpipe<Value>(value: Value): Chainable<Value>

export default drainpipe
