import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContactsArr, setId } from './redux/main/mainpage.actions'
import { Route, Switch } from 'react-router-dom'

import MainPage from './page/mainpage/mainpage'
import CreatePage from './page/createpage/createpage'

class App extends Component{
 
  componentDidMount() {
    const { setContactsArr} = this.props;
    fetch('http://localhost:5000/api/v1/contacts')
    .then(response=>response.json())

    .then(list => setContactsArr({ contacts: list.data  }));

  };

  componentDidUpdate(){
    const {contacts, setId } = this.props;
    if(contacts !== undefined){
      let num = contacts.length;
      num = num + 1;
      setId({id: num})
   
    }
  }
  
  
  
render(){


    return (
      
        <div className='app'>
    
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/create' component={CreatePage} />
          </Switch>
        </div>
   
    );
  }
};

const mapDispatchToProps = dispatch => ({
  setContactsArr: arr => dispatch(setContactsArr(arr)),
  setId: num => dispatch(setId(num))

});

const mapStateToProps = ( state ) => {
  
  return({
   
    contacts: state.mainpage.contacts.contacts,
  

  })
 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
