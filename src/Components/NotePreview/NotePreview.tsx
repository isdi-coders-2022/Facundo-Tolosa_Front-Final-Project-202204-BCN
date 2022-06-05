import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { deleteNoteThunk } from "../../redux/thunks/notesThunks/notesThunks";
import { INote } from "../../types/noteInterfaces";
import NotePreviewContainer from "./NotePreviewStyles";

interface Props {
  note: INote;
}

const NotePreview = ({
  note: { title, category, author, id, creationDate },
}: Props): JSX.Element => {
  const { username } = useParams();
  const userLogged = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [canDelete, setCanDelete] = useState(false);

  useEffect(() => {
    if (username === userLogged.username) {
      setCanDelete(true);
    } else {
      setCanDelete(false);
    }
  }, [userLogged.username, username]);

  const deleteNote = () => {
    dispatch(deleteNoteThunk(id));
  };

  return (
    <NotePreviewContainer>
      <div className="cat-title">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
      </div>
      <div className="user-date">
        <div className="user-buttons">
          {canDelete ? <button onClick={deleteNote}>Delete</button> : null}
          <div className="user">
            <img
              src="/images/icons8-nombre-de-usuario-50.png"
              alt="user caricature"
            />
            <NavLink to={`/user/${author}`}>
              <p>{author}</p>
            </NavLink>
          </div>
        </div>
        <p className="date">{`${creationDate}`}</p>
      </div>
    </NotePreviewContainer>
  );
};

export default NotePreview;
