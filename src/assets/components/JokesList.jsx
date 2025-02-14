
function JokeList(props){
    if (props.joke)
            return(
                <div className="m-auto mb-1.5 flex flex-col border-2 border-b-blue-700 bg-amber-200 max-w-[360px] min-h-auto">
                   <p>- {props.joke}</p>
                   <p>- {props.answer}</p>
                </div>
    )
    
        return(<div className="m-auto mb-1.5 flex flex-col border-2 border-b-blue-700 bg-amber-200 max-w-[360px] min-h-auto">
               <p className="text-red-700">- Нет вопроса</p>
               <p>- {props.answer}</p>
            </div>
    )

}
export default JokeList