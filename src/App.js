import React from "react";
import "./style.css";

export default function App() {

  const[email,setEmail]=React.useState("");
  const[password,setPassword]=React.useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(`
    Email:${email}
    Password: ${password}
    `)
  }
  return (
   <form onSubmit={handleSubmit}>
     <h2>Login</h2>
     <div>
       Email:
       <label>
         <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       </label>
     </div>
     <div>
       <br/>
       Password:
       <label>
         <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
       </label>
     </div>
     <button>
       SUBMIT
     </button>
   </form>
  );
}
