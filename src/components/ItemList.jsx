import { Item } from "./Item"


export const ItemList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(prod => <Item key={prod.id} product={prod} />)}
    </div>
  )
};