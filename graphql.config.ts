
import { IGraphQLConfig } from 'graphql-config'
import { CodegenConfig } from '@graphql-codegen/cli'
import { TypeScriptPluginConfig } from '@graphql-codegen/typescript'
import { TypeScriptResolversPluginConfig } from '@graphql-codegen/typescript-resolvers'

import { SchemaASTConfig } from './codegen/schema-ast.plugin.js'

const config: IGraphQLConfig = {
  schema: [
    './src/**/*.graphql',
    './src/module/scalar/schema.ts',
  ],
  extensions: {
    codegen: {
      require: [
        'ts-node/register',
      ],
      generates: {
        './src/type/graphql.ts': {
          plugins: [
            {
              typescript: {
                enumsAsConst: true,
              } satisfies TypeScriptPluginConfig,
            },
            {
              'typescript-resolvers': {
              } satisfies TypeScriptResolversPluginConfig,
            },
          ],
        },
        './src/module/index.graphql.ts': {
          plugins: [
            {
              './codegen/schema-ast.plugin.ts': {
                includeDirectives: true,
                replace: {
                  searchValue: '\`',
                  replaceValue: '\\`',
                },
              } satisfies SchemaASTConfig,
            },
            {
              add: {
                placement: 'prepend',
                content: 'export const schema = `',
              },
            },
            {
              add: {
                placement: 'append',
                content: [
                  '`',
                  'export default schema',
                ],
              },
            },
          ],
        },
      },
      emitLegacyCommonJSImports: false,
    } satisfies CodegenConfig,
  },
}

export default config
