define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "",
    "name": "homepage",
    "group": "Home",
    "version": "0.0.0",
    "filename": "src/routes.php",
    "groupTitle": "Home"
  },
  {
    "type": "delete",
    "url": "/ploegen/:id",
    "title": "",
    "name": "DeletePloeg",
    "group": "Ploegen",
    "description": "<p>Verwijdert een ploeg van KSK Klinge</p>",
    "permission": [
      {
        "name": "admin",
        "title": "Geregistreerde gebruikers",
        "description": "<p>Enkel toegankelijk voor geregistreerde gebruikers</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unieke id van de ploeg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes.php",
    "groupTitle": "Ploegen"
  },
  {
    "type": "put",
    "url": "/ploegen/:id",
    "title": "",
    "name": "DeletePloeg",
    "group": "Ploegen",
    "description": "<p>Verwijdert een ploeg van KSK Klinge</p>",
    "permission": [
      {
        "name": "admin",
        "title": "Geregistreerde gebruikers",
        "description": "<p>Enkel toegankelijk voor geregistreerde gebruikers</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unieke id van de ploeg</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "ploeg",
            "description": "<p>Geüpdate ploeg-object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes.php",
    "groupTitle": "Ploegen"
  },
  {
    "type": "get",
    "url": "/ploegen/:id",
    "title": "",
    "name": "GetPloeg",
    "group": "Ploegen",
    "description": "<p>Geeft een ploeg van KSK Klinge terug</p>",
    "permission": [
      {
        "name": "none",
        "title": "Alle gebruikers",
        "description": "<p>Publiek toegankelijk</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unieke id van de ploeg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ploeg",
            "description": "<p>Ploeg info</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "ploeg.ploeg_id",
            "description": "<p>Unieke id van de ploeg</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.naam",
            "description": "<p>Naam van de ploeg</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "ploeg.leeftijdMax",
            "description": "<p>Maximum leeftijd van de spelers</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.trainer_1",
            "description": "<p>Naam van de trainer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.trainer_2",
            "description": "<p>Naam van de (extra) trainer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.telTrainer_1",
            "description": "<p>Telefoonnummer van trainer_1</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.telTrainer_2",
            "description": "<p>Telefoonnummer van trainer_2</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.mailTrainer_1",
            "description": "<p>Email van trainer_1</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.mailTrainer_2",
            "description": "<p>Email van trainer_2</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.trainingsuur",
            "description": "<p>Uur van aanvang van de trainingen</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.trainingsdagen",
            "description": "<p>Dagen van de trainingen</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.fotoUrl",
            "description": "<p>URL naar de ploegfoto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.sponsor_id",
            "description": "<p>Id van de sponsor bij de ploeg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes.php",
    "groupTitle": "Ploegen"
  },
  {
    "type": "get",
    "url": "/ploegen/byName/:name",
    "title": "",
    "name": "GetPloegByName",
    "group": "Ploegen",
    "description": "<p>Geeft een ploeg van KSK Klinge terug</p>",
    "permission": [
      {
        "name": "none",
        "title": "Alle gebruikers",
        "description": "<p>Publiek toegankelijk</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Naam van de ploeg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "ploeg",
            "description": "<p>Ploeg info</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "ploeg.ploeg_id",
            "description": "<p>Unieke id van de ploeg</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.naam",
            "description": "<p>Naam van de ploeg</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "ploeg.leeftijdMax",
            "description": "<p>Maximum leeftijd van de spelers</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.trainer_1",
            "description": "<p>Naam van de trainer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.trainer_2",
            "description": "<p>Naam van de (extra) trainer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.telTrainer_1",
            "description": "<p>Telefoonnummer van trainer_1</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.telTrainer_2",
            "description": "<p>Telefoonnummer van trainer_2</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.mailTrainer_1",
            "description": "<p>Email van trainer_1</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.mailTrainer_2",
            "description": "<p>Email van trainer_2</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.trainingsuur",
            "description": "<p>Uur van aanvang van de trainingen</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.trainingsdagen",
            "description": "<p>Dagen van de trainingen</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.fotoUrl",
            "description": "<p>URL naar de ploegfoto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploeg.sponsor_id",
            "description": "<p>Id van de sponsor bij de ploeg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes.php",
    "groupTitle": "Ploegen"
  },
  {
    "type": "get",
    "url": "/ploegen",
    "title": "Alle ploegen",
    "name": "GetPloegen",
    "group": "Ploegen",
    "description": "<p>Geeft alle ploegen van KSK Klinge terug</p>",
    "permission": [
      {
        "name": "none",
        "title": "Alle gebruikers",
        "description": "<p>Publiek toegankelijk</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ploegen",
            "description": "<p>Lijst van alle ploegen</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "ploegen.ploeg_id",
            "description": "<p>Unieke id van de ploeg</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.naam",
            "description": "<p>Naam van de ploeg</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "ploegen.leeftijdMax",
            "description": "<p>Maximum leeftijd van de spelers</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.trainer_1",
            "description": "<p>Naam van de trainer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.trainer_2",
            "description": "<p>Naam van de (extra) trainer</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.telTrainer_1",
            "description": "<p>Telefoonnummer van trainer_1</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.telTrainer_2",
            "description": "<p>Telefoonnummer van trainer_2</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.mailTrainer_1",
            "description": "<p>Email van trainer_1</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.mailTrainer_2",
            "description": "<p>Email van trainer_2</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.trainingsuur",
            "description": "<p>Uur van aanvang van de trainingen</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.trainingsdagen",
            "description": "<p>Dagen van de trainingen</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.fotoUrl",
            "description": "<p>URL naar de ploegfoto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "ploegen.sponsor_id",
            "description": "<p>Id van de sponsor bij de ploeg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes.php",
    "groupTitle": "Ploegen"
  },
  {
    "type": "get",
    "url": "/ploegen/:id/spelers",
    "title": "",
    "name": "GetSpelersOfTeam",
    "group": "Ploegen",
    "description": "<p>Geeft de spelers van een ploeg van KSK Klinge terug</p>",
    "permission": [
      {
        "name": "none",
        "title": "Alle gebruikers",
        "description": "<p>Publiek toegankelijk</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unieke id van de ploeg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "spelers",
            "description": "<p>Lijst van spelers van een ploeg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes.php",
    "groupTitle": "Ploegen"
  },
  {
    "type": "get",
    "url": "/ploegen/:id/wedstrijden",
    "title": "",
    "name": "GetWedstrijdenOfTeam",
    "group": "Ploegen",
    "description": "<p>Geeft de wedstrijden van een ploeg van KSK Klinge terug</p>",
    "permission": [
      {
        "name": "none",
        "title": "Alle gebruikers",
        "description": "<p>Publiek toegankelijk</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unieke id van de ploeg</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "wedstrijden",
            "description": "<p>Lijst van wedstrijden van een ploeg</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes.php",
    "groupTitle": "Ploegen"
  }
] });
