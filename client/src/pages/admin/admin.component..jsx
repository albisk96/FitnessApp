import React from 'react';
import UsersTable from '../../components/users-table/users-table.component';

const AdminPage = () => { 
    return (
        <div>
        <center style={{ marginTop: '5%', color: 'white'}}>
            <h2>Admin Dashboard</h2>
            <UsersTable />
        </center>
        </div>
        );
};

export default AdminPage;