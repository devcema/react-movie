//Components
import HeroImage from "./HeroImage";
import Grid from "./Grid/Index";
import Thumb from "./Thumb/Index";
import Spinner from "./Spinner/Index";
import SearchBar from "./SearchBar/Index";
import Button from "./Button/Index";
//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL  } from "../config"

//Hook 
import {useHomeFetch} from "../Hooks/useHomeFetch"

//Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
  
  const {state, loading, error,searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch()

  // let rand = Math.round(Math.random() * 19)

  if (error) return <div>Something went wrong...</div>

  return (
  
    <>
    {!searchTerm && state.results[0] ?
      <HeroImage 
      image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
      title ={ state.results[0].original_title}
      text={state.results[0].overview}
      />
      
      : null
    }
    <SearchBar setSearchTerm={setSearchTerm}/>

    <Grid header= {searchTerm ? 'Search Results' : 'Popular Movies'}>
      {state.results.map(movie =>(  
         <Thumb
          key={movie.id}
          clickable
          image={
            movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage
          }
          movidId = {movie.id}
          />
      ))}
     
    </Grid>
     {loading &&  <Spinner />}
    { state.page < state.total_pages && !loading && (
      <Button text='Load More' callback={()=>{setIsLoadingMore(true)}} />
    )}
   
    </>
  )
}

export default Home