import React from 'react'
import { Box, Typography } from '@mui/material'
import jokeIcon from '../assets/joke-svgrepo-com.svg';
import styles from './SideBar.module.css'
const SideBar = () => {
  return (
    <Box className={styles.SideBarContainer}>
        <Box > 
            <img src={jokeIcon} className={styles.svgIcon} width="75" height="75" alt=""  />
        </Box>
        <Typography>RANDOM JOKE</Typography>
        <Typography>MY JOKE</Typography>
        <Typography>ADD JOKE</Typography>
        <Typography>LOG OUT</Typography>
        <Typography>node with chuck by chuck</Typography>
    </Box>
  )
}

export default SideBar