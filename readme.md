Currently using [swagger-ui-dist 4.0.0-beta.1](https://github.com/swagger-api/swagger-ui/releases/tag/v4.0.0-beta.1)

Changes in dist/index.html:
- uri > openapi.json
- persistAuthorization: true *(persists authorization)*
- added styles to hide the explorer
  *(.swagger-ui .topbar .download-url-wrapper { display: none })*

Validate and bundle:
```js
    npm i && npm start
```