export declare const isBrowser: () => boolean;
export declare const capitalizeFirstLetter: (str: string) => string;
/**
 * 获取类型
 * @param {any} data
 */
export declare const typeOf: (data: any) => "string" | "number" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "null" | "regexp" | "date";
