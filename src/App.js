import React, { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/UserList/UserList";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (enteredUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        name: enteredUser[0],
        age: enteredUser[1],
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };

  return (
    <div>
      <section className={styles["users-form"]}>
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section className={styles["users-form"]}>
        <UserList usersCreated={users} />
      </section>
    </div>
  );
}

export default App;
