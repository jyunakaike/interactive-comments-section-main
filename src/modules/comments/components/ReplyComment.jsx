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
        <div style={{ 'marginLeft': '5rem', }}>
            <Comment comment={reply} clickReply={clickReply} />
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
