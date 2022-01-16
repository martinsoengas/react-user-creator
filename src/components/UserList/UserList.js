import React from "react";
import User from "../User/User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <ul className={styles["user-list"]}>
      {props.usersCreated.map((user) => (
        <User key={user.id}>
          {user.name} ({user.age} years old)
        </User>
      ))}
    </ul>
  );
};

export default UserList;
