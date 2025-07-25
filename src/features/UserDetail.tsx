import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '../api/usersApi';

const UserDetail = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const { data: user, isLoading, isError } = useGetUserQuery(userId);

  if (isLoading) return <div className="text-center py-8">Loading user...</div>;
  if (isError || !user) return <div className="text-center text-red-500 py-8">User not found.</div>;

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">User Detail</h2>
      <div className="space-y-2">
        <p><b>Name:</b> {user.name}</p>
        <p><b>Username:</b> {user.username}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Website:</b> {user.website}</p>
      </div>
    </div>
  );
};

export default UserDetail; 