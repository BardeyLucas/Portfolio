/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3620n8t60hy58li")

  // remove
  collection.schema.removeField("jigph24d")

  // remove
  collection.schema.removeField("avyytqhu")

  // remove
  collection.schema.removeField("rxpd4ihv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "88fc9hcu",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m5aixx4x",
    "name": "realisations",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dupsf86t",
    "name": "equipe",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cgll4uuq",
    "name": "Order",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3620n8t60hy58li")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jigph24d",
    "name": "description",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "avyytqhu",
    "name": "realisations",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxpd4ihv",
    "name": "equipe",
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
  collection.schema.removeField("88fc9hcu")

  // remove
  collection.schema.removeField("m5aixx4x")

  // remove
  collection.schema.removeField("dupsf86t")

  // remove
  collection.schema.removeField("cgll4uuq")

  return dao.saveCollection(collection)
})
