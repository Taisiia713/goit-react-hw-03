// import { useState } from "react";
// import ContactForm from "../contactForm/ContactForm";
// import ContactList from "../contactList/ContactList";
// import SearchBox from "../searchBox/SearchBox";

// export default function App() {
//   const [users, setUsers] = useState([
//     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//   ]);

// const [inputValue, setInputValue] = useState("");

// новий контакт
// const addUser = (newUser) => {
//   setUsers([...users, newUser]);
// };

// видалення контакту
// const deleteUser = (userId) => {
//   setUsers(users.filter((user) => user.id !== userId));
// };

// const changeInputValue = (newValue) => {
//   setInputValue(newValue);
// };

// фільтрація;
// const filteredUsers = users.filter((user) => user.name.toLowerCase());

// return (
//   <div>
//     <h1>Phonebook</h1>
//     <ContactForm addUser={addUser} />
//     <SearchBox value={inputValue} onType={changeInputValue} />
//     <ContactList users={users} />
//   </div>
// );
// }
