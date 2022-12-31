import React from 'react'
import IconReply from '../../../assets/images/icon-reply.svg'
import IconMinus from '../../../assets/images/icon-minus.svg'
import IconPlus from '../../../assets/images/icon-plus.svg'

import '../styles/comment.css'

export const Comment = (props) => {
    // props
    // comment:
    //    "id"
    //    "content"
    //    "createdAt"
    //    "score"
    //    "user":{
    //        "image" :
    //            { 
    //                "png"
    //                "webp"
    //            },
    //        "username"
    //    },
    //    "replies": []

    const userImage = require(`../../../assets${props.comment.user.image.png}`)
    const userName = props.comment.user.username
    const userCreatedAt = props.comment.createdAt
    const comment = props.comment.content
    const score = props.comment.score

    return (
        <React.Fragment>
            <main className='card'>
                <header>
                    <img src={userImage} alt="userLogo" />
                    <h1>{userName}</h1>
                    <p>{userCreatedAt}</p>
                </header>
                <section>
                    <p>{comment}</p>
                </section>
                <footer>
                    <div className='scoreButton' >
                        <img src={IconPlus} alt="PlusIcon" className='button' />
                        <label className='score'> {score} </label>
                        <img src={IconMinus} alt="MinusIcon" className='button'  />
                    </div>
                    <div className='replyButton' >
                        <img src={IconReply} alt="ReplyIcon" style={{marginRight :'0.4rem'}} />
                        <label className='reply' > Reply </label>
                    </div>
                </footer>
            </main>
        </React.Fragment>
    )
}
