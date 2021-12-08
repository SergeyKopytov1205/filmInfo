import * as axios from 'axios';

const instance = axios.default.create({
   baseURL: 'https://kinopoiskapiunofficial.tech',
   headers: { 'X-API-KEY': '74341885-b5b5-4b9b-b70c-af2e55c868ad' },
})

export async function getAllFilms(params, query) {
   const response = await instance.get(query, {
      params: params
   })
   return response.data
}

export async function getFilmData(url) {
   const response = await instance.get(url)
   return response.data;
}

export async function getPersonData(id) {
   const response = await instance.get(`/api/v1/staff/${id}`)
   return response.data;
}


