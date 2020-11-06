import React, { Component } from "react"
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import {setSel, setDis3, setSearch, setDis1, } from './../redux/main/mainpage.actions'




class List extends Component{
    onClicks = e => {
        this.props.setSel({sel: e})
        this.props.onSubmit()
      }
      
      componentDidUpdate(){
        this.props.onSubmit()
        
      }

      onLinkClick= e => {
        
        let min =(e - 1) * 20
        let max = min + 20;
        
        let display = this.props.contacts.filter(function (e) {
          return e.id >= min && e.id <= max;
             })


             this.props.setDis1({display1: [ ...display] })

      }

     
          // saving input to state and displaying search reasults 
          handleChange = e => {
            const { contacts, setDis3, setSearch, searchField } = this.props
            
             setSearch({ searchField: e.target.value });
    
              const filtered = contacts.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(searchField)));
              
                
                setDis3({display3: [ ...filtered]})
    
          };
    
    render() {
   
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
         {this.props.display1.map(x=>(
      <li>
        <Button key={x._id} onClick={() => {
            this.onClicks(x.id)
        }}>
          <p className='id'>{x.id}</p> <p className='name'>{x.name}</p> || <p className='number'>{x.number}</p>
        </Button>
        
      </li>
    ))}
        </ul>
          
      <div className='links'>

          {this.props.maxPage.map(x=>(
            
            <Link
            key={x}
            component="button"
            variant="body2"
            onClick={() => {
            this.onLinkClick(x)
        }}
          
        >
          <p className='bl'> {x} </p>
        </Link>
        
          ))}

      </div>
     
    </div>
    )}
}

const mapDispatchToProps = dispatch => ({
    setSel: id => dispatch(setSel(id)), 
    setDis3: display3 => dispatch(setDis3(display3)),
    setSearch: search => dispatch(setSearch(search)),
    setDis1: display1 => dispatch(setDis1(display1)),


   
  });

  const mapStateToProps = ( state ) => {
  
    return({
      contacts: state.mainpage.contacts.contacts,
      display3: state.mainpage.display3.display3,
      searchField: state.mainpage.searchField.searchField,
      maxPage: state.mainpage.maxPage.maxPage,
      display1: state.mainpage.display1.display1,
    })
   
  }


export default connect(mapStateToProps, mapDispatchToProps)(List);