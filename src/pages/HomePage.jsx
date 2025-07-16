import MainLayout from "../layout/MainLayout";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";

export default function HomePage() {
  return (
    <MainLayout>
      <section id="home"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
    </MainLayout>
  );
}
