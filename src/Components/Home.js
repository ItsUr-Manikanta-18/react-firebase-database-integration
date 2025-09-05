import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { name } = location.state || { name: "Guest" };

  return <h1>Welcome, {name}!</h1>;
};

export default Home;
