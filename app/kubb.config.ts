import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from "@kubb/plugin-ts"
import { pluginClient } from "@kubb/plugin-client"
import { pluginZod } from "@kubb/plugin-zod"

export default defineConfig({
  name: "dn-kubb",
  root: ".",
  input: {
    path: "./src/api/api-spec.json"
  },
  output: {
    path: "./src/api/gen",
  },
  plugins: [
    // https://kubb.dev/helpers/oas
    pluginOas(),
    // https://kubb.dev/plugins/plugin-ts/
    pluginTs({
      output: {
        path: "./types",
      },
      enumType: "asConst",
      dateType: 'date',
      unknownType: 'unknown',
      optionalType: 'questionTokenAndUndefined',
    }),
    // https://kubb.dev/plugins/plugin-client/
    pluginClient(),
    // https://kubb.dev/plugins/plugin-zod/
    pluginZod({
      output: {
        path: "./zod",
      },
      typed: true,
      importPath: "zod",
    }),

  ]
})
