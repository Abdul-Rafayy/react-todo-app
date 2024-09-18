function TodoInput ({onChange,onClick,value}){
    
    return(
        <>
        <div className='my-3'>
        <input onChange={onChange} value={value} id="input" className='border rounded-sm h-10 text-2xl' type="text" placeholder='Add Todo...' />
        <button onClick={onClick} disabled = {value === ""} style={{backgroundColor : value === "" && "gray"}} className='p-2 my-2 ml-2 rounded-md bg-green-400 text-xl hover:bg-black hover:text-green-400'>Add</button>
      </div>
      </>
    )
}

export default TodoInput