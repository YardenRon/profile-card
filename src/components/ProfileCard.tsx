import React from 'react';
import './ProfileCard.scss';
import dogImage from "../assets/dog.jpg";

export const ProfileCard = () => {
    return (
        <div className='profile-card-container'>
            <div className='img-container'> 
                <img src={dogImage} alt='dog picture' />
            </div>
            <div className='name'>Mister Golden</div>
            <div className='role'>Dogs Manager</div>
            <div className='rating'></div>
            <div className='description'>Mister golden known for his vast knowledge of types of dogs and for his good interpersonal skills</div>
            <div className='stats-container'>
                <div className='stat'>
                    <span className='stat-count'>6,595</span>
                    <span className='stat-name'>Followers</span>
                </div>
                <div className='stat'>
                    <span className='stat-count'>755</span>
                    <span className='stat-name'>Likes</span>
                </div>
                <div className='stat'>
                    <span className='stat-count'>104</span>
                    <span className='stat-name'>Photos</span>
                </div>
            </div>
        </div>
    );
};