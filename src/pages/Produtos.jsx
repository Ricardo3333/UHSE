import '../assets/index.css';

import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';


function Produtos() {

    return (
        <>




            <Banner />




            <div className='principal'>
                <h1> UHSE! </h1>

                <h2> A UHSE foi criada em 2022 pelo Sr. João Velozo. </h2>
                <h2> Uma loja de Sexyshop virtual</h2>

            </div>

            <div className='mae-uhse'>




                <div className='segunda'>

                    <h2> O intuito da UHSE é ser inovadora nos seus produtos.</h2>
                    <h2>Com a intenção de atender casais que querem apimentar suas relações.</h2>

                </div>






                <div className='terceira'>
                    <h2>  Atendemos o estado de São Paulo, Centro, Zona sul, Leste e Oeste.     </h2>
                    <h2> Com agilidade nas entregas, saímos na frente de nossos concorrentes.</h2>


                </div>

            </div>


            <hr />

            <Footer />

        </>





    )
}

export default Produtos;