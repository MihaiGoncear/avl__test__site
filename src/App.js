import './Styles/App.scss';
import React, { Component } from 'react';
import { Header } from './Page__components/Header'
import { Main } from './Page__components/Main'
import { Footer } from './Page__components/Footer'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      option: 'all',
    }
  }

  filterOptionToState = (e) => {
      const filter = e.target.innerHTML.toLowerCase()
      e.target.classList.add('active')

      this.setState({ option: filter })
  }

  render() {
    return (
      <div className="full__page__container">
        <Header/>
        <Main filterOptionToState={this.filterOptionToState}  option={this.state.option}/>
        <Footer/>
      </div>
    );
  }
}

export default App;