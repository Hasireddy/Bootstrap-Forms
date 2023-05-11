import React from 'react'

const Form = () => { 
  return (
    <div className = "container py-3 py-3">      
    <h1 className="text-success">Bootstrap Form</h1>  
    <div className = "row justify-content-start">
      <div className = "col-6">column1</div>
      <div className = "col-6 order-first offset-6">column2</div>
       </div>
       <div className = "row justify-content-center">
        <div className = "col-6 ms-auto">column1</div>
        <div className = "col-6">column2</div>
       </div>
       <div className = "row justify-content-end">
        <div className = "col-6">column1</div>
        <div className = "col-6">column2</div>
       </div>
    </div>
  )
}

export default Form;
