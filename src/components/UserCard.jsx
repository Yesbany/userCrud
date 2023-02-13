import React from "react";
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <article className="userCard">
      <h3 className="userCard__name">
        {user.first_name} {user.last_name}
      </h3>
      <hr />
      <ul className="userCard__list">
        <li className="userCard__item">
          <span>Email:</span> <br /> {user.email}
        </li>
        <li className="userCard__item">
          <span>Birthday:</span> <br /> <i className="bx bx-gift"></i> {user.birthday}
        </li>
      </ul>
      <hr />
      <footer className="userCard__footer">
        <button className="userCard__footer-btnDelete" onClick={() => deleteUser(user.id)}>
          <i className="bx bx-trash"></i>
        </button>
        <button className="userCard__footer-btnEdit" onClick={handleClickEdit}>
          <i className="bx bxs-edit-alt"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
