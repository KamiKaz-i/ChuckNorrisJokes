import { Stack ,Box} from '@mui/material'
import Circle from './Circle'
import Triangle from './Triangle'
import styles from "./Logo.module.css"
interface LogoProps{
    scale:number;
    top:number;
    left?:number;
    right?:number;
}
const Logo = ({scale,top,left,right}:LogoProps) => {
  return (
    <Box className={styles.container} sx={{
        
        scale:scale,
        top:top,
        left:left,
        right:right
    }} >
        <Stack className={styles.stack}>
            <Circle/>
            <Triangle/>
            <Circle/>
        </Stack>
        <Stack className={styles.stack}>
            <Triangle/>
            <Circle/>
            <Triangle/>
        </Stack>
        <Stack className={styles.stack}>
            <Circle/>
            <Triangle/>
            <Circle/>
        </Stack>
    </Box>
  )
}

export default Logo