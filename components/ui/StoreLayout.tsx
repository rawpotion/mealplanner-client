import { FC } from 'react'
import { useApollo } from '@lib/graphql/apollo'
import { ApolloProvider } from '@apollo/client'

interface StoreLayoutProps {
  pageProps?: any
}
const StoreLayout: FC<StoreLayoutProps> = ({ children, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}

export default StoreLayout
