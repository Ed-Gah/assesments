import './Practice.css'
import { useState } from 'react';

export const Practice = ()=>{
  const [fruits, updateFruits]= useState(["kiwi", "apples", "oranges", "berry"]);
  const [inputValue, updateInputValue] = useState("Saturday");
  const [check, updtateCheck] = useState(true);
  console.log(check);
 return(
  
  <div className="box">
    <input type="text"   className="inp" onChange={(e)=>{
     
      updateInputValue(e.target.value);

    }}/>
       <ul className="list">
          {

            fruits.map((item, index)=>{

              return(
                <div key={index} className="innerDiv">
                  {check && <>
                    <input type='checkbox' onClick={()=>{
                      updtateCheck(!check);
                    }} />
                    <li>{item}</li></>}
                </div>
              
              )
            })
          }

    

      </ul>
     <button onClick={()=>{

       updateFruits([...fruits, inputValue] );

     

       

     }}>Click Me </button>

  </div>

   

 )
  
  
    
  
  
  
  
  
  
  }
  