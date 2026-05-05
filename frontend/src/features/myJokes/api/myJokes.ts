import type { myJoke } from '../../../types/Joke'

const BASE_URL = 'http://localhost:3000/';
type DeleteJokeResponse = {
    message: string;
};
export const fetchJokes = async ():Promise<myJoke[]>=> {
      const token = localStorage.getItem("token");
      const data = await fetch(`${BASE_URL}jokes`,{
            method:"GET",
            headers:{
                  "Authorization": `Bearer ${token}`,
                  "Content-Type": "application/json",
            }
      });
      const dataJson = await data.json();
      return dataJson;
}
export const deleteJokes =  async (id: number):Promise<DeleteJokeResponse> => {
      const token = localStorage.getItem('token');
      const res = await fetch(`${BASE_URL}jokes/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        
      });
      if (!res.ok) throw new Error('Failed to update jokes');
      return res.json();
    }