import React from 'react'

function Second() {
  return (
    <div>
          <div className='form'>
      
      
      <div className='container'>
           <div className='row'>
               <div className='col-6'> 
               <form className='forms'>
      <label className='blog' >Enter The Selected Topic .
      <br/>
       <input
        className='input'
          type="text" 
          id="blogTopic"
           name="blogTopic"
          placeholder="Enter a Blog Topic to generate blog section on"/>
      </label>
       <br/>
       
       <div className='banner__btn'>
           <a className='btn btn-smart' href=' '> Generate Section </a>
        </div>
     
    </form>



      </div>

      <div className='col-6'> 
              <h3> blogSectionIdeas|safe</h3>
      </div>



      

      </div>
      </div>



      
      </div>
      
    </div>
  )
}

export default Second