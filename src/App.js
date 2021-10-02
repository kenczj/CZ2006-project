import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Login from './pages/login'
import About from './pages/about'
import Register from './pages/register'
import RegisterAgent from './pages/registerAgent'
import ContactUs from './pages/contactUs'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#546e7a',
    },
    secondary: {
      main: '#fb8c00',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchBar />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/registerAgent">
            <RegisterAgent />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
        </Switch>
      
    </Router>
    </ThemeProvider>
  );
}
export default App;