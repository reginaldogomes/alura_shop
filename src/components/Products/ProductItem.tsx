// In ProductItem.tsx, this component only displays a product.
const ProductItem: React.FC<{ product: Product }> = ({ product }) => (
  <div>
    <img src={product.image} alt={product.title} width="100" />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
  </div>
)
