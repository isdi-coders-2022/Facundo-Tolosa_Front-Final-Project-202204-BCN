import { INote } from "../../types/noteInterfaces";
import NoteDetailContainer from "./NoteDetailStyles";

interface Props {
  noteToShow: INote | undefined;
}

const NoteDetail = ({ noteToShow }: Props): JSX.Element => {
  if (noteToShow) {
    return (
      <>
        <NoteDetailContainer>
          <div className="title">
            <p>{noteToShow.title}</p>
          </div>
          <div className="author">
            <p>{`Note created by ${noteToShow.author}`}</p>
          </div>
          <div className="content">{noteToShow.content}</div>
        </NoteDetailContainer>
      </>
    );
  }
  return <></>;
};

export default NoteDetail;
