import { Box, Stack, Typography } from '@mui/material'
import styles from './MyJokes.module.css'
import JokeListItem from './JokeListItem'
import { useMyJokes,useUpdateMyJokes } from '../hooks/useMyJokes'
const MyJokes = () => {
  const {data:jokes,isPending,error} = useMyJokes();
  const { mutate } = useUpdateMyJokes();
  const handleDelete = (indexToDelete: number) => {

    if (!jokes) return;
    const updatedList = jokes.filter((_, index) => index !== indexToDelete);
    console.log(updatedList);
    mutate(updatedList);

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
            
            {jokes?.map((joke:string, index:number) => (
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