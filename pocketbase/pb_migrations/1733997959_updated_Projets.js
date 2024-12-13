/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3620n8t60hy58li")

  // remove
  collection.schema.removeField("kkp0gerg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uoukbsyu",
    "name": "Page_content",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hju1or2dx518pu3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3620n8t60hy58li")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kkp0gerg",
    "name": "page_content",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hju1or2dx518pu3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("uoukbsyu")

  return dao.saveCollection(collection)
})
