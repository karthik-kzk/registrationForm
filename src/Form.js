import React from 'react'
import { Field, reduxForm } from 'redux-form';
import FieldFileInput from './FieldFileInput';


const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined


const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined



const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)









const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting ,submit} = props


  return (
    <div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={renderField}
            type="text"            
            validate={[ required, maxLength15 ]}
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={renderField}
            type="text"
            validate={[ required, maxLength15 ]}
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={renderField}
            type="email"
            validate={[ required,email  ]}
          />
        </div>
      </div>
      <div>
        <label>Phone No</label>
        <div>
          <Field
            name="phone"
            component={renderField}
            type="text"            
            validate={[ required, number ]}
          />
        </div>
      </div>
      <div>
        <label>Address</label>
      </div>
        <div>
          <Field
            name="address"
            component="input"
            type="text"            
          />
        </div>
      <div>
        <label>Country</label>
        <div>
          <Field
            name="country"
            component="input"
            type="text"            
          />
        </div>
      </div>
      <div>
        <label>State</label>
        <div>
          <Field
            name="state"
            component="input"
            type="text"           
          />
        </div>
      </div>
      <div>
        <label>City</label>
        <div>
          <Field
            name="city"
            component="input"
            type="text"            
          />
        </div>
      </div>
      <div>
        <label>User Pic Required</label>
        <div>
          <Field
            name="image"
            component={FieldFileInput}
            type="file"    
            validate={ required }   
          />
        </div>
      </div>  
       <div>
        <button type="submit" onClick={handleSubmit(submit)}  disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)