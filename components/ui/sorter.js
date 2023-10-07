

export default function Sorter(props) {
    let sortasc = `${props.urlbase}?sort=1`;
    let sortdes = `${props.urlbase}?sort=-1`;

    return(
        <p className="Link">
            <a className="text-info text-decoration-none">Ordenar por precio: </a>
            <a className="text-info text-decoration-none" href={sortasc}> + </a>
            <a className="text-info text-decoration-none">|</a>
            <a className="text-info text-decoration-none" href={sortdes}> - </a>
        </p>
    );
}