import React, { Component } from "react"
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { connect } from 'react-redux';
import {setOBJ } from './../../redux/main/mainpage.actions'
import './editpage.css'







class EditPage extends Component{

    constructor(){
        super();
        this.state = {
            name: '',
            num: '',
            data: {},
            count: 0

        }
      }

      componentDidUpdate(){
          const {count, num, name, } = this.state
          if(count < num.length || count < name.length){
              this.setState({count: count + 1})
        if(name !== ''){
            this.setState({ data: {name: this.state.name}})
        }
        if(num !== ''){
            this.setState({ data: {number: this.state.num}})
        }
    }
    }
   
   handleBack = e => {
       
        setOBJ({ odj: undefined
        })
        window.location.reload();
    }
    
    

 
     handleChange1 = e => {
        this.setState({ name: e.target.value });
        
      }
      handleChange2 = e => {
          this.setState({num: e.target.value})
      }

      handleSubmit = e => {
      
        
        const { obj } = this.props
        

       
        
        this.setState({count: this.state.count + 1})

     const putMethod = {
          method: 'PUT', 
          headers: {
           'Content-type': 'application/json; charset=UTF-8' 
          },
          body: JSON.stringify(this.state.data)
         }
         

         fetch('http://localhost:5000/api/v1/contacts/' + obj._id, putMethod)
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(err => console.log(err))
          
          alert('Contact has been updated')
          



      }
    render(){
        const { obj } = this.props
       
    return(
    <div className='edits'>
        <h1>Edit Entry </h1>
        <div className='curr'>{obj.id} | {obj.name} | {obj.number} </div>

        <div>
            <Input 
                        className='search'
                        type='search'
                        placeholder='New Name Here'
                        onChange={this.handleChange1}
                        
                       
                     
                    />
            <Input 
                        className='search'
                        type='search'
                        placeholder='New Number Here'
                        onChange={this.handleChange2}
                    />
        </div>
            
        <div className='btnGrp'>

        <ButtonGroup  aria-label="outlined primary button group">
            <Button onClick={() => this.handleBack()}>Back</Button>
            <Button onClick={() => this.handleSubmit()} ref={input => this.inputElement = input}>Submit</Button>
            
        </ButtonGroup>
        </div>


    </div>
    )
  }
}


const mapStateToProps = ( state ) => {
  
    return({
      
      obj: state.mainpage.obj.obj,
    })
}

export default connect(mapStateToProps)(EditPage);