import Link from "next/link";
import Image from "next/image";

export default function ProductPage(props) {
    return(
        <div className="container">
            <div className="pt-5">
                <div className="row g-3">
                    <div className="col-md-5 col-lg-5 order-md-first bg-light">            
                        {props.information.images.map((imageUrl) => {
                            let imagePath = imageUrl;
                            if (!imageUrl.includes('on-line')) { imagePath = '/images/under-construction.jpg' }
                            return(<img key={imagePath} className="img-fluid" alt="Product image" src={imagePath} />);                            
                        })}
                    </div>
                    <div className="col-md-7 col-lg-7 ps-md-3 ps-lg-5">
                        <h1 className="mb-0 h4"> { props.information.title } </h1>
                        <br />
                        <strong> Código: { props.information.code } </strong>
                        <hr /><br />
                        <p> { props.information.description.replaceAll('###','') } </p>
                        <div className="border">
                            <div className="col border-bottom">
                                <div className="row p-3">
                                    <div className="col-6"> Precio </div>
                                    <div className="col-6 text-end"><span className="h5 fw-bold">S/. { props.information.pricePEN } </span></div>
                                    <div className="col-6">   </div>
                                    <div className="col-6 text-end"><span className="h5 fw-bold">$ { props.information.priceUSD } </span></div>
                                    <br /><br /><hr />
                                    <div className="col-6"> Stock </div>
                                    <div className="col-6 text-end"><span className="h5 fw-bold"> { props.information.stock } </span></div>
                                    <br /><br /><hr />
                                    <div className="col-6">   </div>
                                    <div className="col-6 text-end"><span className="h5"><Link href={props.information.url}>Más detalles</Link></span></div>
                                    <br /><br />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 mx-auto text-center">
                            <br /><br /><br />
                            <span><Image src="/icons8-whatsapp.gif" width={25} height={25} alt="Whatsapp icon"></Image> </span><Link className="lead text-success" href="https://web.whatsapp.com/">Consultas</Link><br /><br />
                            <span className="lead text-info"> <strong>Formas de pago:</strong> </span><br />
                            <span className="lead text-body-secondary"> - <Image src="/icons8-bank-64.png" width={25} height={25} alt="Bank icon"></Image> Transferencia bancaria </span><br />
                            <span className="lead text-body-secondary"> - <Image src="/icons8-credit-card.gif" width={25} height={25} alt="Card icon"></Image> </span><Link className="lead text-muted" href="https://www.izipay.pe/"> Tarjetas de crédito </Link><br />
                            <span className="lead text-warning"> - <Image src="/icons8-bitcoin.gif" width={25} height={25} alt="Bitcoin icon"></Image> Bitcoin, otras criptomonedas consultar </span><br />                        
                            <br /><br /><br /><br />
                            <span className="fw-lighter fs-6">Page icons by <Link href='https://icons8.com/'>Icons8</Link></span>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}


{/*
    _id: ObjectId("65154efb368e891a82ecae5b"),
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
*/}

{/*
WhatsApp icon by Icons8 | https://icons8.com/icon/BPvo4DAyjprS/whatsapp
*/}