import './Styles/App.scss';
import React, { Component } from 'react';
import { Header } from './Page__components/Header'
import { Main } from './Page__components/Main'
import { Footer } from './Page__components/Footer'
import { SetFilterToLocalStorage } from './Page__components/Functions/SetFilterToLocalStorage'
import { GetItemFromLocalStorage } from './Page__components/Functions/GetFilterFromLocalStorage'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      option: !GetItemFromLocalStorage() ? 'all' :  GetItemFromLocalStorage(),
    }
  }

  filterOptionToState = (e) => {
      const filter = e.target.innerHTML.toLowerCase()
      
      SetFilterToLocalStorage(filter)

      this.setState({ option: GetItemFromLocalStorage() })

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