import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteEducation } from '../../../redux/profile/api';

const EducationTable = ({ education, deleteEducation }) => {
    return(
        <div style={{ marginTop: '2%', backgroundColor: 'white'}}>
        <Table  striped bordered>
        <thead>
            <tr>
            <th>School</th>
            <th>Field of study</th>
            <th>Delete</th>
            </tr>
        </thead>
            {education.map((edu, index) => (
                <tbody key={index}>
                    <tr>
                    <td>{edu.school}</td>
                    <td>{edu.fieldofstudy}</td>
                    <td>
                    <span onClick={() => deleteEducation(edu._id)} style={{fontSize: '20px', color: 'red' }}>
                    <i className="far fa-times-circle"></i>
                </span>
                    </td>
                    </tr>
                </tbody>
            ))}
            </Table>
        </div>
    )
}

export default connect(null, { deleteEducation })(EducationTable);