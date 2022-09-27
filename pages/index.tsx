import type { NextPage } from "next";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <div className="page-wrap">
      <Header />
      <HomePage />
      <Footer />
      <Cursor />
    </div>
  );
};

export default Home;
