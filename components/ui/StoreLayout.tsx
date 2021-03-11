import { FC } from 'react'
import { useApollo } from '@lib/graphql/apollo'
import { ApolloProvider } from '@apollo/client'
import { Footer } from '@components/ui/index'
import StoreNavBar from '@components/ui/StoreNavBar'

interface StoreLayoutProps {
  pageProps?: any
}
const StoreLayout: FC<StoreLayoutProps> = ({ children, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <div className="min-h-screen h-screen flex flex-col">
        <StoreNavBar />
        {children}
      </div>
      <Footer />
    </ApolloProvider>
  )
}

export default StoreLayout
