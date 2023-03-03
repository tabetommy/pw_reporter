import React from 'react';
import Versionen from './versionen';


const Projekt=()=>{

  const [projectWerte, setProjekteWerte]= React.useState("");
  const [unterProjektWerte, setUnterProjektWerte]= React.useState("");

  const oberProjektOptionen=["Affinitätenbasierte Mailing Factory","Welcome Strecke","Dekorunde"];
  const unterProjektOptionen=["Ratenkredit", "Eigentümerkredit", "Stopschild-Mailing", "CBU ", "CB-GK "];

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  console.log(date)


  const projeKtWerteHandler=(event)=>{
    setProjekteWerte(event.target.value)
  }

  const unterProjektWerteHandler=(event)=>{
    setUnterProjektWerte(event.target.value)
  }

  return (
    <form>
      <div className='main-con'>
        <label htmlFor='ober-project' >Oberprojekt</label><br/>
        <input list="ober-projekt" 
        name="ober-projekt" 
        onChange={projeKtWerteHandler}
        placeholder="Bitte Oberprojekt eintragen oder auswählen"
        className='input'/>    
        <datalist id="ober-projekt">
            {oberProjektOptionen.map(option=><option key={option} value={option} /> )}
        </datalist><br/>
      </div>
      
      <div className='main-con'>
        <label htmlFor='unter-projekt'>Unterprojekt</label><br/>
        <input list="unter-projekt" 
        name="unter-projekt" 
        onChange={unterProjektWerteHandler}
        placeholder="Bitte Unterprojekt eintragen oder auswählen"
        className='input'/>    
        <datalist id="unter-projekt">
          {unterProjektOptionen.map(option=><option key={option} value={option} /> )}  
        </datalist><br/>
      </div>
      

      <div className='main-con pal-medium'>
        <div className='pal'>
          <label htmlFor='pal'>PAL</label><br/>
          <input type="date" name="pal" id='pal' className='pal-input' maxDate={date}/>
        </div>
        <div className='medium'>
          <label htmlFor='medium'>Medium</label><br/>
          <input type="text" name="medium" id='medium' className='medium-input' placeholder='Bitte Medium eintragen'/>
        </div>
      </div>

      <Versionen />

      <div className='main-con textarea-con'>
        <label htmlFor='kommentar'>Kommentar</label><br/>
        <textarea cols="30" rows="10" name="kommentar"
          id="kommentar" className="cm-style" placeholder='Hinweise zum Projekte eintragen'></textarea>
      </div>

     <div className='main-con  gesamtmenge'>
        <label htmlFor='gesamt-menge'>Gesamtaussendemenge</label><br/>
        <input name='gesamt-menge' id='gesamt-menge' 
        type="number" min="0" /><br/>
     </div>
      
      <div className='main-con btn-con'>
        <button className='pr-speichern'>Projekt speichern</button>
        <button className='verwerfen'>Verwerfen</button>
      </div>
    </form>
    
  );
}

export default Projekt;