import styles from './LoginForm.module.css';
import jokeIcon from '../../../assets/joke-svgrepo-com.svg';
import { Box,Stack,Typography,Button } from '@mui/material';
import Logo from '../../../components/ui/Logo.tsx';
import StyledTextField from '../../../components/forms/StyledTextField.tsx';
export const RegisterForm = () => {
  return (
    <Box className={styles.LoginFormContainer}>
        <Logo scale={0.7} top={100} left={-70}></Logo>
        <Logo scale={0.3} top={430} right={-70}></Logo>
        
        <Stack className={styles.LoginFormStack}>
            <Box className={styles.LoginFormBox}> 
                <img src={jokeIcon} className={styles.svgIcon} width="75" height="75" alt=""  />
                
            </Box>
            <Box className={styles.LoginFormBox}>
                <Typography sx={{ fontFamily: 'Josefin Slab',fontSize:30 }}  >
                    Explore "Chuck Jokes" with us!
                </Typography>
            </Box>
             <Box className={styles.LoginFormBox}>
                <StyledTextField label="E-mail" placeholder="Type your email"></StyledTextField>
            </Box> 
            <Box className={styles.LoginFormBox}>
                <StyledTextField label="Password" placeholder="Type your password" type="password"></StyledTextField>
            </Box>   
             <Box className={styles.LoginFormBox}>
                <Button variant="contained" disabled sx={{
                    width:"100%",
                }}>CREATE ACCOUNT</Button>
            </Box>
            <Box className={styles.LoginFormBox}>
                <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontFamily: 'Josefin Slab' }}>
                        Already have an account?
                    </Typography>
                    <Typography sx={{ fontFamily: 'Josefin Slab' }}>
                        Log in here.
                    </Typography>
                </Stack>
                
            </Box>
            <Box className={styles.LoginFormBox} sx={{
                marginBottom:4,
            }}>
                <Typography sx={{ fontFamily: 'Josefin Slab' ,color:`var(--pink)`,fontStyle:'italic'}} >
                    "Chuck Norris can login without signing up, on any website"
                </Typography>
            </Box>
        </Stack>
    </Box>
  )
}

export default RegisterForm