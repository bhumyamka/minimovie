import React from 'react';
import Header from './Header';
import Movies from './Movie/Movies';
import '../styles/App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      about: 'Tentang Kami'
    };
  }
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header about={this.state.about}/>
        <Movies />
      </div>
    );
  }
}

export default App;
