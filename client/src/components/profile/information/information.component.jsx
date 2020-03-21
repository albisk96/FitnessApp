import React from 'react';
import { Line, SocialNetworks } from './information.styles.jsx'

const Information = ({ user: { name, email }}) => {
    return(
        <div>
        <p>Name</p>
        <h3>{name}</h3>
        <Line />
        <p>Email</p>
        <h3>{email}</h3>
        <Line />
        <p>Date of Birth</p>
        <h3>Apr 10 2000</h3>
        <Line />
        <p>Social Netorks</p>
        <SocialNetworks>
        <i style={{fontSize: '20px'}} className="fab fa-facebook-f icon-2x"></i>
        <i style={{fontSize: '20px'}} className="fab fa-instagram"></i>
        <i style={{fontSize: '20px'}} className="fab fa-youtube"></i>
        </SocialNetworks>
        <Line />
        </div>
    )
}

export default Information;