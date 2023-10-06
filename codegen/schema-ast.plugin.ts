
import * as graphqlCodegenPluginHelpers from '@graphql-codegen/plugin-helpers'
import * as graphqlCodegenSchemaAst from '@graphql-codegen/schema-ast'

export interface SchemaASTConfig extends graphqlCodegenSchemaAst.SchemaASTConfig {
  replace?: {
    searchValue: string
    replaceValue: string
  }
}

const isString = (value: unknown): value is string => {
  return (typeof value === 'string')
}

export const plugin: graphqlCodegenPluginHelpers.PluginFunction<SchemaASTConfig> = async (schema, documents, config, info) => {
  const schemaAstPluginOutput = await graphqlCodegenSchemaAst.plugin(schema, documents, config, info)
  if (isString(schemaAstPluginOutput)) {
    const content = schemaAstPluginOutput
    if (config.replace) {
      return content.replaceAll(config.replace.searchValue, config.replace.replaceValue)
    }
    return content
  } else {
    const complexPluginOutput = schemaAstPluginOutput
    if (config.replace) {
      complexPluginOutput.content.replaceAll(config.replace.searchValue, config.replace.replaceValue)
    }
    return complexPluginOutput
  }
}

export const validate: graphqlCodegenPluginHelpers.PluginValidateFn<SchemaASTConfig> = (schema, documents, config, outputFile, allPlugins, pluginContext) => {
  graphqlCodegenSchemaAst.validate(schema, documents, config, outputFile, allPlugins, pluginContext)
  if (config.replace) {
    if (!config.replace.searchValue) {
      throw new Error('Configuration provided for "schema-ast" plugin is invalid: "replace.searchValue" is missing!')
    }
    if (!config.replace.replaceValue) {
      throw new Error('Configuration provided for "schema-ast" plugin is invalid: "replace.replaceValue" is missing!')
    }
  }
}
