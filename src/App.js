import Nav from './component/Nav'
import MovieContainer from './component/MovieContainer';
import {useState} from 'react'
import AddMovie from './component/AddMovie'


function App() {

  const [movies,setmovies] = useState([
    {
      id: Math.random(),
      img: "https://i.pinimg.com/originals/c4/1f/38/c41f3825633d80e0ecd833468db92c05.jpg",
      name: "Jhon Wick",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
      name: "Avatar",
      rating: 2,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
      name: "Iron Man 2",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      name: "Batman",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
      name: "Deadpool 2",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      name: "Jumnanji",
      rating: 3,
    },
    {
      id: Math.random(),
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      rating: 1,
    },
  ]);


  const [input,Setinput] = useState("")

  const handleInput = (e) => {

    Setinput(e.target.value)  }


    const [rating, setRating] = useState(0)

    const handleRating = (newRating) => {
      setRating(newRating);
    };
  
    const [show,setshow] = useState(false)

   const handleModal= () => {

    setshow(!show)
   }
     


   const [newMovie,setnewMovie] = useState({

    id:Math.random(),
    img:"",
    name:"",
    rating:0
   })

   const handleNewMovie=(e) =>{

    if (e.target.name === "rating") {
      setnewMovie({ ...newMovie, [e.target.name]: +e.target.value });
    }
    else
    {
      setnewMovie({ ...newMovie, [e.target.name]: e.target.value });
    }
    
   }

   const handleAddMovie = () => {
    if (newMovie.rating >= 1 && newMovie.rating <= 5) {
      setmovies([...movies, newMovie]);
      handleModal();
    }else
    {
      alert("rating between 1 and 5");
    }
    
  };

  return (
    <div className="App">
     <Nav  input={input} handleInput={handleInput} rating={rating} handleRating={handleRating} handleModal={handleModal}/>
     <MovieContainer movies={movies}  input={input} rating={rating} />
     <AddMovie show={show} handleModal={handleModal} newMovie={newMovie} handleNewMovie={handleNewMovie} handleAddMovie={handleAddMovie}/>
    </div>
  );
}

export default App;
