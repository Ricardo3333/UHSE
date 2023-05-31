import './index.css';
function CardImage(props) {
    return (
        <div className='product-single'>

            <img src={props.image} />

            <div>
                <h2> {props.title} </h2>
            </div>
        </div>
    )
}

export default CardImage;