import ProductsList from "./products/ProductsList";
// Main.jsx

export default function Main({ comics }) {
    return (<main className="pd-50">
        <div className="container-main mg t-white">
            <ProductsList comics={comics} />
        </div>

    </main>);
}