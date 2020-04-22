import React from 'react';
import Moment from 'react-moment';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteAchievements } from '../../../redux/profile/api';

const AchievementTable = ({ achievements, deleteAchievements }) => {
    return(
        <div style={{ marginTop: '2%', backgroundColor: 'white'}}>
        <Table  striped bordered>
        <thead>
            <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Delete</th>
            </tr>
        </thead>
            {achievements.map((a, index) => (
                <tbody key={index}>
                    <tr>
                    <td>{a.title}</td>
                    <td><Moment format="YYYY">{a.date}</Moment></td>
                    <td>
                        <span onClick={() => deleteAchievements(a._id)} style={{fontSize: '20px', color: 'red' }}>
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

export default connect(null, { deleteAchievements })(AchievementTable);