import React, {Fragment} from 'react'
import propTypes from 'prop-types';
import {connect } from  'react-redux';
import Moment from 'react-moment'
export const Experience = ({experience}) => {
    const experiences = experience.map(exp=>(
        <tr key={exp.id}>
    <td className="hide-sm">{exp.title}</td>
    <td><Moment format='YYYY/MM/DD'>{exp.from}</Moment>-{exp.to===null?('Now'):(<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)}</td>
<td className="btn btn-danger">Delete</td></tr>
    ))
    return (
        <Fragment>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                </thead>
    <tbody>{experiences}</tbody>
            </table>
        </Fragment>
    )
};
Experience.propTypes={
    experience: propTypes.array.isRequired,
}
export default Experience