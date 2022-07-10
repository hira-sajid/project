import React from 'react'

function Third() {
  return (
    <div>
          <div className='form'>
      
      
      <div className='container'>
           <div className='row'>
               <div className='col-6'> 
               <form className='forms'>
      <label className='blog' > Enter section title you want to expand
      <br/>
       <input
        className='input'
          type="text" 
          id="blogTopic"
           name="blogTopic"
          placeholder="Enter a section title "/>
      </label>
       <br/>
       
       <div className='banner__btn'>
           <a className='btn btn-smart' href=' '> Expand Title  </a>
        </div>
     
    </form>



      </div>

      <div className='col-6'> 
              <h3> blogExpanded|safe</h3>
      </div>



      

      </div>
      </div>



      
      </div>
      
    </div>
  )
}

export default Third