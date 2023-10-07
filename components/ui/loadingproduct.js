import Link from "next/link";

export default function LoadingProduct() {
    const placeholders = [0];
    return(
        <div className="container" aria-hidden="true">                          
            <div className="pt-5">          
                <div className="row g-3">
                    {placeholders.map((item) => (
                        <div key={item} className="card m-3" aria-hidden="true">
                            <div className="row g-3">
                                <div className="col-md-5 col-lg-5 order-md-first bg-light">
                                        <img src="/images/icons8-rectangle-96.png" className="card-img-top" alt="Loading" />
                                    </div>
                                <div className="col-md-7 col-lg-7 ps-md-3 ps-lg-5">
                                    <div className="card-body">
                                        <h1 className="card-title placeholder-glow">
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                        </h1>
                                        <br />
                                        <span className="placeholder col-7"></span>
                                        <hr />
                                        <p className="card-text placeholder-glow">
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12"></span>
                                        </p>
                                        <div className="col-12 text-center"><a className="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    ))}                    
                </div>
            </div>
            <div className="d-flex justify-content-center m-2">
                <span className="fw-lighter fs-6">Page icons by <Link href='https://icons8.com/'>Icons8</Link></span>
            </div>
        </div>       
    );
}