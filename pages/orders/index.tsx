import StoreLayout from '@components/ui/StoreLayout'
import {
  GetProductsDocument,
  useGetProductsQuery,
} from '@lib/graphql/products.graphql'
import { initializeApollo } from '@lib/graphql/apollo'

const OrdersPage = () => {
  const { data, loading, error } = useGetProductsQuery()

  if (!data || loading || error) {
    return <p>Loading!</p>
  }

  if (data.products) {
    return <div>{JSON.stringify(data.products)}</div>
  }

  return <div></div>
}

OrdersPage.Layout = StoreLayout

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({ query: GetProductsDocument })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
export default OrdersPage
