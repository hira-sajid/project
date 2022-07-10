import React from 'react'

function Form() {
  return (
    <div className='form'>
      
      
      <div className='container'>
           <div className='row'>
               <div className='col-6'> 
               <form className='forms'>
      <label className='blog' >What topic do you want to get blog ideas on?
      <br/>
       <input
        className='input'
          type="text" 
          id="blogTopic"
           name="blogTopic"
          placeholder="Enter a Blog Topic"/>
      </label>
       <br/>
       
       <div className='banner__btn'>
           <a className='btn btn-smart' href=' '> Generate  ideas </a>
        </div>
     
    </form>



      </div>

      <div className='col-6'> 
              <h3> blogTopicIdeas|safe</h3>
      </div>



      

      </div>
      </div>



      
      </div>
      
      
      
      
   
  )
}

export default Form