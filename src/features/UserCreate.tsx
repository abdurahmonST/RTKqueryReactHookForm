import { useForm } from 'react-hook-form';
import { useCreateUserMutation } from '../api/usersApi';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const UserCreate = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [createUser, { isLoading, isError }] = useCreateUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    await createUser(data).unwrap();
    reset();
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Create User</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name:</label>
          <input {...register('name', { required: true })} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Username:</label>
          <input {...register('username', { required: true })} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email:</label>
          <input {...register('email', { required: true })} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone:</label>
          <input {...register('phone', { required: true })} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Website:</label>
          <input {...register('website', { required: true })} className="w-full border rounded px-3 py-2" />
        </div>
        <button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
          {isLoading ? 'Creating...' : 'Create User'}
        </button>
        {isError && <div className="text-red-500 mt-2">Error creating user.</div>}
      </form>
    </div>
  );
};

export default UserCreate; 