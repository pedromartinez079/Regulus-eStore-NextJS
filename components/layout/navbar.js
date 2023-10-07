import Link from 'next/link';
import { useRef } from 'react';

export default function NavBar(props) {
    const slugRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        let slug = slugRef.current.value;

        if (!/\S/.test(slug)) { slug = undefined; }
        else {
            if (slug[0] === '#' || slug[0] === '%' || slug[0] === '/' ||
            slug[0] === '?' || slug[0] === '\\') { slug = undefined; }
        }
        
        if (slug) { props.onSearch(slug); }        
    }

    return(
        <nav className="navbar navbar-expand-lg bg-primary justify-content-center">
            <div className="container-fluid">
                <a className="navbar-brand main-heading fs-4 text-white" href="/">
                    <strong>Regulus E-Store</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-dark"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href={'/'}>Todo</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                {props.categories.map((category) => (
                                    <li key={category._id}><a className="dropdown-item" href={`/category/${category.name}`}>{category.name}</a></li>
                                ))}
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Acerca de ...
                            </a>
                            <ul className="dropdown-menu">
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href={'#'}>&copy; Regulus EIRL 2023</a></li>
                                <li><span className="dropdown-item"><Link href="https://www.linkedin.com/in/pedro-martinezlr/?locale=en_US">Pedro L. Martinez La Rosa</Link></span></li>
                                <li><hr className="dropdown-divider" /></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex col-8" role="search" onSubmit={submitHandler}>
                        <input className="form-control me-0" id="search" type="search" placeholder="" aria-label="Search" ref={slugRef}/>
                        <button className="btn btn-outline-info" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}