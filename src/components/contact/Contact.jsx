export default function Contact({ user, deleteUser }) {
  return (
    <ul>
      <li>
        <p>{user.name}</p>
        <p>{user.number}</p>
        <button onClick={deleteUser}>Delete</button>
      </li>
    </ul>
  );
}
