import { useState } from "react";
// import VideoPlayer from "./components/users/ReactComponent";
// import Counter  from "./components/counter/counter";
// import BMICalculator from "./components/BMI Calculator/BMICalculator";
// import UserList from "./components/UserList/UserList"
import Clock from './components/ClockApplication/clock'
// import "./App.css";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const changeState = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   return (
//     <div className="container">
//       {!isLoggedIn ? (
//         <button onClick={changeState} className="login-btn">
//           Login
//         </button>
//       ) : (
//         <button onClick={changeState} className="logout-btn">
//           Logout
//         </button>
//       )}

//       <VideoPlayer />
//     </div>
//   );
// };
function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <BMICalculator /> */}
      {/* <UserList/> */}
      <Clock/>
    </div>
  );
}

export default App;
