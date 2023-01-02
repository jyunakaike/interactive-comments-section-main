import React ,{useState, useEffect}  from 'react'
import { Comment } from './components/Comment';
import { UserComment } from './components/UserComment';

import data from '../../data/data.json'

export const Comments = () => {
    const [currentUser, setCurrentUser] = useState();
    const [comments, setComments] = useState()
    const [loading, setLoading] = useState(true)
    const [commentReply, setCommentReply] = useState()

    useEffect(() => {
        setLoading(true)
        const response = data
        // console.log(response);
        // console.log(response.currentUser);
        // console.log(response.comments);
        setCurrentUser(response.currentUser)
        // localStorage.setItem('User', response.currentUser)
        setComments(response.comments)
        // console.log(currentUser);
        // console.log(comments);
        setLoading(false)
    }, [])

    const clickReply = (userId) => {
        setCommentReply(userId)
    }

    return (
        <React.Fragment>
            {
                (loading)
                ?
                    <div>Loading</div>
                :
                    <div> 
                        {
                            comments.map(comment => (
                                    <div key={comment.id}>
                                        {/* {console.log(comment)} */}
                                        <Comment comment={comment} clickReply={clickReply} currentUser={currentUser} />
                                        {
                                            (comment.id === commentReply)
                                            ?
                                            <UserComment currentUser={currentUser} />
                                            :
                                            null
                                        }
                                        
                                    </div>
                                )
                            )
                        }
                        <UserComment currentUser={currentUser} />
                    </div>

            }
        </React.Fragment>
    )
}
