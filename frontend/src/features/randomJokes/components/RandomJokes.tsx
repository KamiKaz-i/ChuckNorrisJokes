import React from 'react'
import {Box, Stack, Typography,Button } from '@mui/material'
import styles from './RandomJokes.module.css'
import StyledTextField from '../../../components/forms/StyledTextField'
import ChuckNorris from '../../../assets/ChuckNorris.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';

const RandomJokes = () => {
  const [categories, setCategories] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value as string);
  };

  return (
    <Box className={styles.container}>
      
      <Stack className={styles.stack}>
        <Box className={styles.ChuckImage}>
        <img src={ChuckNorris}></img>
        </Box>
        <Box sx={{width:'100%'}}>
          <Typography sx={{fontWeight:'700',fontSize:'2rem',fontFamily: 'Josefin Slab'}}>
            Get your random joke
          </Typography>
        </Box>
        <Box sx={{display:'flex',width:'100%'}}>
          <Box sx={{maxWidth:'400px',overflow:'wrap'}}>
            <Typography sx={{ fontFamily: 'Josefin Slab' ,color:`var(--black)`,fontStyle:'italic',fontWeight:600,fontSize:'larger'}}>
            "Chuck Norris hasn't lived the American dream so much as he's skull-fucked it into submission."
            </Typography>
          </Box>
        </Box>
        
        
        <Box className={styles.inputContainer}>
          <Stack spacing={5} sx={{
            width:'65%'
          }}>
            <StyledTextField label='impersonate' placeholder='Impersonate Chuck'></StyledTextField>
            <Button variant="contained" sx={{
              backgroundColor:'var(--blue)',
            }}>Draw a random chuck norris joke</Button>
          </Stack>
          <Stack spacing={5} sx={{
            width:'30%',
          }}>
            <FormControl fullWidth sx={{
              "& .MuiInputLabel-root.Mui-focused": { 
      color: "var(--black)" 
    }
            }}>
              <InputLabel id="Category-label" shrink={true}  >
    Category
  </InputLabel>
              <Select
                displayEmpty
                labelId="Categories-label"
                id="Categories-Select"
                value={categories}
                notched={true}
                label="Categories"
                onChange={handleChange}
                renderValue={(value: unknown) => {
                if (!value) {
                  return <Typography sx={{color:"var(--gray)"}}>Categories</Typography>;
                }
                return <>{value}</>;
        }}
               sx={{
                        width:`100%`,
                      "& label.Mui-focused": { color: 'var(--black)' },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: 'var(--lightPink)',
                        borderWidth: '2px'
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: 'var(--lightPink)',
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline":{
                        borderColor: 'var(--lightPink)',
                      },
                      
              
                    }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              
            </FormControl>
            <Button variant="contained" sx={{
              backgroundColor:'var(--pink)',
            }}>Save this Joke</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default RandomJokes