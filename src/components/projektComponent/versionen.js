import React, {useState} from 'react';

const Versionen=()=>{

    const [versionWerten,setVersionWerten]=useState([
    {
        beleg:"",
        version:"",
        menge:undefined,
    }
])

// const [towns, setTowns]=React.useState(["Buea","Tiko"])

let handleChange = (i, e) => {
    let neueVersionWerten = [...versionWerten];
    neueVersionWerten [i][e.target.name] = e.target.value;
    setVersionWerten(neueVersionWerten);
  }

const hinzufügenHandler=(event)=>{
    event.preventDefault();
    setVersionWerten([...versionWerten, { beleg: "", version: "" , menge:undefined}])
}


  return (
    <div>
        {versionWerten.map((versionWerte,index)=>(
             <div key={index}>
                <div>
                    <label htmlFor='beleg'>Upload</label><br/>
                    <input type="text" id="beleg" name="beleg" 
                    value={versionWerte.beleg}  onChange={e => handleChange(index, e)}/>
                </div>
                <div>
                    <label htmlFor='versionierung'>Versionierung</label><br/>
                    <input type="text" id="versionierung" name="versionierung" 
                    value={versionWerte.version}  onChange={e => handleChange(index, e)}/> 
                </div>
                <div>
                    <label htmlFor='versandmenge'>Versandmenge</label><br/>
                    <input type="number" id="versandmenge" name="versandmenge" min="0"  
                    value={versionWerte.menge}  onChange={e => handleChange(index, e)}/> 
                </div>
            </div>
        ))}
        {/* {towns.map((town, index)=><h1 key={index}>{town}</h1>)} */}
        <button onClick={hinzufügenHandler}>Version hinzufügen</button>
    </div>
  );
}

export default Versionen;