import { useEffectEvent, useState,useEffect } from 'react'


import axios from 'axios'


function App() {

  const [name,setname]=useState("")
  
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  const[loginbutton,isloginbutton]=useState(true)



  function submit(e){
   e.preventDefault()

   const user={
    name,
     email,
    password
   
   }
   try {
   axios.post("http://localhost:3000/api/register",user)
   .then((data)=>{
    console.log(data)
   })
    
    
   } catch (error) {
    
   }
 
   



    


   console.log(user)




  }

   // useEffect(()=>{
  // axios.get("http://localhost:3000/api)
  // .then((data)=>{
    
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })


  // })


  


  

  return (
    <>
    <div>

      <form action="">

     <input onChange={(e)=>setname(e.target.value)} type="text" /> <br />
      
      <input type="email" onChange={(e)=>setemail(e.target.value)} /> <br />
      <input type="password" onChange={(e)=>setpassword(e.target.value)} /> <br />

      <button onClick={(e)=>submit(e)}>register</button>

      </form>
        
      <button >{loginbutton?"login":"register"}</button>




      
      
      </div>  


    </>
  )
}

export default App
