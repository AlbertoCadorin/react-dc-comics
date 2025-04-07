function ProductsCard(props) {
    const comics = props.comics
    return (
        <div className="card ">
            <img src={comics.thumb} alt={comics.title} className="card-img " />
            <h4 className="t-size">{comics.title}</h4>
        </div>
    )
}

export default ProductsCard