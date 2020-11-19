import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';


import TableCell from '@material-ui/core/TableCell';


import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  tablerow: {
    maxWidth: 650,
    overflowX:'scroll'
  },
});





export default function BasicTable({id,email,name,deleteDetail,phone,country,city,address,state,editDetail,image}) {
  const classes = useStyles();

  const [isEditing, setEditing] = useState(false);

  const [newUser, setNewUser] = useState({
    name:'',
    email:''
  });

  function handleChange(e) {
    const value= e.target.value
    setNewUser({
      ...newUser,
    [e.target.name]: value
    });

  }

 

  function handleSubmit(e) {
    // e.preventDefault();
    editDetail(id, newUser);
    console.log(newUser);
    setNewUser("");
    setEditing(false);

  }

  const viewTemplate =(
         
           
            <TableRow id={id}   >
             
               <TableCell >{email}</TableCell>
              <TableCell >{name}</TableCell>
              <TableCell ><img src={image} alt="" style={{width:'100px',height:'50px'}}/></TableCell>
              <TableCell >{phone}</TableCell>             
              <TableCell >{address}</TableCell>
              <TableCell >{country}</TableCell>
              <TableCell >{state}</TableCell>
              <TableCell >{city}</TableCell>
              
              <TableCell >
                  <Button variant="contained" color="primary"
                      onClick={() => setEditing(true) }
                     
                      >
                        Edit
                  </Button>
                  <Button variant="contained" color="secondary"
                  onClick={() => deleteDetail(id)}
                  >
                        Delete
                  </Button>                  
              </TableCell>
            </TableRow> 
           

  )

  

  const editingTemplate=(
    
   
       
      <TableRow id={id}  >
       
         <TableCell > <label htmlFor={id} >  replacing {name} </label>
            <input             
            value={newUser.name}
            name='name'
            onChange={handleChange} 
            />           
         </TableCell>
         <TableCell > <label htmlFor={id} >  replacing {email} </label>
            <input             
            value={newUser.email}
            name='email'
            onChange={handleChange} 
            />           
         </TableCell>
         <TableCell > <label htmlFor={id} >  replacing {phone} </label>
            <input             
            value={newUser.phone}
            name='phone'
            onChange={handleChange} 
            />           
         </TableCell>
         <TableCell > <label htmlFor={id} >  replacing {address} </label>
            <input             
            value={newUser.address}
            name='address'
            onChange={handleChange} 
            />           
         </TableCell>
         <TableCell > <label htmlFor={id} >  replacing {country} </label>
            <input             
            value={newUser.country}
            name='country'
            onChange={handleChange} 
            />           
         </TableCell>
         <TableCell > <label htmlFor={id} >  replacing {state} </label>
            <input             
            value={newUser.state}
            name='state'
            onChange={handleChange} 
            />           
         </TableCell>
         <TableCell > <label htmlFor={id} >  replacing {city} </label>
            <input             
            value={newUser.city}
            name='city'
            onChange={handleChange} 
            />           
         </TableCell>
       
        <TableCell >
            <Button variant="contained" color="primary"
            onClick={() => handleSubmit(id)}
            >
                  Save
            </Button>
            <Button variant="contained" color="secondary"            
            onClick={() => setEditing(false)}
            >
                 Cancel
            </Button>
        </TableCell>
      </TableRow>
      


  )
  
  

  return (
    
    <>
        {isEditing ? editingTemplate : viewTemplate} 
   </> 
        
     
 
  
 );}
