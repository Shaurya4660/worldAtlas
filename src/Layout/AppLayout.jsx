import { Header } from "../components/UI/Header";
import { Footer } from "../components/UI/Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};