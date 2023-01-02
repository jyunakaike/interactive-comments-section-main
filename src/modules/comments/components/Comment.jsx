import React, { useState, useEffect } from 'react'
import { ReplyIcon } from './ReplyIcon'
import { MinusIcon } from './MinusIcon'
import { PlusIcon } from './PlusIcon'
import { ReplyComment } from './ReplyComment'
import { DeleteIcon } from './DeleteIcon'
import { EditIcon } from './EditIcon'
import { DeleteDialog } from './DeleteDialog'

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
    // 
    // clickReply Function

    const [score, setScore] = useState();
    const [openDeleteDialog, setOpenDeleteDialog] = useState()
    const [editComment, setEditComment] = useState(false)

    useEffect(() => {
        setScore(props.comment.score)
    }, [])

    const id = props.comment.id
    const userImage = require(`../../../assets${props.comment.user.image.png}`)
    const userName = props.comment.user.username
    const userCreatedAt = props.comment.createdAt
    const comment = props.comment.content
    const replies = props.comment.replies
    const currentUser = props.currentUser

    const addScore = () => {
        setScore(score + 1)
    }
    const subScore = () => {
        if (score > 0) {
            setScore(score - 1)
        }
    }
    const openDeleteModal = () => {
        setOpenDeleteDialog(!openDeleteDialog)
    }
    const openEditDialog = () => {
        setEditComment(!editComment)
    }

    return (
        <React.Fragment>
            <main className='card'>
                {
                    (window.innerWidth > 400)
                        ?
                        <div className='scoreButton' >
                            <div onClick={() => { addScore() }} style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }} >
                                <PlusIcon />
                            </div>
                            <label className='score'> {score} </label>
                            <div onClick={() => { subScore() }} style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
                                <MinusIcon />
                            </div>
                        </div>
                        :
                        null
                }

                <div>
                    <header>
                        <div className='headerInformation'>
                            <img src={userImage} alt="userLogo" />
                            <h1>{userName}</h1>
                            <p>{userCreatedAt}</p>
                        </div>

                        {
                            (window.innerWidth > 400)
                                ?
                                (currentUser.username === userName)
                                    ?
                                    <div className='currentUserButtons'>
                                        <div className='delete' onClick={openDeleteModal}>
                                            <DeleteIcon />
                                            <label >Delete</label>
                                        </div>
                                        <div className='edit' onClick={openEditDialog} >
                                            <EditIcon />
                                            <label >Edit</label>
                                        </div>
                                    </div>
                                    :
                                    <div className='replyButton' onClick={() => { props.clickReply(id) }} >
                                        <ReplyIcon style={{ marginRight: '0.4rem' }} />
                                        <label className='reply' > Reply </label>
                                    </div>
                                : 
                                null
                        }
                    </header>
                    <section >
                        {
                            (editComment)
                                ?
                                <div className='editComments'>
                                    <textarea
                                        placeholder='Add a comment'
                                        className='textArea'
                                    >
                                        {comment}
                                    </textarea>
                                    <div className='update' onClick={openEditDialog}>
                                        UPDATE
                                    </div>

                                </div>
                                : <p>{comment}</p>
                        }
                    </section>
                    {
                        (window.innerWidth < 400)
                            ?
                            <footer>
                                <div className='scoreButton' >
                                    <div onClick={() => { addScore() }} style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }} >
                                        <PlusIcon />
                                    </div>
                                    <label className='score'> {score} </label>
                                    <div onClick={() => { subScore() }} style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
                                        <MinusIcon />
                                    </div>
                                </div>
                                {
                                    (currentUser.username === userName)
                                        ?
                                        <div className='currentUserButtons'>
                                            <div className='delete' onClick={openDeleteModal}>
                                                <DeleteIcon />
                                                <label >Delete</label>
                                            </div>
                                            <div className='edit' onClick={openEditDialog} >
                                                <EditIcon />
                                                <label >Edit</label>
                                            </div>
                                        </div>
                                        :
                                        <div className='replyButton' onClick={() => { props.clickReply(id) }} >
                                            <ReplyIcon style={{ marginRight: '0.4rem' }} />
                                            <label className='reply' > Reply </label>
                                        </div>
                                }
                            </footer>
                            : null
                    }

                </div>


            </main>
            <main className='vl'>
                {
                    (replies)
                        ?
                        replies.map(reply => (
                            <div key={reply.id} >
                                <ReplyComment reply={reply} currentUser={currentUser} />
                            </div>
                        ))
                        :
                        null
                }
            </main>
            {
                (openDeleteDialog)
                    ?
                    <DeleteDialog openDeleteModal={openDeleteModal} id={id} />
                    :
                    null
            }

        </React.Fragment>
    )
}
