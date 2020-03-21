import React, { useEffect, useState } from 'react';
import AddUser from './add-user.component';
import EditUser from './edit-user.component';
import DeleteUser from './delete-user.component';
import axios from 'axios';

const AdminPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        function getUsers(){
        axios.get('/api/users')
        .then(
            res => setUsers(res.data)
        ).catch(function(err){
            console.log(err)
        })
    } 
    getUsers()
    }, [])

    return (
    <div>
        <table className="table table-striped table-bordered" style={{ width: '50vw', marginTop: '5%'}}>
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Admin</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index}>
                    <th scope="col">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                    <div style={{ display: 'flex' }}>
                        <DeleteUser user_id={user._id} />
                        <EditUser user_id={user._id} />
                    </div>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>   
        <AddUser className="btn btn-outline-danger my-2 my-sm-0" modalTitle="Register" buttonName="Register" />
    </div>
    );
};

export default AdminPage;