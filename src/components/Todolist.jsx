import './Todolist.css'
import { FaCheck } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
export const Todolist = ()=>{

 return(
   <div className="container">

    <div className="first">
        Simple to do list to check off your tasks for today!
    </div>
    <div className="second">
       <div className="inner">
            <form>
                <div className="position">
                    <div className="posi">
                        <div className="square"><FaCheck size={15} color={"white"} /></div>
                        <div className="todo">
                            <label  for="todo">Todo</label>
                        </div>
                        
                    </div>
                    <div className="posi">
                    <IoMdClose size={25} color={"black"} />
                    </div>
                </div>
               
                
                
            </form>
            <hr/>
            <div className="parent">
            
                <input type="text" className="input" placeholder='Type Your Task' />
            </div>
            <ul className="list">
                <div className="arrange">
                    <div className="circle"></div>
                    <li>Change Theme Colors</li>
                </div>
                <div className="arrange">
                    <div className="circle"></div>
                    <li>Review with Dev Team</li>
                </div>
                <div className="arrange">
                    <div className="circle"></div>
                    <li>Finaize Slider Component</li>
                </div>
                <div className="arrange">
                    <div className="circle"></div>
                    <li>Celebrate Release</li>
                </div>
                <div className="arrange">
                    <div className="plus"><FaPlus size={20} /></div>
                    <button className="btn">Add Item</button>
                </div>                                
            </ul>
            <hr/>
            <div className="complete">
                <h4>Completed</h4>
                <MdDeleteOutline  size={20}/>
            </div>

       </div>
    
            
      
       <hr/>
    </div>




   </div>




 )




}