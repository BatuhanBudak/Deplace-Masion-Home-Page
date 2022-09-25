import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;
