import type { Joke } from '../../../types/Joke'

const BASE_URL = 'https://api.chucknorris.io';

export const fetchRandomJoke = async (category?: string): Promise<Joke> => {
  const url = category 
    ? `${BASE_URL}/jokes/random?category=${category}` 
    : `${BASE_URL}/jokes/random`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch joke')
  return res.json()
}


export const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}/jokes/categories`);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
};