import React from 'react'
import articles from './article-content'
import ArticleList from '../components/ArticleList'

const ArticleListPage =() => {
    return (
    <React.Fragment>
        <h1>Articles:</h1>
        <ArticleList articles={articles} />
    </React.Fragment>
    );
}
export default ArticleListPage;