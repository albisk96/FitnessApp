import React from 'react';
import axios from 'axios';

const DeleteUser = ({ user_id }) =>{

    const deleteUser = id => {
        axios.delete(`/api/users/${id}`).then(
            res => {window.location.reload()}
        )
    }

    return(
        <div>
            <span onClick={() => deleteUser(user_id)} style={{fontSize: '20px', color: 'red' }}>
                <i className="far fa-times-circle"></i>
            </span>
        </div>
    )
}

export default DeleteUser;