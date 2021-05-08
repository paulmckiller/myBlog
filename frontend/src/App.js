import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MyContentsScreen from './screens/MyContentsScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="text-center w-75">
          <Switch>
            <Route to='/profile' exact ><ProfileScreen/></Route>
            <Route to='/mycontent' exact><MyContentsScreen/></Route>
            <Route to='/' exact ><HomeScreen /></Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
