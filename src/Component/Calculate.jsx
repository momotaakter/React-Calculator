import React, { useState } from 'react'
import './Calculate.css'
function Calculate() {
  const[num,setNum]=useState([]);


  const myvalue=(e)=>{
    setNum([...num,e.target.value])
  }
  //
  const getresult=()=>{
 const totallexpression=num.join('');
 const result=eval(totallexpression)
 setNum(result)


  }
  //delete button
  const deletebtn=()=>{
   setNum(num.slice(0, -1))
  }
  //deleteAll
  const deleteAll=()=>{
  setNum('')
  }
  //eval function er kaj
  return (
    <div>

       <div className='mydiv'>
       <p>{num}</p>
       </div>
       <div className="firstarea">
    
      <input type="button" value="DELL" onClick={deletebtn}/>
      <input type="button" value="AC" onClick={deleteAll}/>

      <input type="button" value="=" onClick={getresult}/>

       </div>
      <div className="firstarea">

      <input type="button" value="7" onClick={myvalue}/>
    
    <input type="button" value="8" onClick={myvalue}/>
  
    <input type="button" value="9" onClick={myvalue}/>
  
    <input type="button" value="-" onClick={myvalue}/>

      </div>

      <div className="firstarea">

<input type="button" value="4" onClick={myvalue}/>

<input type="button" value="5" onClick={myvalue}/>

<input type="button" value="6" onClick={myvalue}/>

<input type="button" value="+" onClick={myvalue}/>

</div>
<div className="firstarea">

<input type="button" value="1" onClick={myvalue}/>

<input type="button" value="2" onClick={myvalue}/>

<input type="button" value="3" onClick={myvalue}/>

<input type="button" value="-" onClick={myvalue}/>

</div>

  
    </div>
  )
}
export default Calculate




