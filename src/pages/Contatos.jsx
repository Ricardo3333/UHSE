import instagram from '../assets/imagem_contatos/instagram.png';
import whatsaap from '../assets/imagem_contatos/whatsapp.png';



import '../assets/index.css';
import { Button, TextField } from '@mui/material';

import email from '../assets/imagem_contatos/email.jpeg';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';






function Contatos() {
  return (


    <>
        <Banner/>

        
      <div className='logo'>

        <div className='align-contatos'>

          <img src={instagram} />

          <h2> Siga a gente em nosso instagram:</h2>
          <h2>UHSESEXSHOP</h2>
        </div>

        <div className='align-contatos'>
          <img src={email} />

          <h2>Entre em contato por E-mail:</h2>
          <h2>uhse@delicia.com.br</h2>


        </div>

        <div className='align-contatos'>

          <img src={whatsaap} />
          <h2> Chame em nosso Whatsaap:</h2>
          <h2>  11-97070-7070</h2>

        </div>
      </div>



      <div className='reta'>
        <hr />



        <div className='ideia'>

          <div className='volta'>

            <div className='form'>

              <h2> Entre em contato com a nossa equipe </h2>
              <TextField id="outlined-basic" label="Nome" variant="outlined" />
              <TextField id="outlined-basic" label="E-mail" variant="outlined" />
              <TextField id="outlined-basic" label="Mensagem" variant="outlined" />

              <Button variant="contained">Enviar</Button>

            </div>

          </div>

        </div>


      </div>

      <hr />

      <Footer/>


    </>




  )
}

export default Contatos;