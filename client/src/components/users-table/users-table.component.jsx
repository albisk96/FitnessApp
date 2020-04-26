import React, { useEffect, useState } from 'react';
import AddUser from './add-user.component';
import EditUser from './edit-user.component';
import DeleteUser from './delete-user.component';
import Pagination from '../pagination/pagination';
import axios from 'axios';
import { search } from '../../helpers/search';

const AdminPage = () => {

    const [users, setUsers] = useState([]);

    const [itemsCount, setItemsCount] = useState(1);
    const page = search.useQuery().get('page');
  
    useEffect(() => {
        async function getUsers(){
        const res = await axios.get(`/api/users?page=${page || 1}`)
        setUsers(res.data)
        setItemsCount(+res.headers['x-total-count'] || 1);
    } 
    getUsers()
    }, [page])

    // useEffect(() => {
    //     async function getTrainers() {
    //       const res = await axios.get(`/api/trainer?page=${page || 1}`);
    //       setTrainers(res.data);
    //       setItemsCount(+res.headers['x-total-count'] || 1);
    //     }
    //     getTrainers();
    //   }, [page]);

    return (
    <div className='container'>
        <table className="table table-striped table-bordered" style={{ width: '50vw', marginTop: '5%', backgroundColor: 'white'}}>
            <thead>
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
                {users.map((user, index) => (
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
        <center style={{ marginLeft: '46%', color: 'black'}}>

        <Pagination
        selectedPage={page ? +page : 1}
        pagesCount={Math.ceil(itemsCount / 5)}
        />

        </center>
        <AddUser className="btn btn-outline-danger my-2 my-sm-0" modalTitle="Register" buttonName="Add user" />
    </div>
    );
};

export default AdminPage;