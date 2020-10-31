import React from "react"
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


const List = ({ display,  onSubmit, linkClick1, linkClick2}) => {

    // saving input to state and displaying search reasults 
   
    return(
        <div className='main'>
       
        
        
        <ul>
       
         {display.map(x=>(
      <li>
        <Button key={x._id} onClick={() => onSubmit(x.id)}>
          <p className='id'>{x.id}</p> <p className='name'>{x.name}</p> || <p className='number'>{x.number}</p>
        </Button>
      </li>
    ))}
        </ul>
          
      <div className='links'>
        <Link
            component="button"
            variant="body2"
            onClick={linkClick1}
          
        >
          <p className='bl'>1</p>
        </Link>
        |
        <Link
            component="button"
            variant="body2"
            onClick={linkClick2}
            
        >
          <p className='bl'>2</p>
        </Link>
      </div>
     
    </div>
    )
}


export default List;