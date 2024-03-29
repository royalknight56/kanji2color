declare module 'kanji2color' {
    export function kanji2Color(kanji: string): string | undefined;
    export function color2Kanji(color: string): string[] | undefined;
    export const colors: { [key: string]: string };
    export const swipedColors: { [key: string]: string[] };
}