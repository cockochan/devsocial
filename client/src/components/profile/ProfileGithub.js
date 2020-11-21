import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import Spinner from '../../layout/Spinner'
import PropTypes from 'prop-types'
import {getGithubRepos} from '../../actions/profile'

const ProfileGithub = ({ username, getGithubRepos, repos}) => {

useEffect (()=>{
    getGithubRepos(username);

},[getGithubRepos(username)])

    return (<div className="profile-github">
        <h2 className="text-primary my-1">Github Repos</h2>
        {repos === null? <Spinner/>:(
            repos.map(repo=>(
                <div key={repo.id} className='repo bg-white p-1 my-1'>
<div>
<h4 href={repo.htm_url} target ='_blank' rel="noopener noreferrer"></h4>
</div>
                </div>

            ))
        )}
    </div>);
}

ProfileGithub.propTypes = {
    getGithubRepos:PropTypes.func.isRequired,
    repos:PropTypes.array.isRequired,
    username:PropTypes.string.isRequired

}
const mapStateToProps = state => ({
    repos:state.profile.repos
})

export default connect(mapStateToProps ,{getGithubRepos})(ProfileGithub);
