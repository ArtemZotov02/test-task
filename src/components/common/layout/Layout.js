import Header from "../header/Header";

export default function Layout({
  children
}) {

  return (
    <>
       {<Header />}
        <main>{children}</main>
        <footer>footer</footer>
    </>
  );
}