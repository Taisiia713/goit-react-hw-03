import Contact from "../contact/Contact";

export default function ContactList({ users, deleteUser }) {
  return (
    <ul>
      {users.map((user) => {
        <li key={user.id}>
          <Contact user={user} deleteUser={deleteUser} />
        </li>;
      })}
    </ul>
  );
}
