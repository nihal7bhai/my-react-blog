import React, {useState,useEffect} from 'react'
import articles from './article-content'
import ArticleList from '../components/ArticleList'
import NotFoundPage from './NotFoundPage'
import CommentList from '../components/CommentsList'
import UpvoteSection from '../components/UpvoteSection'
import AddCommentForm from '../components/AddCommentForm'

const ArticlePage = ({ match }) => {
    const name = match.params.name
    const article = articles.find(article => article.name === name)
    const otherarticles = articles.filter(article => article.name!==name)

    const [articlesInfo, setarticleInfo] = useState({upvotes:0, comments:[]})
    useEffect(() => {
        const fetchdata = async () => {
            const result = await fetch(`/api/articles/${name}`)
            const body = await result.json()
            setarticleInfo(body)
        }
        fetchdata()
        // setarticleInfo({upvotes:Math.ceil(Math.random()*10)})
    },[name])

    if(!article) return <NotFoundPage />

    return (
    <React.Fragment>
        <h1>{article.name}</h1>
        <UpvoteSection articleName={name} upvotes={articlesInfo.upvotes} setarticleInfo={setarticleInfo} />

        {article.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}

        <CommentList comments={articlesInfo.comments} />
        <AddCommentForm articleName={name} setarticleInfo={setarticleInfo} />

        <h3> Other Aricles:</h3>
        <ArticleList articles={otherarticles} />
    </React.Fragment>
    );
}
export default ArticlePage;