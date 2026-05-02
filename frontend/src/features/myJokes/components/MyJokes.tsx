import { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import styles from './MyJokes.module.css'
import JokeListItem from './JokeListItem'

const RandomJokes = () => {
  const [jokes, setJokes] = useState([
    "testtesttessttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttessttesttesttesttesttesttesttesttesttesttesttesttesttesttesttettesttesttesttessttesttesttesttesttesttestst",
    "ttesttesttesttesttestest2",
    "test3"
  ]);

  const handleDelete = (indexToDelete:number) => {
    setJokes(jokes.filter((joke, index) => index !== indexToDelete));
  };

  return (
    <Box className={styles.container}>
      <Stack className={styles.stack}>
        <Box sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: '700', fontSize: '2rem', fontFamily: 'Josefin Slab' }}>
            My jokes list
          </Typography>
        </Box>
        <Box sx={{ width: '100%',display:'flex',alignItems:'center' ,flexDirection:'column'}}>
            {jokes.map((joke, index) => (
              <JokeListItem 
                key={index} 
                joke={joke} 
                index={index} 
                onDelete={handleDelete} 
              />
            ))}
        </Box>
      </Stack>
    </Box>
  )
}

export default RandomJokes