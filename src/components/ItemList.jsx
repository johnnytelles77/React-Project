import { Item } from "./Item.jsx"
import { ItemCart } from "./ItemCart.jsx"

export const ItemList = ({ products, plantilla }) => {
    return (
        <>
            {
                plantilla === 'Item'
                    ?
                    products.map(prod => <Item key={prod.id} product={prod} />)
                    :
                    products.map(prod => <ItemCart key={prod.id} product={prod} />)

            }
        </>

    )
}