import Contact from "../contact/Contact";

export default function ContactList({ users, delteUser }) {
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Contact user={user} delteUser={delteUser} />
          </li>
        ))}
      </ul>
    </>
  );
}
