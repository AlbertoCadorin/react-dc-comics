import ProductsList from "./products/ProductsList";
// Main.jsx

export default function Main({ comics }) {
    return (<main>
        <div className="bg-jumbo pd-50"></div>
        <div className="container-main mg t-white">
            <ProductsList comics={comics} />
        </div>

    </main>);
}