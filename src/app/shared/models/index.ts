

export class Book {
  constructor(
    public author: string,
    public imageLink: string,
    public language: string,
    public title: string,
    public description: string,
    public year: number,
    public price: number,
  ) {}
}
