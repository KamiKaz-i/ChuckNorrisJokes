import { Box, Stack, Typography } from '@mui/material'
import styles from './MyJokes.module.css'
import JokeListItem from './JokeListItem'
import { useMyJokes,useDeleteMyJoke } from '../hooks/useMyJokes'
import type { myJoke } from '../../../types/Joke'
const MyJokes = () => {
  const {data:jokes,isPending,error} = useMyJokes();
  console.log(jokes);
  const { mutate } = useDeleteMyJoke();
  const handleDelete = (indexToDelete: number) => {
    if (!jokes) return;
    mutate(indexToDelete);
  };
  if (isPending) return <Box className={styles.container}>
    <p>loading</p>
  </Box>
  if(error) return <Box className={styles.container}>
    <p>error</p>
  </Box>
  return (
    <Box className={styles.container}>
      <Stack className={styles.stack}>
        <Box sx={{ width: '100%' }}>
          <Typography sx={{ fontWeight: '700', fontSize: '2rem', fontFamily: 'Josefin Slab' }}>
            My jokes list
          </Typography>
        </Box>
        <Box sx={{ width: '100%',display:'flex',alignItems:'center' ,flexDirection:'column'}}>
            
            {jokes?.map((joke:myJoke, index:number) => (
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

export default MyJokes