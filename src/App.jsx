import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Interest from "./components/Interest";

function App() {
  const [active, setActive] = useState(0); 
  const[data,setdata]=useState({
    Name:"Yogesh",
    Mobile:0,
    interest:["Chess","Music","Learn New Tech"],
    theme:""
  })

  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Setting",
      component: Setting,
    },
  ];
  const handlesubmit=(data)=>{
        console.log(data);
        
  }

  const ActiveComponent = tabs[active].component;

  return (
    <>
      <div className="border border-black w-full  flex">
        
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="border max-w-fit bg-amber-300 max-h-fit p-2 m-2 cursor-pointer"
            onClick={() => setActive(index)} 
          >
            {tab.name}
          </div>
        ))}
      </div>

      <div className="border border-black w-full max-h-fit p-10 mb-10">
       
        <ActiveComponent data={data} setdata={setdata} />
      </div>
      <div className="flex mx-auto">
      {
        ActiveComponent === Setting && <button className="bg-blue-400 min-w-fit min-h-fit p-2 text-white rounded-lg mx-auto" onClick={()=>handlesubmit(data)}>Submit</button>
      }
      </div>
      
    </>
  );
}

export default App;
