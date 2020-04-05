import React, { useEffect, useState } from 'react';
import AddUser from './add-user.component';
import EditUser from './edit-user.component';
import DeleteUser from './delete-user.component';
import Pagination from '../pagination/pagination';
import axios from 'axios';

const AdminPage = () => {

    const [users, setUsers] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
  
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

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
    <div>
        <table className="table table-striped table-bordered" style={{ width: '50vw', marginTop: '5%'}}>
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Admin</th>
                <th scope="col">Is Confirmed?</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
                {currentUsers.map((user, index) => (
                    <tr key={index}>
                    <th scope="col">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{user.confirmed ? 'true' : 'false'}</td>
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
        <center style={{ marginLeft: '48%'}}>
        <Pagination postsPerPage={usersPerPage} totalPosts={users.length} paginate={paginate}/>
        </center>
        <AddUser className="btn btn-outline-danger my-2 my-sm-0" modalTitle="Register" buttonName="Add user" />
    </div>
    );
};

export default AdminPage;