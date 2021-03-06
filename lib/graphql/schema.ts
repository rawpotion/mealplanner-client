import { join } from 'path'
import { loadFilesSync } from '@graphql-tools/load-files'
import GraphQLLetConfig from '../../.graphql-let.yml'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs } from '@graphql-tools/merge'

const loadedFiles = loadFilesSync(join(process.cwd(), GraphQLLetConfig.schema))
const typeDefs = mergeTypeDefs(loadedFiles)

export const schema = makeExecutableSchema({
  typeDefs,
})
