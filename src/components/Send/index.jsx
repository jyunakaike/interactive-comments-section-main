import React from 'react'

import './style.scss';

export const Send = () => {
    return (
        <section className='Send-section' >
            {/* <section className='Send-section' style={style} > */}
            <div className='Send-section-Icon'>icono</div>

            <div className='Send-section-detail' >
                <textarea name="" id="" cols="20" rows="10" placeholder='Add a Comment'></textarea>
            </div>

            <input className='Send-section-button' type="button" value={"SEND"} />
        </section>
    )
}
