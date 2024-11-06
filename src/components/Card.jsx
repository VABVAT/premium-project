function Card(props){
    return(
        <div className="w-306 h-395 grid grid-cols-12 grid grid-rows-12 rounded-2xl bg-white mr-8 mt-4 mb-4"> 
            <button className={`transform-all duration-500 rounded-2xl bg-black hover:bg-yellow-500 col-start-2 col-end-12 row-start-2 row-end-10`}>
            <img className="w-full h-full" src={props.im}  />
            </button>
            <div className="mt-2 col-start-2 col-end-12 row-start-10 poppins text-sm font-bold">
                {props.text}
                <br />
                <span className="text-xs">{props.price}</span>
            </div>
        </div>
    )
}
export default Card;