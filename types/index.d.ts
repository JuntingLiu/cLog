/**
 * 🎨 clog
 * Colourful console log.
 * @Author: Junting
 * @Date: 2022-09-20 13:53:06
 * @Last Modified by: Junting
 * @Last Modified time: 2022-10-11 17:15:32
 */
export declare type ColorTypes = keyof typeof chalkColors;
export declare type TypeApiObjKeys = keyof typeof apiObj;
export declare type ConsoleApiKey = keyof Console;
declare const clog: any;
/**
 * 色彩基调 - 画笔颜色
 * 主色：
 * 辅助色：#f5222d、#faad14、#52c41a、#1890ff
 * 中性色：#000000、#FFFFFF、#808695、#dcdee2、#e8eaec、#f8f8f9
 */
declare const chalkColors: {
    black: string;
    white: string;
    red: string;
    orange: string;
    green: string;
    blue: string;
};
declare const apiObj: {
    readonly log: "black";
    readonly info: "blue";
    readonly warn: "orange";
    readonly error: "red";
    readonly success: "green";
};
export default clog;
