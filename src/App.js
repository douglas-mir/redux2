import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      value:''
    };
  }
  render() {
      const {newValue} = this.props;
    return (
        <div className="App" style={{paddingTop: '10px', margin: '10px'}}>
          <h1>{newValue}</h1>
          <p/>
          <input type="text"/>
          <button>Atualizar</button>
        </div>
    );
  }
}
const mapStateToProps = store => ({
    newValue : store.updateReducer.newValue
})
export default connect (mapStateToProps) (App);
