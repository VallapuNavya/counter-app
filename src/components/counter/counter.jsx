import React,{ useState,useEffect } from "react";

const Counter=()=>{
  const [count, setCount] = useState(0);
  // const [count2, setCount2]=useState(5);

  const increment=()=>{
    setCount(count+1);
    setCount2(count2+1);
  };
  const decrement=()=>{
    setCount(count-1);
    setCount2(count2-1);
  };
  useEffect(() => {
    // Update browser tab title when count changes
    document.title = `Counter: ${count}`;

    // Example API call
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => console.log(data));
  }, [count]);   // runs only when count changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>Counter:{count}</h2>
      {/* <h2>Counter2:{count2}</h2> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
      <button onClick={() => setCount(count + 2)} style={{ marginLeft: "10px" }}>
        Increase By Two
      </button> */}
    </div>
  );
}

export default Counter;
