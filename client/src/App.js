import './App.css';
import PostsList from "./features/PostsList"
import Header from "./components/Layout/Hearder";
import Footer from './components/Layout/Footer';
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/bootstrap-icons/bootstrap-icons.css'
import './vendor/aos/aos.css'
import './vendor/glightbox/css/glightbox.min.css'
import './vendor/swiper/swiper-bundle.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <h1>React on Rails Blog</h1>
      <p>Find this application layout in client/src/App.jsx</p>
      <PostsList />
      <Footer />
    </div>
  );
}

export default App;
