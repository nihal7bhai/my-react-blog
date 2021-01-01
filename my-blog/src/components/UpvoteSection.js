import React from 'react'

const UpvoteSection = ({articleName, upvotes, setarticleInfo}) => {
    const upvoteArticle = async () =>{
        const result = await fetch(`/api/articles/${articleName}/upvote`,{
            method:'post',
        })
        const body = await result.json()
        setarticleInfo(body)
    }
    return(
        <div className="upvote-section">
            <button onClick={upvoteArticle}>Add Upvote</button>
            <p>This post has benn upvoted {upvotes} times.</p>
        </div>
    );
}
export default UpvoteSection