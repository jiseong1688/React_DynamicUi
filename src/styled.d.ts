import 'styled-components';
import { ThemeName } from './style/theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: ThemeName;
        color: {
            background: string;
            primary: string;
            secondary: string;
            third: string;
            border: string;
            text: string;
        };
        heading: {
            large: { fontSize: string };
            medium: { fontSize: string };
            small: { fontSize: string };
        };
        button: {
            small: { fontSize: string; padding: string };
            medium: { fontSize: string; padding: string };
            large: { fontSize: string; padding: string };
        };
        buttonScheme: {
            primary: { color: string; backgroundColor: string };
            normal: { color: string; backgroundColor: string };
            like: { color: string; backgroundColor: string };
        };
        borderRadius: { default: string };
        layout: {
            width: {
                large: string;
                medium: string;
                small: string;
            };
        };
    }
}