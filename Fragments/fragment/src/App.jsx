import FoodItems from "./components/foodItems";
import Errormsg from "./components/errormsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {

  return (
    <>
      <h1> Healthy food</h1>
      <FoodItems></FoodItems>
      <Errormsg></Errormsg>


    </>
  );
}
export default App;