import React, { Component } from "react"
import Input from '@material-ui/core/Input';
import EditPage from './../editpage/editpage'
import { connect } from 'react-redux';
import {setOBJ, 
        setPage, 
        setSearch, 
        setCount, 
        setDis1, 
      
        setDis3,
        setSel, 
        setMaxPage
         } from './../../redux/main/mainpage.actions'
import List from './../../components/list.component'

import './mainpage.css'

class MainPage extends Component{
    

      
   
    //putting the contact list on two different arrays for different pages
      componentDidUpdate(){
        const { contacts, count, setCount, setMaxPage} = this.props;
      
       let num;
      
              
          if(contacts !== undefined && contacts.length > 0 && count < 2){
            num = contacts.length;
            num = num / 20
            num = Math.ceil(num) 
            setMaxPage({maxPage:  Array.from({length: num}, (_, i) => i + 1)})
            
           setCount({count: count + 1})
         

           let display = contacts.filter(function (e) {
            return e.id <= 20;
               })
  
  
               this.props.setDis1({display1: [ ...display] })
                 

            
        } 
      }


      componentDidMount(){
        const{ setCount, setPage, setSearch, setDis1, setSel, setOBJ, setMaxPage} = this.props;

        setCount({count: 0})
        setPage({ pages: 1})
        setSearch({searchField: '' })
        
        setDis1({display1: [{name: 'If youre seeing this', number: 'contacts didnt load from database'}]})
        setSel({sel: 0})
        setOBJ({id: -1})
        setMaxPage({ maxPage: ['']})
        
      }
      


      // Makes each item in list a button that you can click 
      onSubmit = e => {
        
        const {contacts, setOBJ, sel} = this.props;
        
        if(sel<=31 && sel >= 1){
          setOBJ({ obj: 
            {id: contacts[sel - 1].id,
             _id: contacts[sel - 1]._id, 
             name: contacts[sel - 1].name, 
             number: contacts[sel - 1].number}
        })
       
        }
      
      }
    render() {

      //destructuring 
     
       const { contacts, obj, display1, display2, display3, searchField, maxPage} = this.props
       
        
    
        //decided to display page one or two 
       if( maxPage !== undefined && searchField === '' && !obj ){
        return(
      
          <List  
          display={display1} 
                    maxPage={maxPage}
                  onSubmit={() => this.onSubmit()} 
               />
  
        );

                  //deciding to display edit page



      }else if( obj !== undefined){
        return(
          <div>

          <EditPage />
          </div>
        )

          //deciding to display page two



      }else if( maxPage !== undefined  && display2 !== null  && searchField === ''  && !obj){
        return (

            <List  display={display2} 
                     maxPage={maxPage}
                    onSubmit={() => this.onSubmit()} 
                     />
    
        )


                  //display if searching for somthing 



      }else if(searchField !== '' && contacts !== undefined  && !obj && searchField !== undefined){
        return (
        
            <List  display={display3} 
                     
                    onSubmit={() => this.onSubmit()} 
                    />
        
        )
      }else {


        //basic display if somthing goes wrong


        return(
            <div className='main'>
            <h1>Contact Libary</h1>
            <Input 
                className='searchBar'
                type='search'
                placeholder='Name or Number Here'
                onChange={this.handleChange}
            />
            
            
            <ul>
            <span className='warning'>Search Bar is Case Sensitive</span>
            
            
            </ul>
              
          <div className='links'>
         
          </div>
          
        </div>
       )
      }
     
    }

}


// map state and dispatch for redux 

const mapStateToProps = ( state ) => {
  
  return({
    contacts: state.mainpage.contacts.contacts,
    obj: state.mainpage.obj.obj,
    pages: state.mainpage.pages.pages,
    display3: state.mainpage.display3.display3,
    searchField: state.mainpage.searchField.searchField,
    
    display1: state.mainpage.display1.display1,
    count: state.mainpage.count.count,
    sel: state.mainpage.sel.sel,
    maxPage: state.mainpage.maxPage.maxPage,
    



  })
 
}

const mapDispatchToProps = dispatch => ({
  setOBJ: obj => dispatch(setOBJ(obj)), 
  setPage: page => dispatch(setPage(page)),
  setSearch: search => dispatch(setSearch(search)),
  setCount: count => dispatch(setCount(count)),
  setDis1: display1 => dispatch(setDis1(display1)),
  setDis3: display3 => dispatch(setDis3(display3)),
  setSel: id => dispatch(setSel(id)), 
  setMaxPage: num => dispatch(setMaxPage(num)),
 
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);



