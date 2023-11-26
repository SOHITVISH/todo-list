import React from 'react'
import { useState } from 'react'
const Todolist = () => {
    const [Activity, setActivity] =useState('');
    const[listData, setlistData] = useState([]);
   function addActivity (){
    /* setlistData([...listData,Activity])
    console.log(listData) */
setlistData((listData)=>{
    const updatedList = [...listData,Activity]
    console.log(updatedList)
    setActivity('')
    return updatedList
})
   }
  return (
   <>
   <div className='container'><div className='header'>Todo List</div>
   <input type="text" placeholder='Add Activity'value={Activity} onChange={(e)=>setActivity(e.target.value)}/>
  <button onClick={addActivity}>Add Me {")"}</button>
  <p className='list-heading'>Lists🫠</p>
  {
    listData!=[] && listData.map((data, i)=>{
        return(
            <div className='list' key={i}>
            <div className='list-data'>{data}</div>
            <button className='delete-button' onClick={()=>setlistData(listData.filter((item)=>item!==data))}>Delete</button>
            </div>
        )
        
    })
  }
   </div>
   </>
  )
}

export default Todolist