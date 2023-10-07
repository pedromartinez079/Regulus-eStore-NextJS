import { Fragment } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import useSWR from 'swr';

import LoadFailed from '@/components/ui/loadfailed';
import LoadingProduct from '@/components/ui/loadingproduct';
import NotFound from '@/components/ui/notfound';
import ProductPage from '@/components/product/productdetail';

export default function Product() {
    const router = useRouter();
    const code = router.query.code;

    const apiUrl = `/api/products?product=${code}`;

    let pageHead = (
        <Head>
          <title>{code}</title>
          <meta name={`Producto ${code}`} content="Product page and details"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/computer.png" sizes="any" />
        </Head>
    );

    const [product, setProduct] = useState({});

    const {data, error} = useSWR(
        apiUrl,
        (url) => fetch(url).then(res => res.json())
    );
      
    useEffect(() => {
      if (data) {
        setProduct(data);
      }
    }, [data]);

    if (data === null) return(
        <Fragment>
            {pageHead}
            <NotFound />
        </Fragment>
        );
    if (error || product.hasOwnProperty("message")) return(
        <Fragment>
            {pageHead}
            <LoadFailed />
        </Fragment>
        );
    if (!data || product.products === undefined) return (
        <Fragment>
            {pageHead}
            <LoadingProduct />
        </Fragment>
        );

    // console.log(product.products[0]);

    return(
        <Fragment>
            {pageHead}
            <ProductPage information={product.products[0]}/>
        </Fragment>
    );
}
