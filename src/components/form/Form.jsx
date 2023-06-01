import { Button, TextField } from "@mui/material";
import "./index.css";
function FormContato() {
    return (
        <div className='form'>

            <h2> Entre em contato com a nossa equipe </h2>
            <TextField id="outlined-basic" label="Nome" variant="outlined" />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField id="outlined-basic" label="Mensagem" variant="outlined" />

            <Button variant="contained">Enviar</Button>

        </div>
    )
}

export default FormContato;