import Link from "next/link";

export default function Loading() {
    const placeholders = [0,1,2,3];
    return(
        <div className="album py-5 bg-light" aria-hidden="true">                          
            <div className="container">                
                <hr />
                <br />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
                    {placeholders.map((item) => (
                        <div key={item} className="card m-3" aria-hidden="true">
                            <img src="/images/icons8-rectangle-96.png" className="card-img-top" alt="Loading" />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-4"></span>
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-8"></span>
                                    </p>
                                    <div className="col-12 text-center"><a className="btn btn-primary spinner-border-sm disabled placeholder col-6" aria-disabled="true"></a></div>
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