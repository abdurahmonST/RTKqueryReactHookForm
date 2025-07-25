import { Routes, Route, Link } from 'react-router-dom';
import UsersList from './features/UsersList';
import UserDetail from './features/UserDetail';
import UserCreate from './features/UserCreate';

function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 min-h-screen bg-gray-50">
      <nav className="flex gap-4 mb-8 border-b pb-4">
        <Link to="/" className="text-blue-600 hover:underline font-semibold">Users List</Link>
        <Link to="/create" className="text-blue-600 hover:underline font-semibold">Create User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/create" element={<UserCreate />} />
      </Routes>
    </div>
  );
}

export default App;
