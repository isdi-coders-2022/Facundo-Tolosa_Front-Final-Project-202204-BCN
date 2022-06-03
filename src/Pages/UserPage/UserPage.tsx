import Header from "../../Components/Header/Header";
import UserCard from "../../Components/UserCard/UserCard";
import { userObjectMock } from "../../mocks/userMocks";
import UserPageContainer from "./UserPageStyles";

const UserPage = () => {
  return (
    <UserPageContainer>
      <Header />
      <UserCard user={userObjectMock} />
    </UserPageContainer>
  );
};

export default UserPage;
