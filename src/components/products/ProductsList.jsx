import ProductsCard from "./ProductsCard"
const ProductsList = (props) => {
    const comics = props.comics
    console.log(comics)
    return (
        <section>
            <h2>LISTA FUMETTI</h2>
            <div className="d-flex">
                {comics.map(comics => <ProductsCard key={comics.id} comics={comics} />)}
            </div>
        </section>
    )
}

export default ProductsList