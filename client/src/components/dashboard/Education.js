
import React, {Fragment} from 'react'
import propTypes from 'prop-types';
import {connect } from  'react-redux';
import Moment from 'react-moment'
export const Education = ({education}) => {
    const educations = education.map(edu=>(
        <tr key={edu.id}>
    <td className="hide-sm">{edu.degree}</td>
    <td><Moment format='YYYY/MM/DD'>{edu.from}</Moment>-{''}{edu.to===null?('Now'):(<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)}</td>
<td className="btn btn-danger">Delete</td></tr>
    ))
    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
    <tbody>{educations}</tbody>
            </table>
        </Fragment>
    )
};
Education.propTypes={
    education: propTypes.array.isRequired,
}
export default Education