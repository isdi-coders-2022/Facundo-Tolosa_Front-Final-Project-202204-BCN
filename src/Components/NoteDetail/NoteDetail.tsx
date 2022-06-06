import { INote } from "../../types/noteInterfaces";
import NoteDetailContainer from "./NoteDetailStyles";

interface Props {
  noteToShow: INote;
}

const NoteDetail = ({ noteToShow }: Props): JSX.Element => {
  return (
    <NoteDetailContainer>
      <div className="title">
        <p>{noteToShow.title}</p>
      </div>
      <div className="author">
        <p>{`Note created by ${noteToShow.author}`}</p>
      </div>
      <div className="content">{noteToShow.content}</div>
    </NoteDetailContainer>
  );
};

export default NoteDetail;
