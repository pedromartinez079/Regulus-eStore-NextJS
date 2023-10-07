import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import useSWR from 'swr';

import LoadFailed from '@/components/ui/loadfailed';
import Loading from '@/components/ui/loading';
import NotFound from '@/components/ui/notfound';
import Gallery from '@/components/layout/gallery';

export default function StoreHome() {
  const router = useRouter();
  
  let apiUrl = `/api/products/`
  if (router.query.sort) { apiUrl = `/api/products?sort=${router.query.sort}`}

  let pageHead = (
    <Head>
      <title>Regulus E-Store</title>
      <meta name="Regulus EIRL galería de productos" content="Notebook, Tablet, Monitor, Disco Externo, Impresora"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" /> 
      <link rel="icon" href="/computer.png" sizes="any" />
    </Head>
  );

  const [products, setProducts] = useState([]);

  const {data, error} = useSWR(
    apiUrl,
    (url) => fetch(url).then(res => res.json())
    );
  
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  if (data === null) return(
    <Fragment>
        {pageHead}
        <NotFound />
    </Fragment>
    );
if (error || products.hasOwnProperty("message")) return(
    <Fragment>
        {pageHead}
        <LoadFailed />
    </Fragment>
    );
if (!data || products.products === undefined) return (
    <Fragment>
        {pageHead}
        <Loading />
    </Fragment>
    );

  // console.log(products);

  return (
    <Fragment>
      {pageHead}
      <Gallery category='Productos' products={products.products}/>
    </Fragment>
  );
}
