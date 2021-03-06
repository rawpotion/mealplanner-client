import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { IncomingMessage, ServerResponse } from 'http'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

function createIsomorphLink(context: ResolverContext = {}) {
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('@apollo/client/link/schema')
    const { schema } = require('./schema')
    return new SchemaLink({ schema, context })
  } else {
    const { HttpLink } = require('@apollo/client')
    return new HttpLink({
      uri: 'https://localhost:5001/graphql',
    })
  }
}

function createApolloClient(context?: ResolverContext) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createIsomorphLink(context),
    cache: new InMemoryCache(),
  })
}

export const initializeApollo = (
  initialState: any = null,
  context?: ResolverContext
) => {
  const _apolloClient = apolloClient ?? createApolloClient(context)

  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return _apolloClient
  if (!_apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export const useApollo = (initialState: any) =>
  useMemo(() => initializeApollo(initialState), [initialState])
