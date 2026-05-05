import { Box, Stack, Typography,TextField, Button } from '@mui/material'
import styles from './AddJokes.module.css'
import { useState } from 'react';
import { useSaveJoke } from '../../randomJokes/hooks/useRandomJokes';
const AddJokes = () => {
  const [myJoke,setMyJoke] = useState('');
  const { mutate } = useSaveJoke();
  const handleChangeMyJoke = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setMyJoke(event.target.value);
  }
  const handleSaveMyJoke = ()=>{
      mutate(myJoke);
  }
  return (
    <Box className={styles.container}>
      <Stack className={styles.stack}>
        <Box sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: '700', fontSize: '2rem', fontFamily: 'Josefin Slab' }}>
            Add Joke
          </Typography>
        </Box>
        <Box sx={{width:'65%'}}>
          <TextField onChange={handleChangeMyJoke} label="Joke" placeholder="Type your joke here" multiline={true}  
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
           <Button variant="contained" onClick={handleSaveMyJoke} disabled={!myJoke} sx={{
                    width:"65%",
                    backgroundColor:'var(--blue)'
            }}>ADD JOKE</Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default AddJokes