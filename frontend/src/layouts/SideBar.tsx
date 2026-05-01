import { Box, Typography } from '@mui/material'
import jokeIcon from '../assets/joke-svgrepo-com.svg';
import styles from './SideBar.module.css'
const SideBar = () => {
  return (
    <Box className={styles.SideBarContainer}>
        <Box > 
            <img src={jokeIcon} className={styles.svgIcon} width="75" height="75" alt=""  />
        </Box>
        <Typography sx={{fontFamily:'Josefin Slab' ,fontSize:'1.5rem'}}>RANDOM JOKE</Typography>
        <Typography sx={{fontFamily:'Josefin Slab',fontSize:'1.5rem'}}>MY JOKE</Typography>
        <Typography sx={{fontFamily:'Josefin Slab',fontSize:'1.5rem'}}>ADD JOKE</Typography>
        <Typography sx={{marginTop:20,fontFamily:'Josefin Slab',fontSize:'1.5rem'} }>LOG OUT</Typography>
        <Typography sx={{fontFamily:'Josefin Slab',fontSize:'1.5rem'}}>Node with Chuck by Chuck - 2024</Typography>
    </Box>
  )
}

export default SideBar