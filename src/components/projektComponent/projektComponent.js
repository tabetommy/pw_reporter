import React from 'react';
import Versionen from './versionen';


const Projekt=()=>{

  const [projectWerte, setProjekteWerte]= React.useState("");
  const [unterProjektWerte, setUnterProjektWerte]= React.useState("");

  const oberProjektOptionen=["Affinitätenbasierte Mailing Factory","Welcome Strecke","Dekorunde"];
  const unterProjektOptionen=["Ratenkredit", "Eigentümerkredit", "Stopschild-Mailing", "CBU ", "CB-GK "];


  const projeKtWerteHandler=(event)=>{
    setProjekteWerte(event.target.value)
  }

  const unterProjektWerteHandler=(event)=>{
    setUnterProjektWerte(event.target.value)
  }

  return (
    <form>
      <label htmlFor='ober-project' >Oberprojekt</label><br/>
      <input list="ober-projekt" 
      name="ober-projekt" 
      onChange={projeKtWerteHandler}
      placeholder="Bitte Oberprojekt eintragen oder auswählen"/>    
      <datalist id="ober-projekt">
          {oberProjektOptionen.map(option=><option key={option} value={option} /> )}
      </datalist><br/>

      <label htmlFor='unter-projekt'>Unterprojekt</label><br/>
      <input list="unter-projekt" 
      name="unter-projekt" 
      onChange={unterProjektWerteHandler}
      placeholder="Bitte Unterprojekt eintragen oder auswählen"/>    
      <datalist id="unter-projekt">
         {unterProjektOptionen.map(option=><option key={option} value={option} /> )}  
      </datalist><br/>

      <div>
        <div>
          <label htmlFor='pal'>PAL</label><br/>
          <input type="date" name="pal" id='pal'/>
        </div>
        <div>
          <label htmlFor='medium'>Medium</label><br/>
          <input type="text" name="medium" id='medium'/>
        </div>
      </div><br/>
      <Versionen />
      <label htmlFor='kommentar'>Kommentar</label><br/>
      <textarea 
        name="kommentar"
        id="kommentar"
        rows={5}
        cols={50}
        className="cm-style"
      /><br/>
      <label htmlFor='gesamt-menge'>Gesamtaussendemenge</label><br/>
      <input name='gesamt-menge' id='gesamt-menge' 
      type="number" min="0" /><br/>
      <div>
        <span>Projekt speichern</span>
        <span>Verwerfen</span>
      </div>

    </form>
    
  );
}

export default Projekt;