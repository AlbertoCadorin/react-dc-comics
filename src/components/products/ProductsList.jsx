import ProductsCard from "./ProductsCard"
const ProductsList = (props) => {
    const comics = props.comics
    console.log(comics)
    return (
        <section className="d-flex d-sb-center pd-50">
            <div className="d-flex card-list d-sb">
                {comics.map(comics => <ProductsCard key={comics.id} comics={comics} />)}
            </div>
        </section>
    )
}

export default ProductsList