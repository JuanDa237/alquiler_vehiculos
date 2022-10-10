import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/nav.sass'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function NavigationBar() {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/inventario'>Inventario</Link>
                </li>
                <li>
                    <span onClick={handleClick}><AccountCircleIcon className='login-icon' /></span>
                </li>
            </ul>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form className='formulario'>
                        <span><label>Usuario: </label><input type="text" /></span>
                        <span><label>Clave: </label><input type="password" /></span>
                        <span><input type="submit" /></span>
                    </form>
                </Box>
            </Modal>
        </nav>
    );
}