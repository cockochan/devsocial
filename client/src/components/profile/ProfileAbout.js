import React,{Fragment} from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({profile:{
    bio,
    skills,
    user:{name}
}}) => {
    return (
        <div className="profile-about bg-light p-2">
            {bio&&<Fragment>
                <h2 className="text-primary">{name.trim().split(' ')[0]}s Bio</h2>
        <p>
         {bio}
        </p>
        </Fragment>}
       
        <div className="line"></div>
        <h2 className="text-primary">Skill Set</h2>
        <div className="skills">
            {skills.map((skill, index)=>(<div key={index} className='p-1'><i className='fas fa-check'/>{skill}</div>))}
          <div className="p-1"><i className="fa fa-check"></i> HTML</div>
          <div className="p-1"><i className="fa fa-check"></i> CSS</div>
          <div className="p-1"><i className="fa fa-check"></i> JavaScript</div>
          <div className="p-1"><i className="fa fa-check"></i> Python</div>
          <div className="p-1"><i className="fa fa-check"></i> C#</div>
        </div>
      </div>
    )
}

ProfileAbout.propTypes = {
profile:PropTypes.object.isRequired,
}

export default ProfileAbout
