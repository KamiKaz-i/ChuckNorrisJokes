import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import { fetchRandomJoke, fetchCategories } from '../api/randomJokes'

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: Infinity, 
  })
}

export const useRandomJoke = (category?: string, enabled: boolean = false) => {
  return useQuery({
    queryKey: ['joke'],
    queryFn: () => fetchRandomJoke(category),
    enabled,
    refetchOnWindowFocus: false,
    staleTime: Infinity, 
  })
}
export const useSaveJoke = () =>{
  
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (joke: string|undefined) => {
      const token = localStorage.getItem('token');
      if (!joke) return;
      const res = await fetch('http://localhost:3000/jokes', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
         },
        body: JSON.stringify({ text:joke}),
      });
      if (!res.ok) throw new Error('Failed to update jokes');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['savedJokes'] });
    }
  })
}
