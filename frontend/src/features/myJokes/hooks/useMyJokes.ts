import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import {fetchJokes} from '../api/myJokes'

export const useMyJokes = () => {

  return useQuery({
      queryKey: ['myJokes'],
      queryFn: fetchJokes,
      staleTime: 0, 
    })
}
export const useDeleteMyJoke = ()=>{
  const token = localStorage.getItem('token');
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`http://localhost:3000/jokes/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        
      });
      if (!res.ok) throw new Error('Failed to update jokes');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myJokes'] });
    }
  })
};