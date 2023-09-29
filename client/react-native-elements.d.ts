type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements' {
    export interface TextProps {}

    export interface Colors {
        background: string;
        border: string;
        text: string;
        alttext: string;
        danger: string;
    }

    export interface FullTheme {
        colors: RecursivePartial<Colors>;
        Text: Partial<TextProps>;
    }
}