/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cbyuvvn4uix2dz8");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "cbyuvvn4uix2dz8",
    "created": "2024-10-15 14:00:13.523Z",
    "updated": "2024-10-15 14:00:13.523Z",
    "name": "Mhhhhh",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x6zdv56a",
        "name": "Jai_as_dinspi_la",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0ihqrgmv",
        "name": "_",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
