import { User } from "../types";
import "./UserCard.css"

interface UserProps {
  user: User;
}

const userCard = (props: UserProps) => (
  <div className="user-card">
    <h2>{props.user.name}</h2>
    <p>{props.user.age}</p>
    <p
      className={
        props.user.isOnline ? "user-card--online" : "user-card--offline"
      }
    >
      {props.user.isOnline ? "Online" : "Offline"}
    </p>
  </div>
);

export default userCard;
