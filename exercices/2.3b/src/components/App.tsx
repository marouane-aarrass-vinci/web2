import { User } from "../types";
import Footer from "./Footer";
import PageTitle from "./PageTitle";
import UserCard from "./UserCard";
const App = () => {


const users:User[]=[
    {name:"Fode",age:19},
    {name:"Alice",age:23},
    {name:"Foden",age:26},
];


return(
<div>
    <PageTitle title="salut"/>
    {users.map((user) =>(
        <UserCard user ={user}/>
    
))} 
    <Footer text = " jsp"/>
</div>
);
};


  

export default App;
