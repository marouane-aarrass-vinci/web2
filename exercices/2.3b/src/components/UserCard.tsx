import { User } from "../types";

interface UserCardProps {
    user :User;
}

const userCard = (props:UserCardProps)=>(

    <div>
        <h2>{props.user.name}</h2>
        <p>Age : {props.user.age}</p>
    </div>

);

export default userCard