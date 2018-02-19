define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "",
    "name": "homepage",
    "group": "Home",
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Home"
  },
  {
    "type": "delete",
    "url": "/nieuws/:id",
    "title": "",
    "name": "DeleteNieuws",
    "group": "Nieuws",
    "description": "<p>Voegt nieuws toe</p>",
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
            "description": "<p>Id van nieuws</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "get",
    "url": "/events/pastLastYear",
    "title": "Alle voorbije evenementen",
    "name": "GetEventsPastLastYear",
    "group": "Nieuws",
    "description": "<p>Geeft alle voorbije evenementen van KSK Klinge van het afgelopen jaar</p>",
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
            "field": "nieuws",
            "description": "<p>Lijst van alle evenementen</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "get",
    "url": "/events/upcoming",
    "title": "Alle aankomende evenementen",
    "name": "GetEventsUpcoming",
    "group": "Nieuws",
    "description": "<p>Geeft alle aankomende evenementen van KSK Klinge</p>",
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
            "field": "nieuws",
            "description": "<p>Lijst van alle evenementen (maximaal 3)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "get",
    "url": "/events/upcomingAll",
    "title": "Alle aankomende evenementen",
    "name": "GetEventsUpcomingAll",
    "group": "Nieuws",
    "description": "<p>Geeft alle aankomende evenementen van KSK Klinge</p>",
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
            "field": "nieuws",
            "description": "<p>Lijst van alle evenementen</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "get",
    "url": "/nieuws",
    "title": "Alle nieuws",
    "name": "GetNieuws",
    "group": "Nieuws",
    "description": "<p>Geeft alle nieuws van KSK Klinge terug</p>",
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
            "field": "nieuws",
            "description": "<p>Lijst van alle nieuws</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "get",
    "url": "/nieuws/club",
    "title": "Alle clubnieuws",
    "name": "GetNieuwsClub",
    "group": "Nieuws",
    "description": "<p>Geeft alle clubnieuws van KSK Klinge terug van de voorbije 150 dagen</p>",
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
            "field": "nieuws",
            "description": "<p>Lijst van alle nieuws</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "get",
    "url": "/nieuws/:id",
    "title": "Alle laatste nieuws",
    "name": "GetNieuwsItem",
    "group": "Nieuws",
    "description": "<p>Geeft nieuwsbericht van KSK Klinge terug</p>",
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
            "description": "<p>Unieke id van het nieuws</p>"
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
            "field": "nieuws",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "get",
    "url": "/nieuws/jeugd",
    "title": "Alle jeugdnieuws",
    "name": "GetNieuwsJeugd",
    "group": "Nieuws",
    "description": "<p>Geeft alle jeugdnieuws van KSK Klinge terug van de voorbije 150 dagen</p>",
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
            "field": "nieuws",
            "description": "<p>Lijst van alle nieuws</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "get",
    "url": "/nieuws/latest",
    "title": "Alle laatste nieuws",
    "name": "GetNieuwsLatest",
    "group": "Nieuws",
    "description": "<p>Geeft alle nieuws van KSK Klinge terug van de voorbije 60 dagen</p>",
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
            "field": "nieuws",
            "description": "<p>Lijst van alle nieuws</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "post",
    "url": "/nieuws/upload",
    "title": "",
    "name": "PostNewsImage",
    "group": "Nieuws",
    "description": "<p>Voegt foto aan nieuws toe</p>",
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
            "type": "string",
            "optional": false,
            "field": "fotoUrl",
            "description": "<p>van de file</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "post",
    "url": "/nieuws",
    "title": "",
    "name": "PostNieuws",
    "group": "Nieuws",
    "description": "<p>Voegt nieuws toe</p>",
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
            "description": "<p>Id van nieuws</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
  },
  {
    "type": "put",
    "url": "/nieuws/:id",
    "title": "",
    "name": "PutNieuws",
    "group": "Nieuws",
    "description": "<p>Voegt nieuws toe</p>",
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
            "description": "<p>Id van nieuws</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Nieuws"
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
    "filename": "admin/src/routes.php",
    "groupTitle": "Ploegen"
  },
  {
    "type": "post",
    "url": "/ploegen",
    "title": "",
    "name": "DeletePloeg",
    "group": "Ploegen",
    "description": "<p>Voegt ploeg toe</p>",
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
    "filename": "admin/src/routes.php",
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
    "filename": "admin/src/routes.php",
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
    "filename": "admin/src/routes.php",
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
    "filename": "admin/src/routes.php",
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
    "filename": "admin/src/routes.php",
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
    "filename": "admin/src/routes.php",
    "groupTitle": "Ploegen"
  },
  {
    "type": "post",
    "url": "/ploegen/upload",
    "title": "",
    "name": "PostPloegImage",
    "group": "Ploegen",
    "description": "<p>Voegt foto van een ploeg toe</p>",
    "permission": [
      {
        "name": "admin",
        "title": "Geregistreerde gebruikers",
        "description": "<p>Enkel toegankelijk voor geregistreerde gebruikers</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fotoUrl",
            "description": "<p>van de file</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Ploegen"
  },
  {
    "type": "put",
    "url": "/ploegen/:id",
    "title": "",
    "name": "PutPloeg",
    "group": "Ploegen",
    "description": "<p>Past ploeg van KSK Klinge aan</p>",
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
    "filename": "admin/src/routes.php",
    "groupTitle": "Ploegen"
  },
  {
    "type": "delete",
    "url": "/spelers/:id",
    "title": "",
    "name": "DeleteSpeler",
    "group": "Spelers",
    "description": "<p>Verwijdert een speler van KSK Klinge</p>",
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
            "description": "<p>Unieke id van de speler</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Spelers"
  },
  {
    "type": "get",
    "url": "/spelers/:id",
    "title": "Alle spelers",
    "name": "GetSpeler",
    "group": "Spelers",
    "description": "<p>Geeft alle spelers van KSK Klinge terug</p>",
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
            "description": "<p>Unieke id van de speler</p>"
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
            "description": "<p>Lijst van alle spelers</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Spelers"
  },
  {
    "type": "get",
    "url": "/spelers",
    "title": "Alle spelers",
    "name": "GetSpelers",
    "group": "Spelers",
    "description": "<p>Geeft alle spelers van KSK Klinge terug</p>",
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
            "field": "spelers",
            "description": "<p>Lijst van alle spelers</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Spelers"
  },
  {
    "type": "post",
    "url": "/spelers",
    "title": "",
    "name": "PostSpeler",
    "group": "Spelers",
    "description": "<p>Voegt speler toe</p>",
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
            "description": "<p>Unieke id van de speler</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Spelers"
  },
  {
    "type": "post",
    "url": "/spelers/upload",
    "title": "",
    "name": "PostSpelerImage",
    "group": "Spelers",
    "description": "<p>Voegt foto van een speler toe</p>",
    "permission": [
      {
        "name": "admin",
        "title": "Geregistreerde gebruikers",
        "description": "<p>Enkel toegankelijk voor geregistreerde gebruikers</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fotoUrl",
            "description": "<p>van de file</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Spelers"
  },
  {
    "type": "put",
    "url": "/spelers/:id",
    "title": "",
    "name": "PutSpeler",
    "group": "Spelers",
    "description": "<p>Past speler van KSK Klinge aan</p>",
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
            "description": "<p>Unieke id van de speler</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Spelers"
  },
  {
    "type": "post",
    "url": "/sponsors/upload",
    "title": "",
    "name": "PostSponsorImage",
    "group": "Sponsor",
    "description": "<p>Voegt foto van een sponsor toe</p>",
    "permission": [
      {
        "name": "admin",
        "title": "Geregistreerde gebruikers",
        "description": "<p>Enkel toegankelijk voor geregistreerde gebruikers</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "fotoUrl",
            "description": "<p>van de file</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Sponsor"
  },
  {
    "type": "post",
    "url": "/email",
    "title": "",
    "name": "CreateEmail",
    "group": "Utilities",
    "description": "<p>Verstuurt een email</p>",
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
    "filename": "admin/src/routes.php",
    "groupTitle": "Utilities"
  },
  {
    "type": "post",
    "url": "/email",
    "title": "",
    "name": "CreateEmail",
    "group": "Utilities",
    "description": "<p>Verstuurt een email</p>",
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
    "filename": "admin/src/routes.php",
    "groupTitle": "Utilities"
  },
  {
    "type": "get",
    "url": "/login",
    "title": "",
    "name": "PostLogin",
    "group": "Utilities",
    "description": "<p>Aanvraag tot login</p>",
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
            "type": "string",
            "optional": false,
            "field": "login-token",
            "description": "<p>(JWT)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Utilities"
  },
  {
    "type": "delete",
    "url": "/wedstrijden/:id",
    "title": "",
    "name": "DeleteWedstrijd",
    "group": "Wedstrijden",
    "description": "<p>Verwijdert wedstrijd</p>",
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
            "description": "<p>Unieke id van de wedstrijd</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id van wedstrijd</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Wedstrijden"
  },
  {
    "type": "get",
    "url": "/wedstrijden/:id",
    "title": "Alle wedstrijden",
    "name": "GetWedstrijd",
    "group": "Wedstrijden",
    "description": "<p>Geeft wedstrijd van KSK Klinge terug</p>",
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
            "description": "<p>Unieke id van de wedstrijd</p>"
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
            "field": "wedstrijd",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Wedstrijden"
  },
  {
    "type": "get",
    "url": "/wedstrijden",
    "title": "Alle wedstrijden",
    "name": "GetWedstrijden",
    "group": "Wedstrijden",
    "description": "<p>Geeft alle wedstrijden van KSK Klinge terug</p>",
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
            "field": "wedstrijden",
            "description": "<p>Lijst van alle wedstrijden</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Wedstrijden"
  },
  {
    "type": "get",
    "url": "/wedstrijden/senioren/lastGame",
    "title": "Alle wedstrijden",
    "name": "GetWedstrijdenSeniorenLastGame",
    "group": "Wedstrijden",
    "description": "<p>Geeft laatste wedstrijd van senioren van KSK Klinge terug</p>",
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
            "type": "Object",
            "optional": false,
            "field": "wedstrijd",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Wedstrijden"
  },
  {
    "type": "post",
    "url": "/wedstrijden",
    "title": "",
    "name": "PostWedstrijd",
    "group": "Wedstrijden",
    "description": "<p>Voegt wedstrijd toe</p>",
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
            "description": "<p>Id van wedstrijd</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Wedstrijden"
  },
  {
    "type": "post",
    "url": "/wedstrijden/upload",
    "title": "",
    "name": "PostWedstrijdImage",
    "group": "Wedstrijden",
    "description": "<p>Voegt foto aan wedstrijdverslag toe</p>",
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
            "type": "string",
            "optional": false,
            "field": "fotoUrl",
            "description": "<p>van de file</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Wedstrijden"
  },
  {
    "type": "put",
    "url": "/wedstrijden/:id",
    "title": "",
    "name": "PutWedstrijd",
    "group": "Wedstrijden",
    "description": "<p>Voegt wedstrijd toe</p>",
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
            "description": "<p>Unieke id van de wedstrijd</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "admin/src/routes.php",
    "groupTitle": "Wedstrijden"
  }
] });
