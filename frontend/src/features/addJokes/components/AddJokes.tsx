import { useState } from 'react'
import { Box, Stack, Typography,TextField, Button } from '@mui/material'
import styles from './AddJokes.module.css'
const AddJokes = () => {
  const [jokes, setJokes] = useState([
    "testtesttessttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttessttesttesttesttesttesttesttesttesttesttesttesttesttesttesttettesttesttesttessttesttesttesttesttesttestst",
    "ttesttesttesttesttestest2",
    "test3"
  ]);


  return (
    <Box className={styles.container}>
      <Stack className={styles.stack}>
        <Box sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: '700', fontSize: '2rem', fontFamily: 'Josefin Slab' }}>
            Add Joke
          </Typography>
        </Box>
        <Box sx={{width:'65%'}}>
          <TextField label="Joke" placeholder="Type your joke here" multiline={true}  
            slotProps={{
              inputLabel:{
                shrink:true,
              }
            }} 
            sx={{
              "& .MuiInputBase-root": {
              display: "flex",        
              flexDirection: "column", 
              justifyContent: "center", 
              height: "200px",        
            },
            width:`100%`,
            "& label.Mui-focused": { color: 'var(--black)' },
                      
            "& .MuiOutlinedInput-root": {
              '& fieldset': {
                borderColor:'var(--lightPink)',
              },
              '&:hover fieldset': {
                borderColor: 'var(--lightPink)',
              },
              "&.Mui-focused fieldset": {
                borderColor: 'var(--lightPink)',
              },
            },
          }}>

          </TextField>
        </Box>
        <Box>
           <Button variant="contained" disabled sx={{
                    width:"65%",
            }}>ADD JOKE</Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default AddJokes