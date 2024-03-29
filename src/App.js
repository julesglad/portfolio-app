import BlogPosts from "./components/BlogPosts/BlogPosts";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav.js";
import Portfolio from "./components/portfolio/Portfolio";


function App() {
  return (
    <div className="header__container">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <BlogPosts />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
