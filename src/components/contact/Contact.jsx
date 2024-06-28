export default function Contact({ user, deleteUser }) {
  return (
    <>
      <p>{user.name}</p>
      <p>{user.number}</p>
      <button onClick={deleteUser}>Delete</button>
    </>
  );
}
