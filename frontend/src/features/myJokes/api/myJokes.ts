import type { myJokes } from '../../../types/Joke'

const BASE_URL = 'http://localhost:3000/';

export const fetchJokes = async ():Promise<myJokes>=> {
      const data = await fetch(BASE_URL);
      const dataJson = await data.json();
      return dataJson;
}
export const DeleteJokes = async ():Promise<myJokes>=> {
      const data = await fetch(BASE_URL);
      const dataJson = await data.json();
      return dataJson;
}