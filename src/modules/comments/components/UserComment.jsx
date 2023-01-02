import React from 'react'

import '../styles/userComments.css'

export const UserComment = (props) => {
    // const userName = props.currentUser.username
    const userImage = require(`../../../assets${props.currentUser.image.webp}`)

    return (
        <React.Fragment>

            {
                (innerWidth > 400)
                    ?
                    <main className='userCard'>
                        <img className='currentUserImage' src={userImage} alt="PlusIcon" />
                        <textarea
                            placeholder='Add a comment'
                            className='textArea'
                        />
                        <button className='buttonSend'>SEND</button>
                    </main>
                    :
                    <main className='userCard'>
                        <textarea
                            placeholder='Add a comment'
                            className='textArea'
                        />
                        <footer>
                            <img className='currentUserImage' src={userImage} alt="PlusIcon" />
                            <button className='buttonSend'>SEND</button>
                        </footer>
                    </main>

            }

        </React.Fragment>
    )
}
