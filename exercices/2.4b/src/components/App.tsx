
import { User } from "../types";
import UserCard from "./UserCard";

const users:User[]=[
  { name: "John Doe", age: 25, isOnline: false },
  { name: "fode bangura", age: 22, isOnline: true },
  { name: "ronaldo", age: 30, isOnline: true },
]

const App= () =>(
  <>
  <h1>users</h1>
  {users.map((user,index)=>(
    <UserCard key={index} user={user}/>
  ))}
  </>
)
export default App;
