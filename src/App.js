import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import SearchLists from './pages/SearchLists';
import GlobalStyles from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const theme = {
  pc: '1280px',
  tablet: '768px',
  mobile: '480px',

  colors: {
    fonts: '#333',
    point: '#ff6666',
  },

  el: {
    sectionPadding: '3rem 0',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search-lists' element={<SearchLists />}></Route>
          <Route path='/details' element={<Details />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
