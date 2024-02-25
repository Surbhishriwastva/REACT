import Product from './Product'

function ProductList(props) {
    return (
        props.productList.length > 0 ? (
            props.productList.map((product, i) => {
                return (
                    <Product
                        product={product}
                        key={i}
                        incrementQunatity={props.incrementQunatity}
                        index={i}
                        decrementQunatity={props.decrementQunatity}
                        removeItem={props.removeItem}
                    />

                );

            })
        ) : (
            <h1> No product Exist Plz enter the items</h1>
        )
    )

}

export default ProductList