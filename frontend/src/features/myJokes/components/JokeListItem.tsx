
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import IconButton from '@mui/material/IconButton';
import { Box, Typography } from '@mui/material'
import styles from './JokeListItem.module.css'
interface jokeItem{
    joke:string,
    index:number,
    onDelete:(index: number) => void;
}

const JokeListItem = ({ joke, index, onDelete }:jokeItem) => {
  return (
    <Box className={styles.jokeRow}>
      <Box className={styles.jokeRowLeft}>
        <Typography className={styles.jokeNumber} sx={{ 
          fontFamily: "Josefin Slab",
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {index + 1}.
        </Typography>
        
        <Typography className={styles.jokeText} sx={{ 
          fontFamily: "Josefin Slab",
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width:'100%',
        }}>
          "{joke}"
        </Typography>
      </Box>
      <Box className={styles.jokeRowRight}>
        <IconButton disableRipple onClick={() => onDelete(index)} className={styles.deleteBtn}>
        <BackspaceOutlinedIcon fontSize="small" className={styles.backspaceIcon} sx={{
          height:'1rem',
        }}/>
        </IconButton>
      </Box>
      
    </Box>
  )
}

export default JokeListItem