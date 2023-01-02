import React from 'react'
import '../styles/deleteDialog.css'

export const DeleteDialog = (props) => {

    return (
        <React.Fragment>
            <div className='ModalContainer-overlay'>
                <div className='ModalContainer-overlay-container'>
                    <div className='ModalContainer-element'>
                        <h1>Delete Comment </h1>
                        <label > Are you sure you want to delete this comment? This will remove the comment and can't be undone</label>
                        <footer>
                            <div className='cancel' onClick={props.openDeleteModal}>
                                NO, CANCEL
                            </div>
                            <div className='deleteButton' onClick={props.openDeleteModal}>
                                YES, DELETE
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
