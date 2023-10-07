import Card from "./card";
import Sorter from "../ui/sorter";

export default function Gallery(props) {
    let url = `/category/${props.category}`;
    if (props.category === 'Productos') { url = '/' }
    
    return(
        <div className="album py-5 bg-light">                
            <div className="container">
                <div className="pb-3 h5 text-primary"><strong>{props.category}</strong></div>
                <Sorter urlbase={url}/>
                <hr />
                <br />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
                    {props.products.map((product) => (
                        <Card key={product.code} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    );
}