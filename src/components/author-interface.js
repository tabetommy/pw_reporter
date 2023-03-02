import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  


 const AuthorInterface=()=>{
    const [open, setOpen] = useState(false);
    const [projekt, setProjekt]= useState("");
    const [unterProjekt, setUnterProjekt]= useState("");
    const [versandDatum, setVersandDatum]= useState(new Date());
    const [version, setVersion]= useState("")
    const [printMedien, setPrintMedien] = useState("");
    const [stückZahl, setStückZahl]= useState(0);

    //handle modal open and close
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //handle form value changes
    const sentDateChangeHandler=(event)=>{
        setVersandDatum(event.target.value);
    }

    const printMediaChangeHandler=(event)=>{
        setPrintMedien(event.target.value);
    }

    const quantityChangeHandler=(event)=>{
        setStückZahl(event.target.value);
    }

    const projectChangeHandler=(event)=>{
        setProjekt(event.target.value)
    }

    const subProjectChangeHandler=(event)=>{
        setUnterProjekt(event.target.value)
    }

    const versionChangeHandler=(event)=>{
        setVersion(event.target.value)
    }


    const projectObject={
        projekt:projekt,
        unterProjekt:unterProjekt,
        versandDatum:versandDatum,
        printMedien:printMedien,
        stückZahl:stückZahl
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        localStorage.setItem("projektObjekt",JSON.stringify(projectObject));
    }

    return(
        <>
        <Button variant="contained" onClick={handleOpen}>Fill in Data</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <form>
                    <label htmlFor="projeckt">Projekt:</label>
                    <input type="text" id="projekt" name="projekt"  onChange={projectChangeHandler}
                    value={projekt}></input><br/>
                    <label htmlFor="unter-projeckt">Unterprojekt:</label>
                    <input type="text" id="unter-projekt" name="unter-projekt"  onChange={subProjectChangeHandler}
                    value={unterProjekt}></input><br/>
                    <label htmlFor="Versand_datum">Versanddatum:</label>
                    <input type="date" id="Versand_datum" name="Versand_datum" 
                    onChange={sentDateChangeHandler}
                    value={versandDatum}></input><br/>
                    <label htmlFor="print-medien">Print-Medien:</label>
                    <select name="print-medien" id="print-medien" 
                    onChange={printMediaChangeHandler}
                    value={printMedien}>
                        <option value="flyerOne">PM-1</option>
                        <option value="flyerTwo">PM-2</option>
                        <option value="flyerThree">PM-3</option>
                        <option value="flyerFour">PM-4</option>
                    </select><br/>
                    <label htmlFor="version">Version:</label>
                    <input type="text" id="version" name="version"  onChange={versionChangeHandler}
                    value={version}></input><br/>
                    <label htmlFor="Stück-zahl">Stückzahl:</label>
                    <input type="number" id="Stück-zahl" 
                        name="Stück-zahl" value={stückZahl} 
                        onChange={quantityChangeHandler}
                        min="0"></input><br/>
                    <Button variant="contained" color="success" className='graph-container' onClick={submitHandler}>
                        Submit
                    </Button>
                </form> 
            </Box>
        </Modal>
        </>
        
        
    )
 }

 export default AuthorInterface