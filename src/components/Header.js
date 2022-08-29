import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import { Flag, Home, StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle,Add,Forum,NotificationsActive,ExpandMore } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png" alt='Facebook logo'/>
        </div>

        <div className='header__input'>
            <SearchIcon/>
            <input type='text' placeholder='Search Facebook'/>
        </div>


        <div className='header__center'>
            <div className='header__option header__option--active'>
                <Home fontsize='large'/>
            </div>

            <div className='header__option'>
                <Flag fontsize='large'/>
            </div>

            <div className='header__option'>
                <SubscriptionsOutlined fontsize='large'/>
            </div>

            <div className='header__option'>
                <StorefrontOutlined fontsize='large'/>
            </div>

            <div className='header__option'>
                <SupervisedUserCircle fontsize='large'/>
            </div>
        </div>

        <div className='header__right'>
            <div className='header__info'>
                <Avatar src="https://scontent.fagr1-4.fna.fbcdn.net/v/t1.6435-9/150012750_939037486636067_7622621387239806641_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nns6fQelPAcAX-gN-ka&_nc_ht=scontent.fagr1-4.fna&oh=00_AT9b9kCYHaGF2xzQoSC_GmROxcrpqC76cxu3bzU0B-PzJw&oe=6331BE68"/>
                <h4 className='avatar__text'>Ansh Viyogi</h4>
            </div>

            <IconButton>
            <Add/>
            </IconButton>

<IconButton>
            <Forum/>
            </IconButton>

<IconButton>
            <NotificationsActive/>
            </IconButton>

            <IconButton>
            <ExpandMore/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header