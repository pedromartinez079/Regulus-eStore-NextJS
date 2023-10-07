import { Fragment } from "react";
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';

import NavBar from './navbar';
import Footer from './footer';

export default function Layout(props) {
    const router = useRouter();
    const [categories, setCategories] = useState([{_id: 'Loading', name: 'Loading...'}]);
    
    useEffect(() => {
        fetch('/api/productlines/')
        .then((response) => response.json())
        .then((data) => {
            if (data.categories) {
                setCategories(data.categories);
            }
        });
    });

    function searchHandler(slug) {
        router.push(`/search/${slug}`);
    }

    return(
        <Fragment>
            <NavBar categories={categories} onSearch={searchHandler}/>
            <main>{props.children}</main>
            <Footer />
        </Fragment>
    );
}