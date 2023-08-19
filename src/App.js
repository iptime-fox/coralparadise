import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import SearchLists from './pages/SearchLists';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-lists' element={<SearchLists />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
