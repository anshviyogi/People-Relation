import React, { useState } from "react";
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import {LocalHospital,EmojiFlags,People,Chat,Storefront,VideoLibrary,ExpandMoreOutlined} from '@mui/icons-material'
import { Link,Router } from "react-router-dom";


const Sidebar = ()=>{

// Side Icons on the left

return(
<div className="sidebar">

<Link to='/'>
    
    {/* Avatar and its image link */}

    <SidebarRow src='https://scontent.fagr1-4.fna.fbcdn.net/v/t1.6435-9/150012750_939037486636067_7622621387239806641_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nns6fQelPAcAX-gN-ka&_nc_ht=scontent.fagr1-4.fna&oh=00_AT9b9kCYHaGF2xzQoSC_GmROxcrpqC76cxu3bzU0B-PzJw&oe=6331BE68' title="Ansh"/>
    </Link>

<Link to='/friends'>
    <SidebarRow Icon={LocalHospital} title="Add Friends"/>
</Link>

<Link to='/showAllFriends'>
    <SidebarRow Icon={People} title="Friends"/>
</Link>

</div>
)
}

export default Sidebar