import ProductModal from '../product/productModal';

export default function Card(props) {    
    let imagePath = props.product.images[0];
    const fallbackImagePath = '/images/under-construction.jpg';
    if (
        !props.product.images[0].includes('on-line') &&
        !props.product.images[0].includes('carrusel')
    ) { imagePath = '/images/under-construction.jpg' }

    return(
        <div className="col">
            <div className="card shadow-sm" data-bs-toggle="modal" data-bs-target={"#"+props.product.code}>
                <img 
                    className="img-fluid" alt="Product image" src={fallbackImagePath}
                    onError={(event) => event.currentTarget.src = fallbackImagePath} 
                />
                <div className="card-body">
                    <p className="card-text">
                        <span className="text-info text-decoration-none">{ props.product.title }</span>
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                            <h5> S/. { props.product.pricePEN } </h5>
                    </div>
                </div>                
            </div>                           
            <div className="modal fade" id={props.product.code} tabIndex="-1" aria-labelledby={props.product.code+"Label"} aria-hidden="true">
                <ProductModal information={props.product}/>
            </div>         
        </div>
        
    );
}