import styles from './LoginForm.module.css';
import jokeIcon from '../../assets/joke-svgrepo-com.svg';
import { Box,Stack,Typography,TextField,Button } from '@mui/material';
import Logo from '../../components/ui/Logo.tsx';

export const LoginForm = () => {
  return (
    <Box className={styles.LoginFormContainer}>
        <Logo scale={0.5} top={100} left={-70}></Logo>
        <Logo scale={0.3} top={400} right={-70}></Logo>
        
        <Stack className={styles.LoginFormStack}>
            <Box className={styles.LoginFormBox}> 
                <img src={jokeIcon} className={styles.svgIcon} width="75" height="75" alt=""  />
                
            </Box>
            <Box className={styles.LoginFormBox}>
                <Typography sx={{ fontFamily: '"Josefin Slab", serif' }} >
                    Explore "Chuck Jokes" with us!
                </Typography>
            </Box>
             <Box className={styles.LoginFormBox}>
               <TextField id="outlined-basic" label="E-mail" variant="outlined" placeholder="Type your email" sx={{
                    width:"100%",
                }} />
            </Box> 
            <Box className={styles.LoginFormBox}>
               <TextField
                id="outlined-password-input"
                label="Password"
                placeholder="Type your password"
                type="password"
                autoComplete="current-password"
                sx={{
                    width:"100%",
                }}
            />
            </Box>   
             <Box className={styles.LoginFormBox}>
                <Button variant="contained" disabled sx={{
                    width:"100%",
                }}>Login</Button>
            </Box>
            <Box className={styles.LoginFormBox}>
                <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontFamily: '"Josefin Slab", serif' }}>
                        Don't have an account?
                    </Typography>
                    <Typography sx={{ fontFamily: '"Josefin Slab", serif' }}>
                        Sign up here.
                    </Typography>
                </Stack>
                
            </Box>
            <Box className={styles.LoginFormBox}>
                <Typography sx={{ fontFamily: '"Josefin Slab", serif' }} >
                    "Chuck Norris can login without signing up, on any website"
                </Typography>
            </Box>
        </Stack>
    </Box>
  )
}

export default LoginForm