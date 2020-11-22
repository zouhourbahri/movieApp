import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// Components 
import Filter from './components/Filter';
import MovieList from './components/MovieList';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignIn from "./components/signIn"
import AddMovie from "./components/AddMovie"

function App() {
  const [ListOfMovies, setListOfMovies]=useState([
    {
      title:"Jumanji",
      description:"Quatre lycéens découvrent un vieux jeu qui les introduit dans la jungle associée aux paramètres du jeu et à sa console, littéralement le jeu incarné dans leurs choix sur lesquels reposent leurs activités, pour se rendre compte avec le temps que (Jumanji) n'est pas qu'un jeu, mais un défi pour survivre, où il faut terminer le jeu jusqu'à sa fin Ainsi, vous pouvez revenir à votre monde réel naturel",
      posterUrl:"http://cima4u.io/wp-content/uploads/00-2312.jpg",
      rate: {
        size: 30,
        count:5,
        value: 5,
        edit: false
      },
      id: "1",
      watched: false ,
    },
    {
      title:"joker",
      description:"Lentement, la pression et les circonstances unissent leurs forces sur un comédien raté jusqu'à ce qu'il devienne fou et se transforme en un tueur criminel et obsédé",
      posterUrl:"http://cima4u.io/wp-content/uploads/0-9760.jpg",
      rate: {
        size: 30,
        count:5,
        value: 4,
        edit: false
      },
      id:"2",
      watched: false ,
    },
    {
      title:"Pirates Of the caribbean",
      description:"Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
      posterUrl:"http://cima4u.io/wp-content/uploads/1000-41.jpg",
      rate: {
        size: 30,
        count:5,
        value: 3,
        edit: false
      },
      id:"3",
      watched: false ,
    }
  ])

  const modification = (modif) => modif ? setListOfMovies([...ListOfMovies,  {
    title:modif.title,
    description:modif.description,
    posterUrl: modif.posterURl,
    rate: {
      size: 30,
      count:5,
      value: modif.rate.value,
      edit: false
    },
    id:Math.round(),
    watched: false ,
  }]) : null; 

  const [search, setSearch] = useState('')
  const searchbytitle = (value) => {
    setSearch(value)
 }
 const [ratefiltring, setRatefiltring]=useState(0)
 const searchbyrate = (value) => {
  setRatefiltring(value)
 }
  const handleRemove = (id) => setListOfMovies(ListOfMovies.filter(el=> el.id!==id));
  const handlemovie = (id) => setListOfMovies(ListOfMovies.map(movie=> movie.id === id ? {title:movie.title, description:movie.description, posterUrl: movie.posterUrl, rate:movie.rate, id:movie.id, watched:!movie.watched} : movie));
  
  return (
    <div className="App">
      <NavBar />
      <Filter searchbytitle={searchbytitle} searchbyrate={searchbyrate} />
      <MovieList ListOfMovies={ListOfMovies} handleRemove={handleRemove} handlemovie={handlemovie} search={search} ratefiltring={ratefiltring} />
      <AddMovie  modification={modification} />
      <SignIn />
      <Footer />
    </div>
  );
}

export default App;
