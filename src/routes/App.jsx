import React, { useState, useEffect } from 'react';
import { Comment } from '../components/Comment';
import { CommentList } from '../templates/CommentList';
import { Send } from '../components/Send';

import data from '../data';

import '../styles/global.scss';

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  const [comments, setComments] = useState();

  const styleReply = { width: '95%' }

  const ReplyContainer = { width: "95%", marginLeft: "5%", marginBottom: "5%",display: "flex", flexDirection: "column", alignItems: "flex-end", borderLeft: "1px solid gray" }

  useEffect(() => {
    try {
      setCurrentUser(data.currentUser)
      setComments(data.comments)
    } catch (error) {
      console.log(error)
    }
  }, []);

  // (comments) ?
  //   comments.map(item => {
  //     console.log(item
  //     )
  //   })
  //   : null

  (currentUser)
    ?
    console.log(currentUser)

    : null

  return (
    <>

      {
        (comments && currentUser)
          ?
          <CommentList>
            {comments.map(
              item => (

                <div key={item.id} >
                  <Comment  {...item} />
                  {
                    (item.replies.length >= 1)
                      ?
                      <div style={ReplyContainer}>
                        {item.replies.map(reply => (
                          <Comment key={reply.id} {...reply} style={styleReply} />
                        ))}
                      </div>
                      : null
                  }
                </div>
              )
            )}

            <Send />
          </CommentList>
          : <div>loading...</div>
      }

    </>
  )
}

export default App