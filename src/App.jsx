import JokeList from "./assets/components/JokesList"

import jokesData from "./assets/components/jokesdata"

function App() {
const jokeComponents = jokesData.map(elem=>(<JokeList key= {elem.id} joke = {elem.joke} answer={elem.answer} />))

console.log({jokeComponents})

return(
  <div>
    {jokeComponents}
  </div>
)


    
      
       

     
      
        
    
  
}

export default App
