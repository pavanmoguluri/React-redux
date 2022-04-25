import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1 className="container">Crud Operations</h1>
      <>
        <div className="p-2">
          <Link to="/create">Create</Link>
        </div>
        <div className="p-2">
          <Link to="/read">Read</Link>
        </div>
        <div className="p-2">
          <Link to="/update">Update</Link>
        </div>
        <div className="p-2">
          <Link to="/delete">Delete</Link>
        </div>
      </>
    </>
  );
};

export default Dashboard;
