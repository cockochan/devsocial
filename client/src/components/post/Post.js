import React, {Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import Spinner from '../../layout/Spinner'
import {getPost} from '../../actions/post'
import PropTypes from 'prop-types'
import PostItem from "../posts/PostItem"
import CommentItem from "../posts/CommentItem"
import CommentForm from "../post/CommentForm"
const Post = ({getPost,post:{post, loading}, match}) => {
    useEffect(()=>{
        getPost(match.params.id);
    },[getPost])

    return loading || post === null?<Spinner/>:<Fragment>
        <PostItem post={post}showActions={false}></PostItem>
        <CommentForm postId={post._id}/>
        <div className="comments">
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
}

Post.propTypes = {
 getPost:PropTypes.func.isRequired,
 post: PropTypes.object.isRequired
}
const mapStateToProps =(state)=>({
    post:state.post
})
export default connect(mapStateToProps,{getPost})(Post)
