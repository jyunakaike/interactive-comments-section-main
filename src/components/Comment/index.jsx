import React from 'react';

import './style.scss';

export const Comment = ({ content, createdAt, score, user, replies, style }) => {

  // console.log(content)
  // console.log(createdAt)
  // console.log(score)
  // console.log(user)
  // console.log(user.image.png)
  // console.log(user.username)
  // const stilo = {width: '80%'}

  return (
    <section className='Comment-section' style={style} >
      <div className='Comment-section-likes'>
        <div><h1>+</h1></div>
        <div><h1>{score}</h1></div>
        <div><h1>-</h1></div>
      </div>

      <div className='Comment-section-detail' >
        <div className='header'>
          <h2>icono</h2>
          <h2>{user.username}</h2>
          <h3> {createdAt}</h3>
        </div>
        <div>
          <p>{content}</p>
        </div>
      </div>

      <div className='Comment-section-reply'>
        <h2>reply</h2>
      </div>

    </section>
  )
}
