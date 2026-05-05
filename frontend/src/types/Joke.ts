export interface Joke {
  id: string;
  value: string;
  categories: string[];
  url: string;
}
export interface myJoke {
  id: number;
  userId: number;
  text: string;
  category?: string;
}

export interface jokeItem{
    joke:myJoke,
    index:number,
    onDelete:(index: number) => void;
}