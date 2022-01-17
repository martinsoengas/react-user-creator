import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [showUserList, setShowUserList] = useState(false);

  const userListDisplay = styles["users-list"];

  const addUserHandler = (enteredName, enteredAge) => {
    setShowUserList(true);
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { name: enteredName, age: enteredAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <section className={styles["users-form"]}>
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section
        className={`${styles["users-form"]} ${
          !showUserList ? userListDisplay : ""
        }`}
      >
        <UserList usersCreated={users} />
      </section>
    </>
  );
}

export default App;
