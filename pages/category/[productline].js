import { Fragment } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import useSWR from 'swr';

import LoadFailed from '@/components/ui/loadfailed';
import Loading from '@/components/ui/loading';
import NotFound from '@/components/ui/notfound';
import Gallery from '@/components/layout/gallery';

export default function Category() {
  const router = useRouter();
  const categoryName = router.query.productline;
  
  let apiUrl = `/api/products?category=${categoryName}`;
  if (router.query.sort) { apiUrl = `/api/products?category=${categoryName}&sort=${router.query.sort}` }

  let pageHead = (
    <Head>
      <title>{categoryName}</title>
      <meta name={`Regulus EIRL galería de ${categoryName}`} content="Discos Externos, IDE, sata, SSD"/>
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

  return(
    <Fragment>
      {pageHead}
      <Gallery category={categoryName} products={products.products}/>
    </Fragment>
  );
}

{/*
[
    { _id: ObjectId("65154ec6368e891a82ecae46"), name: 'Notebooks' },
    { _id: ObjectId("65154efb368e891a82ecae8e"), name: 'Monitores' },
    { _id: ObjectId("65154f2e368e891a82ecaed6"), name: 'Impresoras' },
    {
      _id: ObjectId("65154f46368e891a82ecaefa"),
      name: 'TarjetasdeVideo'
    },
    { _id: ObjectId("65154f60368e891a82ecaf37"), name: 'DiscosExternos' },
    { _id: ObjectId("65154f79368e891a82ecaf67"), name: 'Tablets' }
  ]
*/}