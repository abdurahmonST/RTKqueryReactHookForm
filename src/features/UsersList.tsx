import { Link } from 'react-router-dom';
import { useGetUsersQuery, useDeleteUserMutation } from '../api/usersApi';

const UsersList = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  if (isLoading) return <div className="text-center py-8">Loading users...</div>;
  if (isError) return <div className="text-center text-red-500 py-8">Error loading users.</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      <ul className="space-y-3">
        {users?.map((user) => (
          <li key={user.id} className="flex items-center justify-between bg-white rounded shadow p-4">
            <div>
              <Link to={`/users/${user.id}`} className="text-blue-600 hover:underline font-medium">{user.name}</Link>
              <span className="ml-2 text-gray-500">({user.email})</span>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded disabled:opacity-50"
              onClick={() => deleteUser(user.id)}
              disabled={isDeleting}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList; 