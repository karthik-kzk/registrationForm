import SimpleForm from './Form';
import './App.css';

import { connect } from 'react-redux';
import {useState} from 'react';
import BasicTable from './Mtable';
import { nanoid } from "nanoid";

import {reset} from 'redux-form';

import TableHeader from './tableHeader';
 
function App() {

  const [user,setUser]= useState([{id: 1,email:'Azxy@gmail,com',name:"ram",image:'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg',phone:92345678912,address:'thudiyalur',country:'india',state:'tamilnadu',city:'coimbatore'},{id:2,email:'second',name:'suresh'}])

  function editDetail(id, newUser) {
    const editedDetailList = user.map(user => {
   
      if (id === user.id) {
        
        return {...user,
          name: newUser.name,
          email:newUser.email,
          phone:newUser.phone,          
          address:newUser.address,
          country:newUser.country,
          state:newUser.state,
          city:newUser.city
        }
      }
      return user;
    });
    setUser(editedDetailList );
  }


  const submit =(values,dispatch)=>{
    const newUser = { id: "todo-" + nanoid(),name: values.firstName+values.lastName , email: values.email, phone: values.phone, address:values.address, country:values.country,state:values.state,city:values.city,image:URL.createObjectURL(values.image)}
    setUser([...user,newUser])
    dispatch(reset('simple'));
   console.log(values.image)
    
  }
  function deleteDetail(id) {
    const remainingDetail = user.filter(val => id !== val.id);
    setUser(remainingDetail);
    
  }

  const userList =(
    user.map((user)=>
    <BasicTable 
      id={ user.id}
      name={ user.name}
      email={ user.email}
      phone={user.phone}
      address={ user.address} 
      country={ user.country}
      state={ user.state}
      city={ user.city}
      deleteDetail={deleteDetail}
      editDetail={editDetail}
      image={user.image}
    />
  ))
  

  return (
   
      <div className="App">
        <SimpleForm onSubmit={submit}/>
        
        <TableHeader
        rows={userList}
        />
        {/* {userList} */}
      
     
         
    </div>
   
  );
}

export default connect() (App);
