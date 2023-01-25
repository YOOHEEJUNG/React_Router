import { Fragment } from "react";
import NewsArticle from "./NewsArticle";
import NewsCategory from "./NewsCategory";
import NewList from "./NewsList";

const NewsHome = () => {

    return (
        <Fragment>
            <h3>뉴스홈 테스트</h3>
            <NewsCategory/>
            <NewList/>
        </Fragment>
    )

}

export default NewsHome;