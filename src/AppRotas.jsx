// eslint-disable-next-line
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppHome from './AppHome';
import AppFilmes from './AppFilmes';
import AppCinemas from './AppCinemas';


function AppRotas() {

  return (
    <div className="App">
      <header className="App-header">

     <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<AppHome />}></Route>
          <Route exact path='/filmes' element={<AppFilmes />}></Route>
          <Route exact path='/cinemas' element={<AppCinemas />}></Route>
          
        </Routes>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default AppRotas;
