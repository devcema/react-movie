import { Image } from "./Thumb.styles";
import {Link} from "react-router-dom"

const Thumb = ({image, movidId, clickable}) => {

  return(
    <div>
      {clickable ? (
        <Link to={`/${movidId}`} >
          <Image src={image} alt='movie-thumb' />

        </Link>
      ) : (
        <Image src={image} alt='movie-thumb' />
      )
    }
    </div>
  )
}

export default Thumb