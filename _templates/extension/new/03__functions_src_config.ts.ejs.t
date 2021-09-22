---
to: <%= name %>/functions/src/config.ts
---

export default {
  location: process.env.LOCATION!,
  databaseInstance: process.env.SELECTED_DATABASE_INSTANCE!,
  shipEngineApiKey: process.env.SHIPENGINE_API_KEY!,
  collectionPath: process.env.COLLECTION_PATH!
}