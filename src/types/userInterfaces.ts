import { INote } from "./noteInterfaces";

export interface IUser {
  id: string;
  name: string;
  username: string;
  image: string;
  imageBackup: string;
  notes: INote[];
}
