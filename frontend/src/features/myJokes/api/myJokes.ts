import type { myJoke } from '../../../types/Joke'

const BASE_URL = 'http://localhost:3000/';

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
      console.log(dataJson)
      return dataJson;
}
// export const DeleteJokes = async ():Promise<myJoke[]>=> {
//       const token = localStorage.getItem("token");
//       const data = await fetch(`${BASE_URL}jokes`,{
//             method:"DELETE",
//             headers:{
//                   "Authorization": `Bearer ${token}`,
//                   "Content-Type": "application/json",
//             },
//             body:JSON.stringify({
//               id:indexToDelte,
//             });

//       });
//       const dataJson = await data.json();
//       return dataJson;
// }