import Footer from "../footer/Footer.jsx";
import Header from "../header/Header.tsx";

export default function Layout({
  children
}) {
  return (
    <>
       <Header/>
        <main>{children}</main>
      <Footer/>
    </>
  );
}