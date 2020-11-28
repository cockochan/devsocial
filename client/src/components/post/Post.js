import React, {Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import Spinner from '../../layout/Spinner'
import {getPost} from '../../actions/post'
import PropTypes from 'prop-types'
import PostItem from "../posts/PostForm"

const Post = ({getPost,post:{post, loading}, match}) => {
    useEffect(()=>{
        getPost(match.params.id);
    },[getPost])

    return loading || post === null?<Spinner/>:<Fragment>
        <PostItem post={post}showActions={false}></PostItem>
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
