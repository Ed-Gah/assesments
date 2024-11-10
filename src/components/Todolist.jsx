import './Todolist.css'
import { FaCheck } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react';
export const Todolist = ()=>{

const [todayList, updateTodayList] = useState(["Change Theme Colors","Review with Dev Team", "Finaize Slider Component", "Celebrate Release"]);
const [inputValue, updateInput] = useState ("");
const [choresDone, updateDoneChores] = useState([]);
console.log(choresDone);

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
                            <label  htmlFor="todo">Todo</label>
                        </div>
                        
                    </div>
                    <div className="posi">
                    <IoMdClose size={25} color={"black"} />
                    </div>
                </div>
                
                
            </form>
            <hr/>
            <div className="parent">
            
                <input type="text" value={inputValue} className="input" onChange={
                    (e)=>{
                        updateInput(e.target.value);


                    }
                }/>
                
            </div>
            <ul className="firstList">

                {

                todayList.map((todo, index)=>{

                return(
                <div className="arrange"  key={index}>

                    <div className="circle" onClick={
                        ()=>{
                        var keep = todayList.filter(fini=> fini === todo);
                        updateDoneChores([...choresDone, todo]);

                        }

                    }/>
                    <li>{todo}</li>

                </div>


                )



                })



                }
                
                {/* <div className="arrange">
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
                </div> */}
                                 
            </ul>
            <button className="arrange format" onClick={
                        (e)=>{
                        e.preventDefault();

                        if(inputValue){

                            var lowerWord = inputValue.toLowerCase();
                            var check = todayList.some(today=> today.toLowerCase()=== lowerWord);
                            
                            if(check){

                            alert("It already exist");
                            updateInput("");
                            return;




                            }
                            updateTodayList([...todayList, inputValue]);
                            updateInput("");





                        }


                        }


                    } >
                    <div className="plus"><FaPlus size={20} /></div>
                    <button className="btn">Add Item</button>
                </button>              
            <hr/>
            <div className="complete">
                <h4>Completed</h4>
                <MdDeleteOutline  size={20}/>
          
                
            </div>
            <ul className="secondList">
                    {
                      choresDone.map((moveDown, index)=>{
                        
                       return(

                        <div className="arrange" key={index}>
                            <div className="circle"/>
                            <li>{moveDown}</li>
                        </div>



                       )



                      })




                    }
                    
                        
                        


                </ul>

       </div>
    
            
      
       <hr/>
    </div>




   </div>




 )




}