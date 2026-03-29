import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollButtons from "../components/ScrollButtons";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <ScrollButtons />
    </>
  );
}
