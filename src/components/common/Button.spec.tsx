import { render, screen } from '@testing-library/react'
import Button from './Button';
import { BookSotreThemeProvider } from '../../context/themeContext';

describe("Button 컴포넌트 테스트",()=>{
    it("렌더를 확인", ()=>{
        // 1. 렌더
        render(
        <BookSotreThemeProvider>
            <Button size="large" scheme="primary">버튼</Button>
        </BookSotreThemeProvider>);

        // 2. 확인
        expect(screen.getByText('버튼')).toBeInTheDocument();
    });

    it('size props 적용', ()=>{
        const { container } = render(
            <BookSotreThemeProvider>
                <Button size="large" scheme="primary">
                    버튼
                </Button>
            </BookSotreThemeProvider>
        );

        expect(screen.getByRole("button",{name:"버튼"})).toHaveStyle({ fontSize: "1.5rem"});
    })

    it("color props 적용", ()=>{
        const { container} = render(
            <BookSotreThemeProvider>
                <Button size="large" scheme="primary">버튼</Button>
            </BookSotreThemeProvider>
        );

        expect(container?.firstChild).toHaveStyle({ color: "white"});
    })

    it("disabled props 적용",()=>{
        render(
            <BookSotreThemeProvider>
                <Button size="large" scheme="primary" disabled>버튼</Button>
            </BookSotreThemeProvider>
        )

        expect(screen.getByRole("button")).toBeDisabled()
    })
});