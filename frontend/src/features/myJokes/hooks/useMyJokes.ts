import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import {fetchJokes} from '../api/myJokes'

export const useMyJokes = () => {

  return useQuery({
      queryKey: ['myJokes'],
      queryFn: fetchJokes,
      staleTime: 0, 
    })
}
export const useUpdateMyJokes = ()=>{
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newList: string[]) => {
      const res = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newList),
      });
      if (!res.ok) throw new Error('Failed to update jokes');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myJokes'] });
    }
  })
};