/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hju1or2dx518pu3")

  // remove
  collection.schema.removeField("1hc17ti1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "myzgspt7",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqjqk5jv",
    "name": "Content",
    "type": "editor",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("myzgspt7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqjqk5jv",
    "name": "Content",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
})
