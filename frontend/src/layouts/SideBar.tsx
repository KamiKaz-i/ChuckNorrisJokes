import { Box, Typography } from '@mui/material'
import jokeIcon from '../assets/joke-svgrepo-com.svg';
import styles from './SideBar.module.css'
import {
  Link,
} from '@tanstack/react-router'
import LinkMui from '@mui/material/Link';
const SideBar = () => {
  return (
    <Box className={styles.SideBarContainer}>
        <Box className={styles.Logo}> 
            <img src={jokeIcon} className={styles.svgIcon} width="75" height="75" alt=""  />
        </Box>
        <LinkMui component={Link}
          to="/randomJokes" 
          underline="none" 
          color="inherit"
          className={styles.Link}
        >
          <Typography sx={{ fontFamily: 'Josefin Slab', fontSize: '1.5rem' }}>
            RANDOM JOKE
          </Typography>
        </LinkMui>
        <LinkMui component={Link}
          to="/myJokes" 
          underline="none" 
          color="inherit"
          className={styles.Link}
        >
          <Typography sx={{fontFamily:'Josefin Slab',fontSize:'1.5rem'}}>MY JOKE</Typography>
        </LinkMui>
        <LinkMui component={Link}
          to="/addJoke" 
          underline="none" 
          color="inherit"
          className={styles.Link}
        >
          <Typography sx={{fontFamily:'Josefin Slab',fontSize:'1.5rem'}}>ADD JOKE</Typography>
        </LinkMui>
        
        <Typography sx={{marginTop:15,fontFamily:'Josefin Slab',fontSize:'1.5rem', position:"absolute",bottom:'60px',whiteSpace: 'nowrap'} }>LOG OUT</Typography>
        <Typography sx={{fontFamily:'Josefin Slab',fontSize:'small',left:'50%', transform: 'translateX(-50%)',marginTop:'auto',position:"absolute",bottom:'10px',whiteSpace: 'nowrap'}}>made with Chuck by Chuck - 2024</Typography>
    </Box>
  )
}
export default SideBar