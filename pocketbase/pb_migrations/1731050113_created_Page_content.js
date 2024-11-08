/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hju1or2dx518pu3",
    "created": "2024-11-08 07:15:13.344Z",
    "updated": "2024-11-08 07:15:13.344Z",
    "name": "Page_content",
    "type": "base",
    "system": false,
    "schema": [
      {
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hju1or2dx518pu3");

  return dao.deleteCollection(collection);
})
