import React from 'react'
import './Profile.css'

function Profile() {
    const looking = ['Web Development','Java']    
    const skills = ['HTML','CSS','Java','JavaScript','Express','NodeJS','MongoDB','ReactJS']
    const role = ['Software Developer']

  return (
    <div className='profile'>
        <br/>
<h1 style={{textAlign:"center"}}>Profile</h1>
<br/>
        <div className='about'>
            {/* Name , Short Description , Photo  */}
            <div className='aboutHeader'>
            <img src="https://scontent.fagr1-4.fna.fbcdn.net/v/t1.6435-9/150012750_939037486636067_7622621387239806641_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nns6fQelPAcAX-gN-ka&_nc_ht=scontent.fagr1-4.fna&oh=00_AT9b9kCYHaGF2xzQoSC_GmROxcrpqC76cxu3bzU0B-PzJw&oe=6331BE68" className='profilePic'/>
            <div className='nameDesc'>
            <h4 className='profileName'>Ansh Viyogi</h4>
            <span className='desc'>1 year of exp • Bareilly, India • 0.5 hours behind • Open to remote/office</span>
            </div>
            </div>

            {/* About Me */}
            <div className='aboutMe'>
                <span className='about-text'>About</span>
                <p className='job-text'>I'm a MERN Developer with having a 1+ year of experience in this field
I'm have done many projects as a MERN Developer which has been posted on my GitHub Profile given below
(Github : www.github.com/anshviyogi)
And also,
I've worked as a Full Stack Developer in "44Kart" where I've build the complete E-Commerce Website for the company which took me 2-3 months to deliver that website. (Website Link : www.44kart.com)
And I've done an internship in Mobzway as a Front End Developer.

Only few of my projects has been posted on my GitHub profile 
I've also worked on the project like YouTube Clone , Instagram Clone , etc . . .</p>
            </div>

            {/* Looking for */}
            
            <div className='lookingFor'>
                <span className='looking-text'>Looking for</span>
                <div className='looking-items'>
                {looking.map(lf =>{
                   return <h6 className='items'>{lf}</h6>
                })}
                </div>
            </div>

{/* Skills */}

            <div className='skills'>
              <span className='skill-title'>Skills</span>
              <div className='skill-list'>
                {skills.map(skillList =>{
                  return <h6 className='items'>{skillList}</h6>
                })}
              </div>
            </div>

            {/* Desired Role */}

            <div className='desiredRole'>
              <span className='role-title'>Desired Role</span>
              <div className='role-list'>
                {role.map(roleList =>{
                 return <h6 className='items'>{roleList}</h6>
                })}
              </div>
            </div>
        </div>

    </div>
  )
}

export default Profile