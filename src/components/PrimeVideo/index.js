// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'
// const horrorMovie = 'HORROR'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovie,
  )

  //   const horrorMoviesList = moviesList.filter(
  //     eachMovie => eachMovie.categoryId === horrorMovie,
  //   )
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MovieSlider moviesList={actionMovieList} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MovieSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
