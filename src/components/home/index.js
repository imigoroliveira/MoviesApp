import "./style.css";
import Header from '../header/index';
import Footer from '../footer/index';
import Movie from '../movies/index'
export default function Filme() {
  return (
    <div>
     <Header></Header>
     <Movie></Movie>
     <Footer></Footer>
    </div>
  )
}