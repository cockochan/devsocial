import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../../layout/Spinner'
import PostItem from './PostItem'
import PostForm from './PostForm'
import {getPosts} from '../../actions/post'
import {loadUser} from '../../actions/auth'
const Posts = ({ getPosts, post: { posts, loading }, loadUser }) => {
    useEffect(() => {
      getPosts();
      loadUser();
    }, [getPosts]);

    return loading?<Spinner/>:<Fragment>
        <h1 className='large text-primary'>Posts</h1>
        <p className='lead'>
            <i className='fas fa-user'></i>Welcome to the community
        </p>
       <PostForm />
        <div className='posts'>
            {posts.length>0&&posts.map((post)=>(
                <PostItem key={post._id} post={post}/>
            ))}
        </div>
    </Fragment>
 
}

Posts.propTypes = {
getPosts: PropTypes.func.isRequired,
post:PropTypes.object.isRequired
}
const mapStateToProps =state =>({
    post:state.post
})

export default connect(mapStateToProps, {getPosts,loadUser})(Posts)
