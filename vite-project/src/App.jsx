import data from "../src/data.json";
import Data from "./component/Data";
import './style.css'
function App() {
// console.log(data.length)
let content=null;
content= data.map((d,index)=>(<Data key={index} data={d}></Data>));
// console.log(d)

  return (
    <>
      <h1 className="cardHeader" >Mapping Data</h1>
      <div style={{display:'flex'}}>
    {content}
      </div>
    </>
  )
}

export default App
