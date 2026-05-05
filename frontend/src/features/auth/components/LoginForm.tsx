import styles from './LoginForm.module.css';
import jokeIcon from '../../../assets/joke-svgrepo-com.svg';
import { Box,Stack,Typography,Button } from '@mui/material';
import Logo from '../../../components/ui/Logo.tsx';
import StyledTextField from '../../../components/forms/StyledTextField.tsx';
import { useState } from 'react';
import {  Link } from '@tanstack/react-router';
import LinkMui from '@mui/material/Link';
import { useLogin } from '../hooks/useAuth.ts';
export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { mutate: login } = useLogin();

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (email && password){
        login({ email, password })
    };
  };

  return (
    <Box className={styles.LoginFormContainer}>
        <Logo scale={0.65} top={80} left={-70}></Logo>
        <Logo scale={0.3} top={400} right={-70}></Logo>
        
        <Stack className={styles.LoginFormStack}>
            <Box className={styles.LoginFormBox}> 
                <img src={jokeIcon} className={styles.svgIcon} width="75" height="75" alt=""  />
            </Box>
            <Box className={styles.LoginFormBox}>
                <Typography sx={{ fontFamily: 'Josefin Slab' ,fontSize:30}} >
                    Explore "Chuck Jokes" with us!
                </Typography>
            </Box>
             <Box className={styles.LoginFormBox}>
                <StyledTextField label="E-mail" placeholder="Type your email" onChange={(e) => setEmail(e.target.value)}></StyledTextField>
            </Box> 
            <Box className={styles.LoginFormBox}>
                <StyledTextField label="Password" placeholder="Type your password" type="password" onChange={(e) => setPassword(e.target.value)}></StyledTextField>
            </Box>   
             <Box className={styles.LoginFormBox}>
                <Button onClick={handleLogin} variant="contained" disabled={!(email&&password)} sx={{
                    width:"100%",
                    backgroundColor:"var(--blue)"
                }}>LOG IN</Button>
            </Box>
            <Box className={styles.LoginFormBox} >
                <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontFamily: 'Josefin Slab' }}>
                        Don't have an account?
                    </Typography>
                    <LinkMui component={Link}
                        to="/register" 
                        underline="none" 
                        color="inherit"
                        className={styles.Link}
                    >
                     <Typography sx={{ fontFamily: 'Josefin Slab',fontWeight:'700' }}>
                        Sign up here.
                    </Typography>
                    </LinkMui>
                </Stack>
                
            </Box>
            <Box className={styles.LoginFormBox} sx={{
                marginBottom:4,
            }}>
                <Typography sx={{ fontFamily: 'Josefin Slab' ,color:`var(--pink)`,fontStyle:'italic',fontWeight:600}} >
                    "Chuck Norris can login without signing up, on any website"
                </Typography>
            </Box>
        </Stack>
    </Box>
  )
}

export default LoginForm