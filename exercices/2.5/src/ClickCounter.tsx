import { useState } from "react";

interface ClickCounterTitle {
  title: string;
  message:string;
  messageClick:string;
}

function ClickCounter({ title,message,messageClick}: ClickCounterTitle) {
  const [count, setCount] = useState(0);
  const [isOnCount,setOnCount] =useState(false);

  return (
    <div>
      {title && <p>{title}</p>}
      {isOnCount && <p>{messageClick}</p>}
      <button onClick={() => setCount((count) => count + 1)}
      
        onMouseEnter={() =>setOnCount(true)}
        onMouseLeave ={() =>setOnCount(false)}
        >
          count is {count}
      </button>
       {count>=10 && <p>{message}</p>}
    </div>
  );
}

export default ClickCounter;
