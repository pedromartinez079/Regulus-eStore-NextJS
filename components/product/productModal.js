import ProductPage from "./productdetail";
import Loading from "../ui/loading";

export default function ProductModal(props) {
    const data = props.information;
    //console.log(data);    
    
    if (!data || !data.title) { 
        return(<div className="modal-dialog">
                    <div className="modal-content">
                        <button className="btn btn-outline-primary" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span role="status">Loading...</span>
                        </button>
                    </div>
                </div>);
    }    

    return(        
            <div className="modal-dialog modal-dialog-centered modal-fullscreen modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ProductPage information={data}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>        
    );
}



{/*const dummyProduct = {
        _id: "ObjectId(65154efb368e891a82ecae5b)",
        productLine: 'Notebooks',
        code: 'NBLEN82H8039CLM',
        title: 'Notebook Lenovo IdeaPad 3 15ITL6 15.6" FHD TN Core i7-1165G7 2.8/4.7GHz, 12GB DDR4-3200MHz',
        stock: '>100 und',
        pricePEN: 2495,
        priceUSD: 655,
        description: 'Notebook Lenovo IdeaPad 3 15ITL6 15.6" FHD TN Core i7-1165G7 2.8/4.7GHz, 12GB DDR4-3200MHz ### 512GB SSD M.2 2242 PCIe 3.0 x4 NVMe, Video Integrado Intel Iris Xe Graphics, Audio HD + Realtek ALC3287 Codec / Stereo Speakers 1.5W x2 / Dolby Audio, SD Card Reader, Wireless LAN Wi-Fi 6 802.11ax (2x2) + Bluetooth 5.1, Camara Web HD 720p con obturador de Privacidad + Microfono 2x Array, Teclado Non-Backlit en español (LA), Bateria integrada de 45Wh, Color Arctic Grey (Gris). ### No Incluye Sistema Operativo.',
        url: 'https://www.deltron.com.pe/modulos/productos/items/producto.php?item_number=NBLEN82H8039CLM',
        images: [
          'https://imagenes.deltron.com.pe/images/productos/on-line/items/large/nb/le/nblen82h8039clm.jpg',
          'https://imagenes.deltron.com.pe/images/productos/on-line/items/large/nb/le/nblen82h8039clm_1.jpg',
          'https://imagenes.deltron.com.pe/images/productos/on-line/items/large/nb/le/nblen82h8039clm_2.jpg'
        ]
    };*/}