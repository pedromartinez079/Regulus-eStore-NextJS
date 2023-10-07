import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useState, useEffect } from 'react';
import useSWR from 'swr';

import LoadFailed from '@/components/ui/loadfailed';
import Loading from '@/components/ui/loading';
import NotFound from "@/components/ui/notfound";
import SearchResult from "@/components/search/results";

export default function Search() {
  const router = useRouter();
  const searchString = router.query.searchstring;
  const apiUrl = `/api/products?search=${searchString}`

  //console.log(apiUrl);

  let pageHead = (
      <Head>
        <title>Búsqueda de Productos</title>
        <meta name="Regulus EIRL búsqueda de productos" content="Regulus EIRL búsqueda de productos"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <link rel="icon" href="/computer.png" sizes="any" />
      </Head>
    );

  const [results, setResults] = useState([]);

  const {data, error} = useSWR(
    apiUrl,
    (url) => fetch(url).then(res => res.json())
    );
  
  useEffect(() => {
    if (data) {
      setResults(data);
    }
  }, [data]);

  if (data === null) return(
    <Fragment>
        {pageHead}
        <NotFound />
    </Fragment>
    );
  if (error || results.hasOwnProperty("message")) return(
      <Fragment>
          {pageHead}
          <LoadFailed />
      </Fragment>
      );
  if (!data || results.products === undefined) return (
      <Fragment>
          {pageHead}
          <div className="row text-center px-5 m-5">
            <button className="btn btn-outline-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
              <span role="status">Loading...</span>
            </button>
          </div>
      </Fragment>
      );
  
  return(
      <Fragment>
          {pageHead}
          <h5 className="m-3">Resultados de búsqueda:</h5>
          <SearchResult products={results.products}/>
      </Fragment>
  );
}

// Search text with score, sorted by score, limit 10 results
// db.Deltron
//  .find({$text: {$search:"notebook lenovo ryzen 7 16gb no incluye"}}, {score: {$meta:"textScore"}})
//  .sort({score: {$meta:"textScore"}})
//  .limit(10)