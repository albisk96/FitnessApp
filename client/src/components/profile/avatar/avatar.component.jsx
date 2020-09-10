import React from 'react';
import { JumboContainer, Avatar, Center } from '../profile.styles.jsx'

const ProfileAvatar = ({ profile }) => {
    return(
    <div>
        <Center>
            <Avatar alt="" src={profile.user.avatar} />
        </Center>
    </div>
    );
}

export default ProfileAvatar;