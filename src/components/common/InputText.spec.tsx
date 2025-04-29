import React from 'react';
import { render, screen } from '@testing-library/react'
import InputText from './InputText';
import { BookSotreThemeProvider } from '../../context/themeContext';

describe("InputText 컴포넌트 테스트",()=>{
    it("렌더를 확인", ()=>{
        // 1. 렌더
        render(
        <BookSotreThemeProvider>
            <InputText placeholder="여기에 입력하세요"/>
        </BookSotreThemeProvider>);

        // 2. 확인
        expect(screen.getByPlaceholderText("여기에 입력하세요")).toBeInTheDocument();
    });

    it("forwardRef 테스트", ()=>{
        const ref = React.createRef<HTMLInputElement>();
        render(
        <BookSotreThemeProvider>
            <InputText placeholder="여기에 입력하세요" ref={ref}/>
        </BookSotreThemeProvider>);

        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
});