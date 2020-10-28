import React, { Component } from "react"
import Input from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import EditPage from './../editpage/editpage'
import { connect } from 'react-redux';
import {setOBJ } from './../../redux/main/mainpage.actions'


import './mainpage.css'

class MainPage extends Component{
    constructor(){
        super();
        this.state = {
         
          searchField: '',
          pages: 1,
          display1: null,
          display2: null,
          display3: null,
          tf: 0,
        }
      }

      
   
    
      componentDidUpdate(){
       let displays;
       let displays2;
       
         const { contacts} = this.props;
        
         const {tf} = this.state;
         
          if(contacts !== undefined && contacts.length === 30 && tf < 2){
         
           this.setState({tf: this.state.tf + 1})
         

            displays =  contacts.filter(function (e) {
              
              return e.id <= 20;
                 })
                 displays2 =  contacts.filter(function (e) {
              
                  return e.id >= 21;
                     })
                 
                 
            this.setState({display1: [ ...displays]})
            this.setState({display2: [...displays2]})
        } 
      }
      
    
      handleChange = e => {
        this.setState({ searchField: e.target.value });
        const { contacts } = this.props

          const filtered = contacts.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(this.state.searchField)));
          this.setState({display3: [ ...filtered]})


      };

      linkClick1 = e =>{
        this.setState({ pages: 1})
      }


      linkClick2 = e =>{
        
        this.setState({ pages: 2})
        
      }



      onSubmit = e => {

        const {contacts, setOBJ} = this.props;

        setOBJ({ obj: 
            {id: contacts[e - 1].id,
             _id: contacts[e - 1]._id, 
             name: contacts[e - 1].name, 
             number: contacts[e - 1].number}
        })
        

       
      }


      handleBack = e => {
          this.setState({ id: null, name: null, number: null })
      }


 


    render() {
        const {pages, display1, display2, display3, searchField} = this.state;
       const { contacts, obj } = this.props
       



        
       if( display1!== null && pages === 1 && searchField === '' && !obj){
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
                 {display1.map(x=>(
              <li>
                <Button key={x._id} onClick={() => this.onSubmit(x.id)}>
                  <p className='id'>{x.id}</p> <p className='name'>{x.name}</p> || <p className='number'>{x.number}</p>
                </Button>
              </li>
            ))}
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
        );
      }else if( obj !== undefined){
        return(
          <div>

          <EditPage />
          </div>
        )
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
                
                
                <ul>
                <span className='warning'>Search Bar is Case Sensitive</span>
                 
                {display2.map(x=>(
              <li>
                <Button key={x._id} onClick={() => this.onSubmit(x.id)}>
                  <p className='id'>{x.id}</p> <p className='name'>{x.name}</p> || <p className='number'>{x.number}</p>
                </Button>
              </li>
            ))}
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
      }else if(searchField !== '' && contacts !== undefined  && !obj){
        return (
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
                 
                {display3.map(x=>(
              <li>
                <Button key={x._id} onClick={() => this.onSubmit(x.id)}>
                  <p className='id'>{x.id}</p> <p className='name'>{x.name}</p> || <p className='number'>{x.number}</p>
                </Button>
              </li>
            ))}
                
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
      }else {
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

const mapStateToProps = ( state ) => {
  
  return({
    contacts: state.mainpage.contacts.contacts,
    obj: state.mainpage.obj.obj,
  })
 
}

const mapDispatchToProps = dispatch => ({
  setOBJ: obj => dispatch(setOBJ(obj)), 
   

});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);



