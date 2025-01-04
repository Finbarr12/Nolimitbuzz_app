import axios from "axios"


const url= "https://jsonplaceholder.typicode.com"


export const getusersInfo = async ()=>{
   try {
    const res =  await axios.get(`${url}/users`)

    console.log(res.data)
   } catch (error) {
    console.log(error)
   }
}