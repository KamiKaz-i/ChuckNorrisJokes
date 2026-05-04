export interface Joke {
  id: string;
  value: string;
  categories: string[];
  url: string;
}
export type Jokes = string[];

export interface jokeItem{
    joke:string,
    index:number,
    onDelete:(index: number) => void;
}