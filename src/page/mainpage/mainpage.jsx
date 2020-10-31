import React, { Component } from "react"
import Input from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';

import EditPage from './../editpage/editpage'
import { connect } from 'react-redux';
import {setOBJ, 
        setPage, 
        setSearch, 
        setCount, 
        setDis1, 
        setDis2, 
        setDis3,
        setSel
         } from './../../redux/main/mainpage.actions'
import List from './../../components/list.component'

import './mainpage.css'

class MainPage extends Component{
    

      
   
    //putting the contact list on two different arrays for different pages
      componentDidUpdate(){
        const { contacts, count, setDis2, setDis1, setCount,} = this.props;
       let displays;
       let displays2;
       
      
              
          if(contacts !== undefined && contacts.length === 30 && count < 2){
         
           setCount({count: count + 1})
         

            displays =  contacts.filter(function (e) {
              
              return e.id <= 20;
                 })
                 displays2 =  contacts.filter(function (e) {
              
                  return e.id >= 21;
                     })
                 
                 
            setDis1({display1: [ ...displays]})
            setDis2({display2: [...displays2]})
            
        } 
      }


      componentDidMount(){
        const{ setCount, setPage, setSearch, setDis1, setSel, setOBJ} = this.props;

        setCount({count: 0})
        setPage({ pages: 1})
        setSearch({searchField: '' })
        
        setDis1({display1: [{name: 'If youre seeing this', number: 'contacts didnt load from database'}]})
        setSel({sel: 0})
        setOBJ({id: -1})
        
      }
      
      


    // saving input to state and displaying search reasults 
      handleChange = e => {
        const { contacts, setDis3, setSearch, searchField } = this.props
        
         setSearch({ searchField: e.target.value });

          const filtered = contacts.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(searchField)));
          
            
            setDis3({display3: [ ...filtered]})
      

      };

      //changes display based on page count

      linkClick1 = e =>{
        this.props.setPage({ pages: 1})
      }


      linkClick2 = e =>{
        
        this.props.setPage({ pages: 2})
        
      }





      // Makes each item in list a button that you can click 
      onSubmit = e => {
        
        const {contacts, setOBJ, sel, obj} = this.props;
        console.log(sel)
        if(sel<=31 && sel >= 1){
          setOBJ({ obj: 
            {id: contacts[sel - 1].id,
             _id: contacts[sel - 1]._id, 
             name: contacts[sel - 1].name, 
             number: contacts[sel - 1].number}
        })
        console.log(obj)
        }
        

       
      }



    render() {

      //destructuring 
     
       const { contacts, obj, display1, display2, display3, searchField, pages} = this.props
       
        
    
        //decided to display page one or two 
       if( pages === 1 && searchField === '' && !obj ){
        return(
          
          <div className='main'>
          <h1>Contact Libary</h1>
          <Input 
              className='searchBar'
              type='search'
              placeholder='Name or Number Here'
              onChange={this.handleChange}
          />
          
          
          
          <span className='warning'>Search Bar is Case Sensitive</span>
          <List  display={display1} 
                    
                  onSubmit={() => this.onSubmit()} 
                  linkClick1={this.linkClick1} 
                  linkClick2={this.linkClick2} />
        </div>
        );



                  //deciding to display edit page



      }else if( obj !== undefined){
        return(
          <div>

          <EditPage />
          </div>
        )



          //deciding to display page two



      }else if(pages === 2 && display2 !== null  && searchField === ''  && !obj){
        return (
          <div className='main'>
            <h1>Contact Libary</h1>
            <Input 
                className='searchBar'
                type='search'
                placeholder='Name or Number Here'
                onChange={this.handleChange}
            />
            
            
            
            <span className='warning'>Search Bar is Case Sensitive</span>
            <List  display={display2} 
                     
                    onSubmit={() => this.onSubmit()} 
                    linkClick1={this.linkClick1} 
                    linkClick2={this.linkClick2} />
          </div>
          
        )


                  //display if searching for somthing 



      }else if(searchField !== '' && contacts !== undefined  && !obj && searchField !== undefined){
        return (
          <div className='main'>
            <h1>Contact Libary</h1>
            <Input 
                className='searchBar'
                type='search'
                placeholder='Name or Number Here'
                onChange={this.handleChange}
            />
            
            
            
            <span className='warning'>Search Bar is Case Sensitive</span>
            <List  display={display3} 
                     
                    onSubmit={() => this.onSubmit()} 
                    linkClick1={this.linkClick1} 
                    linkClick2={this.linkClick2} />
          </div>
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
            <Link
                component="button"
                variant="body2"
                onClick={this.linkClick1}
              
            >
              <p className='bl'>1</p>
            </Link>
            |
            <Link
                component="button"
                variant="body2"
                onClick={this.linkClick2}
                
            >
              <p className='bl'>2</p>
            </Link>
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
    display2: state.mainpage.display2.display2,
    display1: state.mainpage.display1.display1,
    count: state.mainpage.count.count,
    sel: state.mainpage.sel.sel


  })
 
}

const mapDispatchToProps = dispatch => ({
  setOBJ: obj => dispatch(setOBJ(obj)), 
  setPage: page => dispatch(setPage(page)),
  setSearch: search => dispatch(setSearch(search)),
  setCount: count => dispatch(setCount(count)),
  setDis1: display1 => dispatch(setDis1(display1)),
  setDis2: display2 => dispatch(setDis2(display2)),
  setDis3: display3 => dispatch(setDis3(display3)),
  setSel: id => dispatch(setSel(id)), 
 
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);



