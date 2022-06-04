import { useEffect } from "react";
import NotePreviewList from "../../Components/NotePreviewList/NotePreviewList";
import UserCard from "../../Components/UserCard/UserCard";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { userObjectMock } from "../../mocks/userMocks";
import { getUserNotesThunk } from "../../redux/thunks/notesThunks/notesThunks";
import UserPageContainer from "./UserPageStyles";

const UserPage = () => {
  const dispatch = useAppDispatch();
  const { notesToShow } = useAppSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getUserNotesThunk("carlos"));
  }, [dispatch]);

  return (
    <UserPageContainer>
      <UserCard user={userObjectMock} />
      <NotePreviewList notesToShow={notesToShow} />
    </UserPageContainer>
  );
};

export default UserPage;
