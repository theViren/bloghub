import HeaderComponent from "./component/Header";
import FooterComponent from "./component/Footer";

export default function Layout({ children }) {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}
