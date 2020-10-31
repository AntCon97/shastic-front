import React, { Component } from "react"
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {setSel} from './../redux/main/mainpage.actions'




class List extends Component{
    onClicks = e => {
        this.props.setSel({sel: e})
        this.props.onSubmit()
      }
    
    render() {
   
    return(
        <div className='main'>

        <ul>
       
         {this.props.display.map(x=>(
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
        <Link
            component="button"
            variant="body2"
            onClick={this.props.linkClick1}
          
        >
          <p className='bl'>1</p>
        </Link>
        |
        <Link
            component="button"
            variant="body2"
            onClick={this.props.linkClick2}
            
        >
          <p className='bl'>2</p>
        </Link>
      </div>
     
    </div>
    )}
}

const mapDispatchToProps = dispatch => ({
    setSel: id => dispatch(setSel(id)), 

   
  });


export default connect(null, mapDispatchToProps)(List);