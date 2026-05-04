import {Box, Stack, Typography,Button } from '@mui/material'
import styles from './RandomJokes.module.css'
import StyledTextField from '../../../components/forms/StyledTextField'
import ChuckNorris from '../../../assets/ChuckNorris.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';

import { useState } from 'react'
import { useRandomJoke,useCategories,useSaveJoke } from '../hooks/useRandomJokes'

const RandomJokes = () => {
  
  const [fetchEnabled, setFetchEnabled] = useState<boolean>(true)
  const [selectedCategory,setSelectedCategory] = useState<string>();
  const [impersonate,setImpersonate] = useState<string>('');
  const [impersonatedJoke,setImpersonatedJoke] = useState<string|undefined>('');
  const { data: categories } = useCategories()
  const { data: joke, isFetching, refetch } = useRandomJoke(selectedCategory,fetchEnabled)
  const { mutate } = useSaveJoke();
  const handleSaveJoke = () =>{
    if(impersonatedJoke){
      mutate(impersonatedJoke);
    }
    else{
      mutate(joke?.value)
    }
  }
  const handleDraw = () => {
    if (!fetchEnabled) {
      setFetchEnabled(true) 
    } else {
      refetch() 
    }
  }
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string);
  };
  const handleImpersonate = (event)=>{
    setImpersonate(event.target.value);
    const impersonatedJoke = joke?.value.replaceAll("Chuck Norris",event.target.value)
    setImpersonatedJoke(impersonatedJoke);
  }
 
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
        <Box sx={{display:'flex',width:'100%',overflow:'hidden'}}>
            <Typography sx={{ fontFamily: 'Josefin Slab' ,color:`var(--black)`,fontStyle:'italic',fontWeight:600,fontSize:'larger',overflow:'hidden',textOverflow:'ellipsis'}}>
            "{impersonate?joke?.value.replaceAll("Chuck Norris",impersonate):joke?.value}"
            
            </Typography>
        </Box>
        
        
        <Box className={styles.inputContainer}>
          <Stack spacing={5} sx={{
            width:'65%'
          }}>
            <StyledTextField label='impersonate' placeholder='Impersonate Chuck' onChange={handleImpersonate}></StyledTextField>
            <Button variant="contained" disabled={isFetching} onClick={handleDraw} sx={{
              backgroundColor:'var(--blue)',textOverflow:'ellipsis',overflow:'hidden'
            }}>{impersonate?`Draw a random ${impersonate} joke`:"Draw a random chuck norris joke"}</Button>
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
                value={selectedCategory}
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
                {categories?.map((category)=>{
                  return <MenuItem value={category}>{category}</MenuItem>
                })}
              </Select>
              
            </FormControl>
            <Button variant="contained" onClick={handleSaveJoke} sx={{
              backgroundColor:'var(--pink)',
            }}>
              Save this Joke
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default RandomJokes