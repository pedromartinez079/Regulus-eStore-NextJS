import Link from "next/link";

export default function SearchResult(props) {
    return(
        <ol>
            {props.products.map((product) => (
                <li key={product.code}>
                    <p className="m-0"><Link href={`/product/${product.code}`}>{product.code}</Link></p>
                    <p>{product.description.replaceAll('###','')}</p>
                </li>
            ))}
        </ol>
    );
}