import React,{useState} from 'react';
import  './App.css'

const App = () => {

const UID = () => `${new Date().getTime()}${String(Math.random()).slice(3,8)}`
const[inputValue,setInputValue]=useState('')

const[todos,setToDos]=useState([
  {
            id: UID(),
            text: "walk the dog0",
            col: 0,
            isSelected:false
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

const addItem=()=>{
  if(!inputValue) alert("plese fill input")
  else{

    let newItem={
      id: UID(),
      text:inputValue,
      col:randomNumber(),
       isSelected:false
  
  
  }
   let arr=[...todos]
   arr.push(newItem)
   setToDos(arr)
 setInputValue("")

    
  }
 



}


function onSelect(id){

  todos.forEach(item=>{
    if(item.id==id){
     
       item.isSelected=!item.isSelected
    }

    setToDos([...todos])

  })
 


}

function moveRightSelectItem(){

  const temp = []

    todos.forEach(item => {
        if (item.isSelected && item.col==1) temp.push(item)
    })

    temp.forEach((i,index)=>{

      i.isSelected=false
  
      setToDos([...todos,temp])
       i.col= 0
    

  })


}


function moveLeftSelectItem(){


  const temp = []

  todos.forEach(item => {
      if (item.isSelected && item.col==0) temp.push(item)
  })

  temp.forEach((i,index)=>{

    i.isSelected=true

    setToDos([...todos,temp])
     i.col= 1
  

})

}

function deleteSelectItem(){
  const temp = []

  todos.forEach(item => {
      if (item.isSelected) temp.push(item.id)
  })

 
  temp.forEach(id => {
      const index = todos.findIndex(item => item.id == id)
      todos.splice(index, 1)
  })
  setToDos([...todos])

}

  return (
    <div>

<body>
    <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..."  value={inputValue}   onChange={(e)=>setInputValue(e.target.value)}/>
        <span  className="addBtn"  onClick={addItem}>Add</span>
      </div>
      
     <div className="parentul">
      <ul id="myUL" >
       
        
      {
        
        
        
        todos.map((todo)=>{
          
          if(todo.col==1){
          
          return <li className={`listItem  ${todo.isSelected ? 'isSelected' : ''} `} key={todo.id}   onClick={()=>onSelect(todo.id)}>{todo.text}</li>

          }
        

        })
      }
        
      </ul>
      <ul id="mytwoUl" >

        
{
          
        
          todos.map((todo)=>{
            if(todo.col==0){
              return <li className={`listItem  ${todo.isSelected ? 'isSelected' : ''} `} key={todo.id}   onClick={()=>onSelect(todo.id)}>{todo.text}</li>
  
            }
          
  
          })
        }


       
      </ul>
     </div>

     <div className="btn">
      <button className="addBtn"   onClick={moveRightSelectItem} id="rightBtn">MoveRight</button>
      <button className="addBtn"   onClick={moveLeftSelectItem} id="leftBtn">MoveLeft</button>
      <button className="addBtn"    onClick={deleteSelectItem} id="deleteBtn">Delete</button>
     </div>

    
</body>

      
    </div>
  );
}

export default App;
