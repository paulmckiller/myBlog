import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import MyContentsScreen from './screens/MyContentsScreen';
import ContentScreen from './screens/ContentScreen';
import AddContentScreen from './screens/AddContentScreen';

function App() {
  let containerStyle = "text-center w-75";
  return (
    <Router>
      <Header />
      <main>
        <Container className={containerStyle}>
          <Switch>
            <Route path='/profile' exact ><ProfileScreen/></Route>
            <Route path='/mycontent' exact><MyContentsScreen/></Route>
            <Route path='/newblog' exact><AddContentScreen/></Route>
            <Route path='/blog/:id' exact><ContentScreen/></Route>
            <Route path='/' exact ><HomeScreen /></Route>
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
