import React from 'react';
import AuthorInterface from './components/author-interface';
import GraphComponent from './components/graphComponent';
import './App.css';

function App() {
 const [projekt, setProjekt]= React.useState("");
 const [unterProjekt, setUnterProjekt]= React.useState("");
 const [pm, setPm]= React.useState("");
 const [version, setVersion]=React.useState("");
 const [datum, setDatum]=React.useState(new Date())
 const [qty, setQty]= React.useState();
//  projekt, unterProjekt,pm, version, datum, qty

  // React.useEffect(()=>{
  //   let data;
  //   data=localStorage.getItem("projektObjekt");
  //   data=JSON.parse(data)
  //   setProjekt(data.projekt)
  //   setUnterProjekt(data.unterProjekt)
  //   setPm(data.printMedien)
  //   setDatum(data.versandDatum)
  //   setQty(data.stückZahl)
  //   setVersion(data.version)
  // },[projekt, unterProjekt,pm, version, datum, qty])

 
  return (
    <div className="App">
      <div className="App-header">
        <AuthorInterface/>
        '<h3 className='text'>{projekt}</h3>
        <h3 className='text'>{unterProjekt}</h3>
        {/* <h3 className='text'>{datum.toLocaleDateString()}</h3> */}
        <h3 className='text'>{pm}</h3>
        <h3 className='text'>{version}</h3>
        <h3 className='text'>{qty}</h3>'
        <GraphComponent />
      </div>
    </div>
  );
}

export default App;
