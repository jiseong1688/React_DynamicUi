import { render, screen } from '@testing-library/react'
import Title from './Title'
import { BookSotreThemeProvider } from '../../context/themeContext';

describe("Title 컴포넌트 테스트",()=>{
    it("렌더를 확인", ()=>{
        // 1. 렌더
        render(
        <BookSotreThemeProvider>
            <Title size="large">제목</Title>
        </BookSotreThemeProvider>);

        // 2. 확인
        expect(screen.getByText('제목')).toBeInTheDocument();
    });

    it('size props 적용', ()=>{
        const { container} = render(
            <BookSotreThemeProvider>
                <Title size="large">제목</Title>
            </BookSotreThemeProvider>
        );

        expect(container?.firstChild).toHaveStyle({ fontSize: "2rem"});
    })

    it("color props 적용", ()=>{
        const { container} = render(
            <BookSotreThemeProvider>
                <Title size="large">제목</Title>
            </BookSotreThemeProvider>
        );

        expect(container?.firstChild).toHaveStyle({ color: "brown"});
    })
});