import styles from './LoginForm.module.css';
import jokeIcon from '../../../assets/joke-svgrepo-com.svg';
import { Box,Stack,Typography,Button } from '@mui/material';
import Logo from '../../../components/ui/Logo.tsx';
import StyledTextField from '../../../components/forms/StyledTextField.tsx';
import {  useNavigate,Link } from '@tanstack/react-router';
import LinkMui from '@mui/material/Link';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
export const RegisterForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const registerMutation = useMutation({
        mutationFn: async () => {
          const response = await fetch('http://localhost:3000/auth/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                email:email, 
                password: password,
            })
          });
          const res = await response.json()
          return res;
        },
        onSuccess: () => {
          navigate({ to: '/' });
        },
      });
       const handleRegister = (e:React.SyntheticEvent) => {
    e.preventDefault();
    if (email && password) {
      registerMutation.mutate();
    }
  };
    const navigate = useNavigate();
  return (
    <Box className={styles.LoginFormContainer}>
        <Logo scale={0.65} top={80} left={-70}></Logo>
        <Logo scale={0.3} top={400} right={-70}></Logo>
        
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
                <StyledTextField label="E-mail" placeholder="Type your email" onChange={(e) => setEmail(e.target.value)}></StyledTextField>
            </Box> 
            <Box className={styles.LoginFormBox}>
                <StyledTextField label="Password" placeholder="Type your password" type="password" onChange={(e) => setPassword(e.target.value)}></StyledTextField>
            </Box>   
             <Box className={styles.LoginFormBox}>
                <Button variant="contained" onClick={handleRegister} disabled={!(email&&password)} sx={{
                    width:"100%",
                    backgroundColor:"var(--blue)",
                    
                }}>CREATE ACCOUNT</Button>
            </Box>
            <Box className={styles.LoginFormBox}>
                <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontFamily: 'Josefin Slab' }}>
                        Already have an account?
                    </Typography>
                    <LinkMui component={Link}
                        to="/" 
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

export default RegisterForm