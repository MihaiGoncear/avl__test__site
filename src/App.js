import './Styles/App.scss';
import React, { Component } from 'react';
import { Header } from './Page__components/Header'
// import { Main } from './Page__components/Main'
// import { Footer } from './Page__components/Footer'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="full__page__container">
        <Header/>
        {/* <Main/> */}
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;