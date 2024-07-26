import axios from 'axios';



const apikey= process.env.API_KEY
const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/search',
    params: {
      query: 'Phone',
      page: '1',
      country: 'US'
    },
    headers: {
      'X-RapidAPI-Key':apikey,
      'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };
  
  export const getdata=async()=>{
    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
      return error
    }
  }