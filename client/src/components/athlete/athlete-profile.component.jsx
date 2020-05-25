import React from 'react';
import Moment from 'react-moment';

const ProfileInfo = ({ athlete: {height, weight, user, DOB} }) => {

    function calculateData(data){

        if(data.length > 0){
            return data[data.length - 1];
        } else if (data){
            return data;
        } else {
            return 'There is no data'
        }
    };

    return (
    <center>
    <div style={{ marginTop: '3%'}}>
        <h1>{`${user.name} Profile`}</h1>
    </div>
    <div style={{ marginTop: '5%'}}>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0% 30%'}}>
        <p style={{ marginTop: '3%'}}>Email</p>
        <h2>{user.email}</h2>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0% 30%'}}>
        <p style={{ marginTop: '3%'}}>Age</p>
        <h2>
            <Moment fromNow ago >{DOB}</Moment>
        </h2>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0% 30%'}}>
        <p style={{ marginTop: '3%'}}>Weight Kg.</p>
        <h1>{calculateData(weight)}</h1>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0% 30%'}}>
        <p style={{ marginTop: '3%'}}>Height cm.</p>
        <h1>{calculateData(height)}</h1>
    </div>
    </div>
    </center>
    );
}

export default ProfileInfo;