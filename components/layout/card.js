import Link from 'next/link';
import Image from 'next/image'

import ProductModal from '../product/productModal';

export default function Card(props) {    
    let imagePath = props.product.images[0];
    if (!props.product.images[0].includes('on-line')) { imagePath = '/images/under-construction.jpg' }

    return(
        <div className="col">
            <div className="card shadow-sm" data-bs-toggle="modal" data-bs-target={"#"+props.product.code}>
                <img className="img-fluid" alt="Product image" src={imagePath} />
                {/*<Image src={imagePath} alt="Product image" width={500} height={500} />*/}
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