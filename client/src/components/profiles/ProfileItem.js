import React from 'react'
import propTypes from 'prop-types'
import Link from 'react-router-dom'

const ProfileItem = ({profile:{
    user:{_id,name,avatart},
    status,
    company,
    location,
    skills
}}) => {
    return (
        <div>
            test
        </div>
    )
}

ProfileItem.propTypes = {
profile:propTypes.object.isRequired,
}

export default ProfileItem
