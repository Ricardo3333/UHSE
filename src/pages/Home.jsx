
import '../assets/index.css';

import anel from '../assets/imagem_home/anel.png'
import anel_p from '../assets/imagem_home/anel_p.png'
import capa from '../assets/imagem_home/capa.png'
import kit from '../assets/imagem_home/kit.png'
import penis from '../assets/imagem_home/penis.png'
import vagina from '../assets/imagem_home/vagina.png'
import vibra from '../assets/imagem_home/vibra.png'
import mini_vibrador from '../assets/imagem_home/mini_vibrador.png'

import gel from '../assets/imagem_segunda/gel.png'
import kmede from '../assets/imagem_segunda/kmede.png'
import kuloco from '../assets/imagem_segunda/kuloco.png'
import lubri from '../assets/imagem_segunda/lubri.png'
import pimen from '../assets/imagem_segunda/pimen.png'
import pomada from '../assets/imagem_segunda/pomada.png'
import touro from '../assets/imagem_segunda/touro.png'
import vaca from '../assets/imagem_segunda/vaca.png'
import silene from '../assets/imagem_home/silene.gif'


import Carousel from 'react-material-ui-carousel'
import { Button, TextField } from '@mui/material';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';
import CardImage from '../components/cardImage/CardImage';



function Home() {
    return (

        <>

            <div className='mae'>

                <Banner

                />
                <div className='silene'>
                    <img src={silene} />
                </div>

                <div className='texto-inicial'>

                    <h1>

                        UHSE!

                    </h1>


                    <h2>

                        Seu SEXY-SHOP virtual!
                    </h2>

                </div>


                <div className='imagem_inicial'>

                    <Carousel className='corrosel'>

                        <div className='products'>
                            <CardImage image={anel} title="Anel Peniano" />
                            <CardImage image={anel_p} title="Anel Vibrador" />
                            <CardImage image={capa} title="Capa Penina" />
                            <CardImage image={mini_vibrador} title="Mini Vibrador" />
                        </div>

                        <div className='products'>
                            <CardImage image={penis} title="Penis de Borracha" />
                            <CardImage image={vibra} title="Vibrador" />
                            <CardImage image={vagina} title="Vagina de Borracha" />
                            <CardImage image={kit} title="Kit Intimo" />
                        </div>

                    </Carousel>

                </div>

                {/* -------------------------------------------------- */}

                <div className='imagem_segunda'>

                    <Carousel className='corrosel'>

                        <div className='products'>
                            <CardImage image={touro} title="Tesão de Touro" />
                            <CardImage image={vaca} title="Tesão de Vaca" />
                            <CardImage image={pomada} title="Pomada Senssibilizante" />
                            <CardImage image={pimen} title="Gel de Pimenta" />
                        </div>

                        <div className='products'>
                            <CardImage image={lubri} title="Lubrificante de Morango" />
                            <CardImage image={kuloco} title="Kuloco Gel" />
                            <CardImage image={kmede} title="Lubrificante" />
                            <CardImage image={gel} title="Gel Íntimo" />
                        </div>

                    </Carousel>




                </div>


            </div>





            <br /><br />




            <div className='linha'>

                <hr />
                <div className='final'>

                    <div className='novidades'>



                        <h2>  Receba nossas novidades em primeira mão. </h2>

                        <TextField id="outlined-basic" label="Nome" variant="outlined" />
                        <TextField id="outlined-basic" label="E-mail" variant="outlined" />


                        <Button variant="contained">enviar</Button>

                    </div>

                </div>

            </div>

            <hr />

            <Footer />

        </>


    )
}



export default Home;