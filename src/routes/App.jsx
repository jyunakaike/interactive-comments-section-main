import React, { useState, useEffect } from 'react';
import { Comment } from '../components/Comment';
import { CommentList } from '../templates/CommentList';

import data from '../data';

import '../styles/global.scss';

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [comments, setComments] = useState();


  const styleReply = { width: '80%' }

  useEffect(() => {
    try {
      setCurrentUser(data.currentUser)
      setComments(data.comments)
    } catch (error) {
      console.log(error)
    }

  }, []);



  (comments) ?
    comments.map(item => {
      console.log(item
      )
    })
    : null



  return (
    <>
      <CommentList>

        {
          (comments && currentUser)
            ?
            comments.map(
              item => (
                <div key={item.id} >
                  <Comment  {...item} />
                  {
                    // console.log(item.replies.length)
                    (item.replies.length >= 1)
                      ?
                      item.replies.map(reply => (
                        <Comment key={reply.id} {...reply} style={ styleReply} />
                      ))
                      : null
                  }
                </div>
              )
            )
            : <div>loading...</div>
        }
      </CommentList>
    </>
  )
}

export default App