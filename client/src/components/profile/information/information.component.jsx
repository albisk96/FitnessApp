import React from 'react';
import { Line, SocialNetworks } from './information.styles.jsx'
import Moment from 'react-moment';

const Information = ({ profile }) => {
    const DateNow = Date.now
    return(
        <div>
        <p>Name</p>
        <h3>{profile.user.name}</h3>
        <Line />
        <p>Email</p>
        <h3>{profile.user.email}</h3>
        <Line />
        <p>Skype</p>
        <h3>{profile.skype}</h3>
        <Line />
        <p>Age</p>
        <h3>
            <Moment fromNow ago >{profile.DOB}</Moment>
        </h3>
        <Line />
        <p>Social Netorks</p>
        <SocialNetworks>
        <a href={profile.social.facebook} style={{ color: 'inherit' }}><i style={{fontSize: '20px'}} className="fab fa-facebook-f icon-2x"></i></a>
        <a href={profile.social.instagram} style={{ color: 'inherit' }}><i style={{fontSize: '20px'}} className="fab fa-instagram"></i></a>
        <a href={profile.social.youtube} style={{ color: 'inherit' }}><i style={{fontSize: '20px'}} className="fab fa-youtube"></i></a>
        </SocialNetworks>
        <Line />
        </div>
    )
}

export default Information;