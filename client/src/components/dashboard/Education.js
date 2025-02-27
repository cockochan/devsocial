
import React, {Fragment} from 'react'
import propTypes from 'prop-types';
import {connect } from  'react-redux';
import Moment from 'react-moment'
import {deleteEducation} from'../../actions/profile'
export const Education = ({education,deleteEducation}) => {
    const educations = education.map(edu=>(
        <tr key={edu.id}>
    <td className="hide-sm">{edu.degree}</td>
    <td><Moment format='YYYY/MM/DD'>{edu.from}</Moment>-{''}{edu.to===null?('Now'):(<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)}</td>
    <td>
<button className="btn btn-danger" onClick={()=>deleteEducation(edu._id)} >Delete</button></td></tr>
    ))
    return (
        <Fragment>
          <h2 className="my-2">Education Credentials</h2>
          <table className="table">
            <thead>
              <tr>
                <th>School</th>
                <th className="hide-sm">Degree</th>
                <th className="hide-sm">Years</th>
                <th />
              </tr>
            </thead>
            <tbody>{educations}</tbody>
          </table>
        </Fragment>
      );
    };
Education.propTypes={
    education: propTypes.array.isRequired,
    deleteEducation: propTypes.func.isRequired,
}
export default connect(null,{deleteEducation})(Education)