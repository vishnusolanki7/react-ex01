import React, { useState } from 'react'

const TestComponent = () => {
  const [name,setName] = useState("keyur");
  return (
  <React.Fragment>
  <div>
    this name --- {name}
    <button onClick={()=> setName('vishnu')}> 
     next
    </button>
    <div>
     my name is vishnudsfsfdsfdsfsdfs
     sfjkbsfb
    </div>
  </div>
  </React.Fragment>
  )
}

export default TestComponent; 