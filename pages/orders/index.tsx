import StoreLayout from '@components/ui/StoreLayout'
import { Product, useGetProductsQuery } from '@lib/graphql/products.graphql'
import { FC } from 'react'
import Link from 'next/link'

interface ProductLiteProps {
  product: Product
}
const ProductLite: FC<ProductLiteProps> = (props) => (
  <Link href={`/orders/${props.product.id}`}>
    <img
      src={props.product.imageUrl}
      alt=""
      className="object-cover box-border h-full w-full cursor-pointer"
    />
  </Link>
)

const OrdersPage = () => {
  const { data, loading, error } = useGetProductsQuery()

  if (!data || loading || error) {
    return <p>Loading!</p>
  }

  if (data.products) {
    return (
      <div className="flex-grow grid grid-cols-3 grid-rows-2">
        <div className="row-span-2 col-span-2">
          <ProductLite product={data.products[0] as Product} />
        </div>
        <div className="row-span-1">
          <ProductLite product={data.products[1] as Product} />
        </div>
        <div className="row-span-1">
          <ProductLite product={data.products[2] as Product} />
        </div>
      </div>
    )
  }

  return <div></div>
}

OrdersPage.Layout = StoreLayout

export default OrdersPage
