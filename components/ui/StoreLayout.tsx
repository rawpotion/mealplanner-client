import { FC } from 'react'
import { useApollo } from '@lib/graphql/apollo'
import { ApolloProvider } from '@apollo/client'
import NavBar from '@components/ui/NavBar'

interface StoreLayoutProps {
  pageProps?: any
}
const StoreLayout: FC<StoreLayoutProps> = ({ children, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <div className="min-h-screen h-screen flex flex-col">
        <NavBar />
        {children}
      </div>
    </ApolloProvider>
  )
}

export default StoreLayout
