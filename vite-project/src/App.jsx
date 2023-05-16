import data from "./data";
import Data from "./component/Data";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
function App() {
  // console.log(data.length)
  let content = null;
  //without generated unique id. just passing index as key property:
  // content= data.map((d,index)=>(<Data key={index} data={d}></Data>));

  //using generated unique id as key property:
  content = data.map(d => <Data key={uuidv4()} data={d} />);
  // console.log(d)

  return (
    <div>
      <h1 className="cardHeader">Mapping Data</h1>
      <div style={{ display: "flex" }}>
        {content}
      </div>
    </div>
  );
}

export default App;
