export interface INote {
  title: string;
  content: string;
  category: string;
  author: string;
  id: string;
  creationDate: Date;
}

export interface INoteForm {
  title: string;
  content: string;
  category: string;
}
