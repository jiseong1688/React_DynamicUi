import MainNewBooks from "../components/main/MainNewbooks";
import Title from "../components/common/Title";
import MainReview from "../components/main/MainReview";
import { useMain } from "../hooks/useMain";
import styled from "styled-components";
import MainBest from "../components/main/MainBest";
import Banner from "../components/common/banner/Banner";
import { useMediaQuery } from "../hooks/useMediaQuery";

function Home() {
    const {reviews, newBooks, bestBooks, banners} = useMain()
    const {isMobile} = useMediaQuery();

    return (
        <HomeStyle>
            <Banner banners={banners}/>
            <section className="section">
                <Title size="large">베스트 셀러</Title>
                <MainBest books={bestBooks}/>
            </section>
            <section className="section">
                <Title size="large">신간 안내</Title>
                <MainNewBooks books={newBooks}/>
            </section>
            <section className="section">
                <Title size="large">리뷰</Title>
                <MainReview reviews={reviews}/>
            </section>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export default Home;