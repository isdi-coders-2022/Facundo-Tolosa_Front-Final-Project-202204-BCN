import React from "react";
import { IUser } from "../../types/userInterfaces";
import UserCardContainer from "./UserCardStyles";

interface Props {
  user: IUser;
}

const UserCard = ({ user: { username, name } }: Props): JSX.Element => {
  return (
    <UserCardContainer>
      <div className="username-name-img">
        <p className="user-card__username">{username}</p>
        <p className="user-card__name">{name}</p>
        <img src="/images/icons8-nombre-100.png" alt="user caricature" />
      </div>
    </UserCardContainer>
  );
};

export default UserCard;
