# .NET + Kubb

This repository demonstrates configuration of .NET controller web APIs + Kubb for client generation.

## Why Kubb

Kubb.dev and Orval.dev serve similar purposes, but Kubb's plugin-based approach makes it easier to extend the functionality with custom builders and transformers.

This example demonstrates using Kubb to:

- Generate TypeScript types
- Generate a standard client using `fetch`
- Generate Zod schemas

Kubb also supports [plugging in custom clients](https://kubb.dev/knowledge-base/fetch) for implementing custom behaviors like auth, telemetry, etc.

## How to Run

```shell
cd app
npm i

cd ../api
./_gen.sh
# Or manual
cd api
dotnet build
cd ../app
npm run gen
```

The `_gen.sh` script will continuously watch and rebuild the client (see the `.csproj` file for configuration example).
