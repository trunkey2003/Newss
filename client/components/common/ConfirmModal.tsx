import { Box, Modal, Typography } from '@mui/material'
import { useState } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    border: '2px solid #fff',
    p: 2,
  };

type Props = {
    open : boolean,
    content: string,
    buttonConfirm: string,
    handleClose : () => void,
    handleConfirm: () => void,
}

export default function ConfirmModal({open, content, buttonConfirm, handleClose, handleConfirm}: Props) {
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div id="modal-modal-content" className='text-lg font-semibold text-center py-5 px-5'>
                        {content}
                    </div>
                    <div id="modal-modal-footer" className='flex justify-center'>
                        <button className='px-4 py-2 mx-4 bg-red-500 text-white font-medium rounded-lg' onClick={handleClose}> 
                            Cancle
                        </button>
                        <button className='px-4 py-2 mx-4 bg-green-500 text-white font-medium rounded-lg' onClick={handleConfirm}> 
                            {buttonConfirm}
                        </button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}