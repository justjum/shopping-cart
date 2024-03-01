export default function Cart( { cart, showCart } ) {
    return (
        <div className="shopping-cart" style={{display: showCart ? 'flex' : 'none'}}>
            <p>Shopping Cart Placeholder</p>
            {JSON.parse(cart).map((product) => {
                if (product.item === 0) {
                    return;
                } else {
                    return (
                        <>
                            <p>{product.item} {product.quantity}</p>
                        </>
                    )
                }

            })};
        </div>
    )
}