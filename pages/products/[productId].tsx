import { useRouter } from 'next/router'
import { StoreLayout } from '@components/ui'
import { Main } from '@components/ui/Layout'
import { useGetProductByIdQuery } from '@lib/graphql/products.graphql'

const Product = () => {
  const router = useRouter()
  const { productId } = router.query
  const { loading, error, data } = useGetProductByIdQuery({
    variables: {
      productId: productId,
    },
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    console.error(error)

    return <div>An error occurred, please try again...</div>
  }

  const { product } = data

  return (
    <Main>
      <div className="h-full flex flex-col md:justify-around">
        <div className="grid grid-cols-1 md:grid-cols-12 py-20 ">
          <div className="md:col-span-7">
            <img src={product.imageUrl} alt="" />
          </div>
          <div className="md:col-span-1" />
          <div className="md:col-span-4 flex flex-col py-8 space-y-5">
            <h1 className="text-4xl font-medium uppercase">{product.name}</h1>
            <p className="text-xl pb-4">{product.description}</p>
            <button className="py-2 text-center w-full bg-green-400 text-xl uppercase text-white rounded-lg active:bg-green-500">
              Add to basket
            </button>
          </div>
        </div>
      </div>
    </Main>
  )
}

Product.Layout = StoreLayout

export default Product
