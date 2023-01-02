import React, { useState } from 'react'
import { Comment } from './Comment'
import { UserComment } from './UserComment'

export const ReplyComment = (props) => {
    const [commentReply, setCommentReply] = useState()
    
    const reply = props.reply
    const currentUser = props.currentUser

    const clickReply = (userId) => {
        setCommentReply(userId)
    }

    return (
        <div style={{ 'marginLeft': '1rem', }}>
            <Comment comment={reply} clickReply={clickReply} currentUser={currentUser} />
            {
                (reply.id === commentReply)
                ?
                <UserComment currentUser={currentUser} />
                :
                null
            }
        </div>
    )
}
