import Chai from "./chai";
import Random from "./random";
function App() {
  let channel = 'from chai with  code';
  let fullname = () => {
    return 'surbhi shriwastva';
  }
  return (
    <div>
      <Chai />
      <h1>this is my first code</h1>
      <h2> hii i am learing react {fullname()}</h2>
      <Random></Random>
      <Random></Random>
      <Random></Random> <Random></Random>

    </div>
  )
}
export default App; 