
import React,{useState} from 'react'
import  './App.css'

export default function App() {

const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3,8)}`

  const[input,setInput]=useState('')
  const[todos,setToDos]=useState([
    {
              id: UID(),
              text: "walk the dog0",
              col: 0,
              isSelected:true
          },
          {
              id: UID(),
              text: "fead the cat1",
              col: 1,
              isSelected:true
          }
    

  ])

 

  function randomNumber(){
    return Math.floor(Math.random() * 2);
}


  const addItem = () => {
    if(!input) alert("plese fill input")
    let newItem={
      id: UID(),
      text:input.value,
      col:randomNumber(),
       isSelected:false
  
  
  }
  
    
  let newToDos=[...todos]
  console.log(newToDos)
  newToDos.push(newItem)

   setToDos [newToDos] 
   setInput("")
   
   

}


  return (
    
    <div>



<body>
    <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..."  value={input}  onChange={(event)=>setInput(event.target.value)}/  >
        <span  className="addBtn" onClick={addItem}>Add</span>
      </div>
      
     <div className="parentul">
      <ul id="myUL" >

       
        {
        
          
        
        
        todos.map((todo)=>{
         
          if(todo.col==1){
            
          return <li className='listItem'>{todo.text}</li>

          }
        

        })
      }

      </ul>
      <ul id="mytwoUl" >
       

{
          
        
          todos.map((todo)=>{
            if(todo.col==0){
              
            return <li className='listItem'>{todo.text}</li>
  
            }
          
  
          })
        }
      </ul>
     </div>

     <div className="btn">
      <button className="addBtn" id="rightBtn">MoveRight</button>
      <button className="addBtn" id="leftBtn">MoveLeft</button>
      <button className="addBtn" id="deleteBtn">Delete</button>
     </div>

    
</body>



    </div>
  )
}

