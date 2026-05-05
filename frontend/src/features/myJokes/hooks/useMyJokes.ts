import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import {fetchJokes,deleteJokes} from '../api/myJokes'

export const useMyJokes = () => {

  return useQuery({
      queryKey: ['myJokes'],
      queryFn: fetchJokes,
      staleTime: 0, 
    })
}
export const useDeleteMyJoke = ()=>{
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteJokes,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myJokes'] });
    }
  })
};