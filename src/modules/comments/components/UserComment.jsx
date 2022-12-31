import React from 'react'

import '../styles/userComments.css'

export const UserComment = (props) => {
    // const userName = props.currentUser.username
    const userImage = require(`../../../assets${props.currentUser.image.webp}`)

    return (
        <React.Fragment>
            <main className='userCard'>
                <textarea
                    placeholder='Add a comment'
                    className='textArea'
                />
                <footer>
                    <img src={userImage} alt="PlusIcon" />
                    <button>SEND</button>
                </footer>
            </main>


        </React.Fragment>
    )
}
