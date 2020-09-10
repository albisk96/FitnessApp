import React from 'react';
import UsersTable from '../../components/users-table/users-table.component';
import WorkoutTable from '../../components/workouts/workout-table.component';

const AdminPage = () => { 
    return (
        <div>
        <center style={{ marginTop: '5%', color: 'white'}}>
            <h2>Admin Dashboard</h2>
            <UsersTable />
            <h2 style={{ marginTop: '5%'}}>Workouts</h2>
            <WorkoutTable />
        </center>
        </div>
        );
};

export default AdminPage;