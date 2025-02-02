import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow min-h-[75vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Contact Book</h1>
      <p className="text-lg mb-6">
        Manage your contacts easily: add, edit, delete, and search for them in
        one place.
      </p>
      <div className="flex gap-4">
        <Link to="/contacts" className="btn btn-primary">
          Go to Contacts
        </Link>
        <Link to="/register" className="btn btn-secondary">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
