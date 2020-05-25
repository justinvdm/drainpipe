import { expectType, expectError } from 'tsd'
import vv from './drainpipe'

declare function numToStr(v: number): string
declare function arrayify<V>(v: V): V[]
declare function numStrToBool(a: number, b: string): boolean

expectType<string[]>(vv(23)(numToStr)(arrayify)())
expectType<boolean>(vv(23)(numStrToBool, 'foo')())

expectError(() => vv(23)(numToStr)(numToStr))
expectError(() => vv(23)(numStrToBool, 2))
