import React from 'react'


function Home (props) {
    return(
        <div>
            <h1 className='title' data-testid="cypress-home-title">Hello this is home</h1>

            <div className="profileDetails" data-testid="cypress-profile-details">
                <ul className="profileList">
                    <li><h3 className='userID'>user ID:</h3></li>
                    <li><h3 className='email'>Email:</h3></li>
                    <li><h3 className='uriLine'>Spotify URI:</h3></li>
                    <li><h3 className='link'>Link</h3></li>
                    <li><h3 className='profilePic'>Profile Image</h3></li>
                </ul>
            </div>
        </div>
    )
}

console.log("this is home")

export default Home