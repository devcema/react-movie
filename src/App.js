import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
import Header from './components/Header/index';
import Home from './components/home';
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

//Styles

import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
