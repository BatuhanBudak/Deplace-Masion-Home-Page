import type { NextPage } from "next";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <HomePage />
    </div>
  );
};

export default Home;
