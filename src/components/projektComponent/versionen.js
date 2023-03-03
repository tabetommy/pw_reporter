import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

const Versionen=()=>{

    const [versionWerten, setVersionWerten]=useState([{ beleg:undefined,version: "", menge:undefined}]);

   const handleChange = (i, e) => {
    let neueVersionWerten = [...versionWerten];
    neueVersionWerten [i][e.target.name] = e.target.value;
    console.log(e.target.files)
    setVersionWerten(neueVersionWerten);
  }



    const hinzufügenHandler=(event)=>{
        event.preventDefault();
        setVersionWerten([...versionWerten, { beleg:undefined, version: "" , menge:undefined}])
    }

  return (
    <div className='main-con'>
        {versionWerten.map((version,index)=>(
             <div key={index} className='versionen-input'>
                <div className='beleg'>
                    <label htmlFor='beleg'>Upload</label><br/>                 
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden type="file" name='beleg'
                            value={version.beleg}  onChange={e => handleChange(index, e)} />
                            <AddIcon />
                        </IconButton>
                    {/* <input type="file" id="beleg" name="beleg" className='beleg-input'
                    value={versionWerte.beleg}  onChange={e => handleChange(index, e)}/> */}  
                </div>
                <div className='versionierung'>
                    <label htmlFor='version'>Versionierung</label><br/>
                    <input type="text" id="version" name="version" className='versionierung-input'
                    value={version.version}   onChange={e => handleChange(index, e)}/> 
                </div>
                <div className='versandmenge'>
                    <label htmlFor='menge'>Versandmenge</label><br/>
                    <input type="number" id="menge" name="menge" min="0" className='versandmenge-input' 
                    value={version.menge}   onChange={e => handleChange(index, e)}/> 
                </div>
            </div>
        ))}
        <Stack direction="row" spacing={2} onClick={hinzufügenHandler}>
            <Button variant="outlined" startIcon={<AddIcon />} >
                Hinzufügen
            </Button>
        </Stack>
    </div>
  );
}

export default Versionen;