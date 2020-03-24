import React from 'react';
import { JumboContainer, Avatar, Center } from '../profile.styles.jsx'

const ProfileAvatar = ({ profile }) => {

    return(
    <JumboContainer>
        <Center>
            <Avatar alt="" src={`https://picsum.photos/id/${Math.floor((Math.random() * 100) + 1)}/300/200`} />
        </Center>
    </JumboContainer>
    );
}

export default ProfileAvatar;