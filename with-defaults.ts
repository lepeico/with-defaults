import {DeepPartial} from './deep-partial';
import {merge} from './merge';

/**
 * ### Merges default options into an options object
 *
 * @param options Options object
 * @param defaults Default options object
 *
 * @returns Merged options object
 *
 * @example
 * const options = withDefaults({a: 1}, {b: 2}) // options = {a: 1, b: 2}
 *
 * @example
 * const options = withDefaults({a: 1}, {b: 2, a: 3}) // options = {a: 1, b: 2}
 *
 * @example
 * const options = withDefaults({a: 1, b: 2}, {a: 3, c: 4}) // options = {a: 1, b: 2, c: 4}
 */
export const withDefaults = <T extends Record<string, unknown>>(
	options: DeepPartial<T>,
	defaults: T,
): T => merge(defaults, options);
