import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/header.component";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Modules from "./pages/modules/modules.component";
import { firstYearModules, secondYearModules, thirdYearModules, optionalModules, generalModules } from "./modules";
import Footer from "./components/footer/footer.component";

function App() {
  const years = [firstYearModules, secondYearModules, thirdYearModules, optionalModules, generalModules];
  return (

    <div className="App">
      <div className='content'>
        <Header />
        <Switch>
          <Route exact path='/first-year' render={() => <Modules modules={years[0]} />} />
          <Route exact path='/second-year' render={() => <Modules modules={years[1]} />} />
          <Route exact path='/third-year' render={() => <Modules modules={years[2]} />} />
          <Route exact path='/optional-modules' render={() => <Modules modules={years[3]} />} />
          <Route exact path='/general-modules' render={() => <Modules modules={years[4]} />} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
