
import './PracticeAgain.css'
import { useState } from 'react';

export const PracticeAgain = ()=>{

    const [movies, updateMovies] =useState( ["Inception", "Interstellar", "The Matrix"]);
    const [inputValue, updateValue] = useState('');
    const [watchedMovies, updateWatched] = useState([]);
    console.log(watchedMovies);
    return(
       <div className="container">
        <h3>Favorite Movies</h3>
        <input type="text" className="inp" onChange={
          (e)=>{

            updateValue(e.target.value);
          }

        }/>
        <ul className="list">
            {

            movies.map((movie,index)=>{

                return(
                  <div className="innerSecond">
                        <input type="checkbox" className="smallBox"  onClick={
                        (e)=>{
                            e.preventDefault(); 
                             var keep =  movies.filter(movy => movy !== movie);
                             updateMovies(keep);

                          
                            updateWatched([...watchedMovies, movie]); 
                        }

                        }/>
                        <li key={index}>{movie}</li>
                  </div>


                )


            })


            }
            

           
        </ul>
        <h4>Completed Movies</h4>
        <ul className="secondList">

          {

            watchedMovies.map((item, index)=>{

               return(
                <div className="innerSecond" key={index}>
                  <input type="checkbox" onClick ={(e)=>{
                      e.preventDefault(); 
                      updateMovies ([...movies,item ]);
                     var box= watchedMovies.filter((watched)=> watched!= item );
                     updateWatched(box);

                    }
                              
                  }/>
                  <li >{item}</li>
               </div>


               )
               


            })


          }


        </ul>



    <button className="butt" onClick={
    ()=>{
      if(inputValue){

        var input = inputValue.toLowerCase();
        var checkExist = movies.some((movie)=>movie.toLocaleLowerCase()=== input);

        if(checkExist){
        alert("the movie already exists");
        updateValue("");
        return;


        }
        updateMovies([...movies,inputValue]);
        updateValue("");

      }


    }


    } >
      Add a Movie
     </button>


       </div>



    )



}