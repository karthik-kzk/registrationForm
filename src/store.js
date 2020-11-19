import {reducer as formReducer} from 'redux-form';
import * as redux  from 'redux'


export const USER_DETAILS ={
    type:'userDetail'
    
}

const initailState ={
    user:["hello"]
}


const reducer =(state=initailState ,action)=>{
    switch(action.type){
        case USER_DETAILS:{
            return{...state,user:state.user};
            
        }
        default:{
            return state;
        }
    }
}
const rootReducer = redux.combineReducers({
    
    reducer,
    form: formReducer
  })
  
  
  const store =redux.createStore(rootReducer);


  export default store;