import fs from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import SwaggerParser from 'swagger-parser'

async function main () {
    try {
        const parser = new SwaggerParser()

        // Validate and bundle yaml to json
        const api = await parser.validate('./docs/openapi.yaml')
        const specs = await parser.bundle('./docs/openapi.yaml')

        console.info(`Documentation is compiled (${api.info.version})`)

        // Put specs in the dist directory
        await fs.writeFile('./dist/openapi.json', JSON.stringify(specs))

        const __dirname = dirname(fileURLToPath(import.meta.url))
        const distUrl = join(__dirname, 'dist', '/')

        console.log(distUrl)
    } catch (e) {
        console.error(e)
    }
}

main()
