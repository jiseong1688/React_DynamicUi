import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
        background: string;
        primary: string;
        // 필요한 컬러 계속 추가
        };
    }
}