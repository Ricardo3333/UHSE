import { Button, TextField } from '@mui/material';
import '../assets/index.css';
import contatos from '../assets/todas.png';




function Contatos(){
    return (

    
    <>  
        <div>
            <img src={contatos}/>
        </div>

        <div className='form'>
        <TextField id="outlined-basic" label="nome" variant="outlined" />
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField
          id="outlined-multiline-static"
          label="Mensagem"
          multiline
          rows={4}
        />
        <Button variant="contained">enviar</Button>

        </div>



    




    </>


    
    
    )
} 

export default Contatos;