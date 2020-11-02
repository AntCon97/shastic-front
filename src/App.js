import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContactsArr } from './redux/main/mainpage.actions'

import MainPage from './page/mainpage/mainpage'

class App extends Component{
 
  componentDidMount() {
    const { setContactsArr } = this.props;
    fetch('http://localhost:5000/api/v1/contacts')
    .then(response=>response.json())

    .then(list => setContactsArr({ contacts: list.data  }));


  


  };
  
  
  
render(){


    return (
      
        <div className='app'>
    
        {console.log(this.props.contacts)}
          <MainPage />
         
        </div>
   
    );
  }
};

const mapDispatchToProps = dispatch => ({
  setContactsArr: arr => dispatch(setContactsArr(arr)),

});

const mapStateToProps = ( state ) => {
  
  return({
   
    contacts: state.mainpage.contacts.contacts,

  })
 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
