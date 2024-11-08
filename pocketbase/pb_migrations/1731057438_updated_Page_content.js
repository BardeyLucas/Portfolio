/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hju1or2dx518pu3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1hc17ti1",
    "name": "Test",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hju1or2dx518pu3")

  // remove
  collection.schema.removeField("1hc17ti1")

  return dao.saveCollection(collection)
})
