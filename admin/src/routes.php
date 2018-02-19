<?php
use Firebase\JWT\JWT;
use Tuupola\Base62;
// Routes
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});


//Options
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

/**
 * @api {get} /
 * @apiName homepage
 * @apiGroup Home
 */
$app->get('/', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.html', $args);
});

/**
  * @apiDefine admin Geregistreerde gebruikers
  * Enkel toegankelijk voor geregistreerde gebruikers
  */

  /**
    * @apiDefine none Alle gebruikers
    * Publiek toegankelijk
    */


/**
* @api {get} /ploegen Alle ploegen
* @apiName GetPloegen
* @apiGroup Ploegen
* @apiDescription Geeft alle ploegen van KSK Klinge terug
* @apiPermission none
* @apiSuccess {Object[]} ploegen Lijst van alle ploegen
* @apiSuccess {int} ploegen.ploeg_id Unieke id van de ploeg
* @apiSuccess {string} ploegen.naam Naam van de ploeg
* @apiSuccess {int} ploegen.leeftijdMax Maximum leeftijd van de spelers
* @apiSuccess {string} ploegen.trainer_1 Naam van de trainer
* @apiSuccess {string} ploegen.trainer_2 Naam van de (extra) trainer
* @apiSuccess {string} ploegen.telTrainer_1 Telefoonnummer van trainer_1
* @apiSuccess {string} ploegen.telTrainer_2 Telefoonnummer van trainer_2
* @apiSuccess {string} ploegen.mailTrainer_1 Email van trainer_1
* @apiSuccess {string} ploegen.mailTrainer_2 Email van trainer_2
* @apiSuccess {string} ploegen.trainingsuur Uur van aanvang van de trainingen
* @apiSuccess {string} ploegen.trainingsdagen Dagen van de trainingen
* @apiSuccess {string} ploegen.fotoUrl URL naar de ploegfoto
* @apiSuccess {string} ploegen.sponsor_id Id van de sponsor bij de ploeg
*/
$app->get('/ploegen', function ($request, $response, $args) {
   $sth = $this->db->prepare("SELECT * FROM ploegen ORDER BY ploeg_id");
   $sth->execute();
   $ploegen = $sth->fetchAll();
   return $this->response->withJson($ploegen);
});

/**
* @api {get} /ploegen/:id
* @apiName GetPloeg
* @apiGroup Ploegen
* @apiDescription Geeft een ploeg van KSK Klinge terug
* @apiPermission none
* @apiParam {Number} id Unieke id van de ploeg
* @apiSuccess {Object} ploeg Ploeg info
* @apiSuccess {int} ploeg.ploeg_id Unieke id van de ploeg
* @apiSuccess {string} ploeg.naam Naam van de ploeg
* @apiSuccess {int} ploeg.leeftijdMax Maximum leeftijd van de spelers
* @apiSuccess {string} ploeg.trainer_1 Naam van de trainer
* @apiSuccess {string} ploeg.trainer_2 Naam van de (extra) trainer
* @apiSuccess {string} ploeg.telTrainer_1 Telefoonnummer van trainer_1
* @apiSuccess {string} ploeg.telTrainer_2 Telefoonnummer van trainer_2
* @apiSuccess {string} ploeg.mailTrainer_1 Email van trainer_1
* @apiSuccess {string} ploeg.mailTrainer_2 Email van trainer_2
* @apiSuccess {string} ploeg.trainingsuur Uur van aanvang van de trainingen
* @apiSuccess {string} ploeg.trainingsdagen Dagen van de trainingen
* @apiSuccess {string} ploeg.fotoUrl URL naar de ploegfoto
* @apiSuccess {string} ploeg.sponsor_id Id van de sponsor bij de ploeg
*/
$app->get('/ploegen/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM ploegen WHERE ploeg_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $sth->execute();
    $todos = $sth->fetchObject();
    return $this->response->withJson($todos);
});

/**
 * @api {get} /ploegen/byName/:name
 * @apiName GetPloegByName
 * @apiGroup Ploegen
 * @apiDescription Geeft een ploeg van KSK Klinge terug
 * @apiPermission none
 * @apiParam {string} name Naam van de ploeg
 * @apiSuccess {Object} ploeg Ploeg info
 * @apiSuccess {int} ploeg.ploeg_id Unieke id van de ploeg
 * @apiSuccess {string} ploeg.naam Naam van de ploeg
 * @apiSuccess {int} ploeg.leeftijdMax Maximum leeftijd van de spelers
 * @apiSuccess {string} ploeg.trainer_1 Naam van de trainer
 * @apiSuccess {string} ploeg.trainer_2 Naam van de (extra) trainer
 * @apiSuccess {string} ploeg.telTrainer_1 Telefoonnummer van trainer_1
 * @apiSuccess {string} ploeg.telTrainer_2 Telefoonnummer van trainer_2
 * @apiSuccess {string} ploeg.mailTrainer_1 Email van trainer_1
 * @apiSuccess {string} ploeg.mailTrainer_2 Email van trainer_2
 * @apiSuccess {string} ploeg.trainingsuur Uur van aanvang van de trainingen
 * @apiSuccess {string} ploeg.trainingsdagen Dagen van de trainingen
 * @apiSuccess {string} ploeg.fotoUrl URL naar de ploegfoto
 * @apiSuccess {string} ploeg.sponsor_id Id van de sponsor bij de ploeg
 */
$app->get('/ploegen/byName/{name}', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM ploegen WHERE naam=:name");
    $sth->bindParam("name", $args['name']);
    $sth->execute();
    $todos = $sth->fetchObject();
    return $this->response->withJson($todos);
});


/**
 * @api {get} /ploegen/:id/spelers
 * @apiName GetSpelersOfTeam
 * @apiGroup Ploegen
 * @apiDescription Geeft de spelers van een ploeg van KSK Klinge terug
 * @apiPermission none
 * @apiParam {Number} id Unieke id van de ploeg
 * @apiSuccess {Object[]} spelers Lijst van spelers van een ploeg
 */
$app->get('/ploegen/{id}/spelers', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM speler WHERE ploeg_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $sth->execute();
    $todos = $sth->fetchAll();
    return $this->response->withJson($todos);
});

/**
 * @api {get} /ploegen/:id/wedstrijden
 * @apiName GetWedstrijdenOfTeam
 * @apiGroup Ploegen
 * @apiDescription Geeft de wedstrijden van een ploeg van KSK Klinge terug
 * @apiPermission none
 * @apiParam {Number} id Unieke id van de ploeg
 * @apiSuccess {Object[]} wedstrijden Lijst van wedstrijden van een ploeg
 */
$app->get('/ploegen/{id}/wedstrijden', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM wedstrijden WHERE ploeg_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $sth->execute();
    $todos = $sth->fetchAll();
    return $this->response->withJson($todos);
});

/**
 * @api {delete} /ploegen/:id
 * @apiName DeletePloeg
 * @apiGroup Ploegen
 * @apiDescription Verwijdert een ploeg van KSK Klinge
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de ploeg
 */
$app->delete('/ploegen/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM ploegen WHERE ploeg_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $rows = $sth->execute();
    return $this->response->withJson($rows);
});

/**
 * @api {put} /ploegen/:id
 * @apiName PutPloeg
 * @apiGroup Ploegen
 * @apiDescription Past ploeg van KSK Klinge aan
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de ploeg
 * @apiParam {Object} ploeg  Geüpdate ploeg-object
 */
$app->put('/ploegen/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE ploegen SET naam = :naam, trainer_1 = :trainer_1, telTrainer_1 = :telTrainer_1, trainer_2 = :trainer_2, telTrainer_2 = :telTrainer_2, trainingsuur = :trainingsuur, trainingsdagen = :trainingsdagen, fotoUrl = :fotoUrl, mailTrainer_2 = :mailTrainer_2, mailTrainer_1 = :mailTrainer_1, sponsor_id = :sponsor_id WHERE ploeg_id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("naam", $input['naam']);
    $sth->bindParam("trainer_1", $input['trainer_1']);
    $sth->bindParam("telTrainer_1", $input['telTrainer_1']);
    $sth->bindParam("telTrainer_2", $input['telTrainer_2']);
    $sth->bindParam("mailTrainer_1", $input['mailTrainer_1']);
    $sth->bindParam("mailTrainer_2", $input['mailTrainer_2']);
    $sth->bindParam("sponsor_id", $input['sponsor_id']);
    $sth->bindParam("trainer_2", $input['trainer_2']);
    $sth->bindParam("trainingsuur", $input['trainingsuur']);
    $sth->bindParam("trainingsdagen", $input['trainingsdagen']);
    $sth->bindParam("fotoUrl", $input['fotoUrl']);
    $sth->execute();
    return $this->response->withJson($args['id']);
});

/**
 * @api {post} /ploegen
 * @apiName DeletePloeg
 * @apiGroup Ploegen
 * @apiDescription Voegt ploeg toe
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de ploeg
 * @apiParam {Number} id  Id van de nieuwe ploeg
 */
$app->post('/ploegen', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO ploegen (naam, trainer_1, telTrainer_1, mailTrainer_1, trainer_2, telTrainer_2, mailTrainer_2, leeftijdMax, trainingsuur, trainingsdagen, fotoUrl, sponsor_id ) VALUES (:naam, :trainer_1, :telTrainer_1, :mailTrainer_1, :trainer_2, :telTrainer_2, :mailTrainer_2, :leeftijdMax, :trainingsuur, :trainingsdagen, :fotoUrl, :sponsor_id)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("naam", $input['naam']);
    $sth->bindParam("trainer_1", $input['trainer_1']);
    $sth->bindParam("telTrainer_1", $input['telTrainer_1']);
    $sth->bindParam("telTrainer_2", $input['telTrainer_2']);
    $sth->bindParam("mailTrainer_1", $input['mailTrainer_1']);
    $sth->bindParam("mailTrainer_2", $input['mailTrainer_2']);
    $sth->bindParam("sponsor_id", $input['sponsor_id']);
    $sth->bindParam("trainer_2", $input['trainer_2']);
    $sth->bindParam("trainingsuur", $input['trainingsuur']);
    $sth->bindParam("trainingsdagen", $input['trainingsdagen']);
    $sth->bindParam("fotoUrl", $input['fotoUrl']);
    $sth->bindParam("leeftijdMax", $input['leeftijdMax']);
    $sth->execute();
    $id = $this->db->lastInsertId();
    return $this->response->withJson($id);
});

/**
* @api {post} /ploegen/upload
* @apiName PostPloegImage
* @apiGroup Ploegen
* @apiDescription Voegt foto van een ploeg toe
* @apiPermission admin
* @apiSuccess {string} fotoUrl van de file
*/
$app->post('/ploegen/upload', function ($request, $response) {
  $directory = $this->get('upload_directory').'/images/ploegen';
  $files = $request->getUploadedFiles();

        if (empty($files['file'])) {
            throw new \RuntimeException('Expected a new file');
        }

        $file = $files['file'];
        if ($file->getError() === UPLOAD_ERR_OK) {
            $fileName = moveUploadedFile($directory, $file);
            return $this->response->withJson($fileName)->withStatus(200);
        }

        return $this->response
            ->withJson([
                'error' => 'Nothing was uploaded'
            ])
            ->withStatus(415);
});

/**
* @api {get} /spelers Alle spelers
* @apiName GetSpelers
* @apiGroup Spelers
* @apiDescription Geeft alle spelers van KSK Klinge terug
* @apiPermission none
* @apiSuccess {Object[]} spelers Lijst van alle spelers
*/
$app->get('/spelers', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT speler.naam, speler.voornaam, speler.email, speler.telefoonnummer, speler.geboortedatum, speler.adres, speler.ingeschreven, speler.fotoUrl, speler.positie, speler.doelpunten, speler.ploeg_id, speler.speler_id, ploegen.naam as ploegNaam  FROM speler INNER JOIN ploegen on speler.ploeg_id = ploegen.ploeg_id ORDER BY speler.ploeg_id");
        $sth->execute();
        $ploegen = $sth->fetchAll();

        return $this->response->withJson($ploegen);
});

/**
 * @api {post} /email
 * @apiName GetAllBirthdays
 * @apiGroup Utilities
 * @apiDescription Verstuurt een email
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de ploeg
 * @apiParam {Object} ploeg  Geüpdate ploeg-object
 */
$app->get('/spelers/birthday', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT *  FROM speler WHERE MONTH(geboortedatum) = MONTH(NOW()) AND DAY(geboortedatum) = DAY(NOW()) ORDER BY geboortedatum DESC");
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

/**
* @api {get} /spelers/:id Alle spelers
* @apiName GetSpeler
* @apiGroup Spelers
* @apiDescription Geeft alle spelers van KSK Klinge terug
* @apiPermission none
* @apiParam {Number} id Unieke id van de speler
* @apiSuccess {Object[]} spelers Lijst van alle spelers
*/
$app->get('/spelers/{id}', function ($request, $response, $args) {

         $sth = $this->db->prepare("SELECT speler.naam, speler.voornaam, speler.email, speler.telefoonnummer, speler.geboortedatum, speler.adres, speler.ingeschreven, speler.fotoUrl, speler.positie, speler.doelpunten, speler.ploeg_id, speler.speler_id, ploegen.naam as ploegNaam  FROM speler INNER JOIN ploegen on speler.ploeg_id = ploegen.ploeg_id WHERE speler.speler_id=:id");
        $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
        $sth->execute();
        $todos = $sth->fetchObject();
        return $this->response->withJson($todos);
    });

/**
* @api {post} /spelers/upload
* @apiName PostSpelerImage
* @apiGroup Spelers
* @apiDescription Voegt foto van een speler toe
* @apiPermission admin
* @apiSuccess {string} fotoUrl van de file
*/
$app->post('/spelers/upload', function ($request, $response) {
  $directory = $this->get('upload_directory').'/images/spelers';
  $files = $request->getUploadedFiles();

        if (empty($files['file'])) {
            throw new \RuntimeException('Expected a new file');
        }

        $file = $files['file'];
        if ($file->getError() === UPLOAD_ERR_OK) {
            $fileName = moveUploadedFile($directory, $file);

            return $this->response->withJson($fileName)->withStatus(200);
        }

        return $this->response
            ->withJson([
                'error' => 'Nothing was uploaded'
            ])
            ->withStatus(415);
});

/**
 * @api {delete} /spelers/:id
 * @apiName DeleteSpeler
 * @apiGroup Spelers
 * @apiDescription Verwijdert een speler van KSK Klinge
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de speler
 */
$app->delete('/spelers/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM speler WHERE speler_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $rows = $sth->execute();
    return $this->response->withJson($rows);
});

/**
 * @api {put} /spelers/:id
 * @apiName PutSpeler
 * @apiGroup Spelers
 * @apiDescription Past speler van KSK Klinge aan
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de speler
 * @apiParam {Number} id  Id van speler
 */
$app->put('/spelers/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE speler SET naam = :naam, voornaam = :voornaam, geboortedatum = :geboortedatum, email = :email, telefoonnummer = :telefoonnummer, adres = :adres, ingeschreven = :ingeschreven, fotoUrl = :fotoUrl, positie = :positie, doelpunten = :doelpunten, ploeg_id = :ploeg_id WHERE speler_id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("naam", $input['naam']);
    $sth->bindParam("voornaam", $input['voornaam']);
    $sth->bindParam("geboortedatum", $input['geboortedatum']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("telefoonnummer", $input['telefoonnummer']);
    $sth->bindParam("adres", $input['adres']);
    $sth->bindParam("ingeschreven", $input['ingeschreven']);
    $sth->bindParam("fotoUrl", $input['fotoUrl']);
    $sth->bindParam("positie", $input['positie']);
    $sth->bindParam("ploeg_id", $input['ploeg_id']);
    $sth->bindParam("doelpunten", $input['doelpunten']);
    $sth->execute();
    return $this->response->withJson($args['id']);
});

/**
 * @api {post} /spelers
 * @apiName PostSpeler
 * @apiGroup Spelers
 * @apiDescription Voegt speler toe
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de speler
 * @apiParam {Number} id  Id van speler
 */
$app->post('/spelers', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO speler (naam, voornaam, geboortedatum, email, adres, ingeschreven, ploeg_id, telefoonnummer, doelpunten, positie, fotoUrl ) VALUES (:naam, :voornaam, :geboortedatum, :email, :adres, :ingeschreven, :ploeg_id, :telefoonnummer, :doelpunten, :positie, :fotoUrl)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("naam", $input['naam']);
    $sth->bindParam("voornaam", $input['voornaam']);
    $sth->bindParam("geboortedatum", $input['geboortedatum']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("adres", $input['adres']);
    $sth->bindParam("ingeschreven", $input['ingeschreven']);
    $sth->bindParam("ploeg_id", $input['ploeg_id']);
    $sth->bindParam("telefoonnummer", $input['telefoonnummer']);
    $sth->bindParam("doelpunten", $input['doelpunten']);
    $sth->bindParam("positie", $input['positie']);
    $sth->bindParam("fotoUrl", $input['fotoUrl']);
    $sth->execute();
    $id = $this->db->lastInsertId();
    return $this->response->withJson($id);

});

/**
* @api {get} /wedstrijden Alle wedstrijden
* @apiName GetWedstrijden
* @apiGroup Wedstrijden
* @apiDescription Geeft alle wedstrijden van KSK Klinge terug
* @apiPermission none
* @apiSuccess {Object[]} wedstrijden Lijst van alle wedstrijden
*/
$app->get('/wedstrijden', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT wedstrijden.wedstrijd_id, wedstrijden.thuisSpelend, wedstrijden.tegenstander, wedstrijden.datum, wedstrijden.verslag, wedstrijden.doelpuntenKSK, wedstrijden.doelpuntenTegenstander, wedstrijden.ploeg_id, ploegen.naam as ploegNaam  FROM wedstrijden INNER JOIN ploegen on wedstrijden.ploeg_id = ploegen.ploeg_id ORDER BY wedstrijden.datum");
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

/**
* @api {get} /wedstrijden/senioren/lastGame Alle wedstrijden
* @apiName GetWedstrijdenSeniorenLastGame
* @apiGroup Wedstrijden
* @apiDescription Geeft laatste wedstrijd van senioren van KSK Klinge terug
* @apiPermission none
* @apiSuccess {Object} wedstrijd
*/
$app->get('/wedstrijden/senioren/lastGame', function ($request, $response, $args) {
    $ploegNaam = "Senioren";
    $sth = $this->db->prepare("SELECT wedstrijden.wedstrijd_id, wedstrijden.thuisSpelend, wedstrijden.tegenstander, wedstrijden.datum, wedstrijden.verslag, wedstrijden.doelpuntenKSK, wedstrijden.doelpuntenTegenstander, wedstrijden.ploeg_id, ploegen.naam as ploegNaam  FROM wedstrijden INNER JOIN ploegen on wedstrijden.ploeg_id = ploegen.ploeg_id WHERE ploegen.naam=:naam ORDER BY wedstrijden.datum DESC LIMIT 1");
    $sth->bindParam("naam", $ploegNaam);
    $sth->execute();
    $todos = $sth->fetchObject();
    return $this->response->withJson($todos);
});

/**
* @api {get} /wedstrijden/:id Alle wedstrijden
* @apiName GetWedstrijd
* @apiGroup Wedstrijden
* @apiDescription Geeft wedstrijd van KSK Klinge terug
* @apiPermission none
* @apiParam {Number} id Unieke id van de wedstrijd
* @apiSuccess {Object} wedstrijd
*/
$app->get('/wedstrijden/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT wedstrijden.wedstrijd_id, wedstrijden.thuisSpelend, wedstrijden.tegenstander, wedstrijden.datum, wedstrijden.verslag, wedstrijden.doelpuntenKSK, wedstrijden.doelpuntenTegenstander, wedstrijden.ploeg_id, ploegen.naam as ploegNaam  FROM wedstrijden INNER JOIN ploegen on wedstrijden.ploeg_id = ploegen.ploeg_id WHERE wedstrijden.wedstrijd_id=:id ORDER BY wedstrijden.datum");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $sth->execute();
    $todos = $sth->fetchObject();
    return $this->response->withJson($todos);
});

/**
 * @api {post} /wedstrijden
 * @apiName PostWedstrijd
 * @apiGroup Wedstrijden
 * @apiDescription Voegt wedstrijd toe
 * @apiPermission admin
 * @apiParam {Number} id  Id van wedstrijd
 */
$app->post('/wedstrijden', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO wedstrijden (thuisSpelend, tegenstander, datum, verslag, doelpuntenKSK, doelpuntenTegenstander, ploeg_id) VALUES (:thuisSpelend, :tegenstander, :datum, :verslag, :doelpuntenKSK, :doelpuntenTegenstander, :ploeg_id)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("thuisSpelend", $input['thuisSpelend']);
    $sth->bindParam("tegenstander", $input['tegenstander']);
    $sth->bindParam("datum", $input['datum']);
    $sth->bindParam("verslag", $input['verslag']);
    $sth->bindParam("doelpuntenKSK", $input['doelpuntenKSK']);
    $sth->bindParam("doelpuntenTegenstander", $input['doelpuntenTegenstander']);
    $sth->bindParam("ploeg_id", $input['ploeg_id']);
    $sth->execute();
    $id = $this->db->lastInsertId();
    return $this->response->withJson($id);
});

/**
 * @api {put} /wedstrijden/:id
 * @apiName PutWedstrijd
 * @apiGroup Wedstrijden
 * @apiDescription Voegt wedstrijd toe
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de wedstrijd
 * @apiParam {Number} id  Id van wedstrijd
 */
$app->put('/wedstrijden/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE wedstrijden SET thuisSpelend = :thuisSpelend, tegenstander = :tegenstander, datum = :datum, verslag = :verslag, doelpuntenKSK = :doelpuntenKSK, doelpuntenTegenstander = :doelpuntenTegenstander,  ploeg_id = :ploeg_id WHERE wedstrijd_id=:id";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("thuisSpelend", $input['thuisSpelend']);
    $sth->bindParam("tegenstander", $input['tegenstander']);
    $sth->bindParam("datum", $input['datum']);
    $sth->bindParam("verslag", $input['verslag']);
    $sth->bindParam("doelpuntenKSK", $input['doelpuntenKSK']);
    $sth->bindParam("doelpuntenTegenstander", $input['doelpuntenTegenstander']);
    $sth->bindParam("ploeg_id", $input['ploeg_id']);
    $sth->execute();
    return $this->response->withJson($args['id']);
});

/**
 * @api {delete} /wedstrijden/:id
 * @apiName DeleteWedstrijd
 * @apiGroup Wedstrijden
 * @apiDescription Verwijdert wedstrijd
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de wedstrijd
 * @apiSuccess {Number} id  Id van wedstrijd
 */
$app->delete('/wedstrijden/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM wedstrijden WHERE wedstrijd_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $rows = $sth->execute();
    return $this->response->withJson($rows);
});

/**
* @api {post} /wedstrijden/upload
* @apiName PostWedstrijdImage
* @apiGroup Wedstrijden
* @apiDescription Voegt foto aan wedstrijdverslag toe
* @apiPermission none
* @apiSuccess {string} fotoUrl van de file
*/
$app->post('/wedstrijden/upload', function ($request, $response) {
  $directory = $this->get('upload_directory').'/images/wedstrijden';

  $files = $request->getUploadedFiles();

        if (empty($files['file'])) {
            throw new \RuntimeException('Expected a new file');
        }

        $file = $files['file'];

        if ($file->getError() === UPLOAD_ERR_OK) {

            $fileName = moveUploadedFile($directory, $file);

            $resp = (object) [
    'link' => "assets/uploads/images/wedstrijden/" . $fileName
  ];
            return $this->response->withJson($resp)->withStatus(200);
        }

        return $this->response
            ->withJson([
                'error' => 'Nothing was uploaded'
            ])
            ->withStatus(415);
});

/**
* @api {get} /nieuws Alle nieuws
* @apiName GetNieuws
* @apiGroup Nieuws
* @apiDescription Geeft alle nieuws van KSK Klinge terug
* @apiPermission none
* @apiSuccess {Object[]} nieuws Lijst van alle nieuws
*/
$app->get('/nieuws', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT * FROM nieuws ORDER BY datum");
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

/**
* @api {get} /nieuws/latest Alle laatste nieuws
* @apiName GetNieuwsLatest
* @apiGroup Nieuws
* @apiDescription Geeft alle nieuws van KSK Klinge terug van de voorbije 60 dagen
* @apiPermission none
* @apiSuccess {Object[]} nieuws Lijst van alle nieuws
*/
$app->get('/nieuws/latest', function ($request, $response, $args) {
        $d = date('Y-m-j');
        $newdate = strtotime ( '-60 day' , strtotime ( $d ) ) ;
        $newdate = date ( 'Y-m-j' , $newdate );
        $eventType= "evenementen";
        $sth = $this->db->prepare("SELECT * FROM nieuws WHERE DATEDIFF(NOW(), nieuws.datum) < nieuws.geldigheid AND nieuws.newsType != :eventType ORDER BY nieuws.datum DESC LIMIT 3");
        $sth->bindParam("eventType", $eventType);
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

/**
* @api {get} /nieuws/club Alle clubnieuws
* @apiName GetNieuwsClub
* @apiGroup Nieuws
* @apiDescription Geeft alle clubnieuws van KSK Klinge terug van de voorbije 150 dagen
* @apiPermission none
* @apiSuccess {Object[]} nieuws Lijst van alle nieuws
*/
$app->get('/nieuws/club', function ($request, $response, $args) {
        $d = date('Y-m-j');
        $newdate = strtotime ( '-150 day' , strtotime ( $d ) ) ;
        $newdate = date ( 'Y-m-j' , $newdate );
        $eventType= "club";
      $sth = $this->db->prepare("SELECT * FROM nieuws WHERE DATEDIFF(NOW(), nieuws.datum) < nieuws.geldigheid AND nieuws.newsType= :eventType ORDER BY nieuws.datum DESC");
        $sth->bindParam("eventType", $eventType);
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

/**
* @api {get} /nieuws/jeugd Alle jeugdnieuws
* @apiName GetNieuwsJeugd
* @apiGroup Nieuws
* @apiDescription Geeft alle jeugdnieuws van KSK Klinge terug van de voorbije 150 dagen
* @apiPermission none
* @apiSuccess {Object[]} nieuws Lijst van alle nieuws
*/
$app->get('/nieuws/jeugd', function ($request, $response, $args) {
        $d = date('Y-m-j');
        $newdate = strtotime ( '-150 day' , strtotime ( $d ) ) ;
        $newdate = date ( 'Y-m-j' , $newdate );

        $eventType= "jeugd";
        $sth = $this->db->prepare("SELECT * FROM nieuws WHERE DATEDIFF(NOW(), nieuws.datum) < nieuws.geldigheid AND nieuws.newsType= :eventType ORDER BY nieuws.datum DESC");

        $sth->bindParam("eventType", $eventType);

        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

/**
* @api {get} /nieuws/:id Alle laatste nieuws
* @apiName GetNieuwsItem
* @apiGroup Nieuws
* @apiDescription Geeft nieuwsbericht van KSK Klinge terug
* @apiPermission none
* @apiParam {Number} id Unieke id van het nieuws
* @apiSuccess {Object} nieuws
*/
$app->get('/nieuws/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM nieuws WHERE nieuws_id=:id ORDER BY nieuws.datum");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $sth->execute();
    $todos = $sth->fetchObject();
    return $this->response->withJson($todos);
});

/**
 * @api {post} /nieuws
 * @apiName PostNieuws
 * @apiGroup Nieuws
 * @apiDescription Voegt nieuws toe
 * @apiPermission admin
 * @apiParam {Number} id  Id van nieuws
 */
$app->post('/nieuws', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO nieuws (titel, inhoud, datum, newsType, eventDate, kanInschrijven, geldigheid) VALUES (:titel, :inhoud, :datum, :newsType, :eventDate, :kanInschrijven, :geldigheid)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("titel", $input['titel']);
    $sth->bindParam("inhoud", $input['inhoud']);
    $sth->bindParam("datum", $input['datum']);
    $sth->bindParam("newsType", $input['newsType']);
    $sth->bindParam("eventDate", $input['eventDate']);
    $sth->bindParam("kanInschrijven", $input['kanInschrijven']);
    $sth->bindParam("geldigheid", $input['geldigheid']);
    $sth->execute();
    $id = $this->db->lastInsertId();
    return $this->response->withJson($id);

});

/**
 * @api {put} /nieuws/:id
 * @apiName PutNieuws
 * @apiGroup Nieuws
 * @apiDescription Voegt nieuws toe
 * @apiPermission admin
 * @apiParam {Number} id  Id van nieuws
 */
$app->put('/nieuws/[{id}]', function ($request, $response, $args) {
    var_dump($request);
    var_dump($response);
    var_dump($args);
    $input = $request->getParsedBody();
    $sql = "UPDATE nieuws SET titel = :titel, inhoud = :inhoud, datum = :datum, eventDate = :eventDate, newsType =:newsType, geldigheid =:geldigheid, kanInschrijven =:kanInschrijven WHERE nieuws_id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("titel", $input['titel']);
    $sth->bindParam("inhoud", $input['inhoud']);
    $sth->bindParam("datum", $input['datum']);
    $sth->bindParam("eventDate", $input['eventDate']);
    $sth->bindParam("newsType", $input['newsType']);
    $sth->bindParam("kanInschrijven", $input['kanInschrijven']);
    $sth->bindParam("geldigheid", $input['geldigheid']);
    $sth->execute();
    return $this->response->withJson($args['id']);
});

/**
 * @api {delete} /nieuws/:id
 * @apiName DeleteNieuws
 * @apiGroup Nieuws
 * @apiDescription Voegt nieuws toe
 * @apiPermission admin
 * @apiParam {Number} id  Id van nieuws
 */
$app->delete('/nieuws/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM nieuws WHERE nieuws_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $rows = $sth->execute();
    return $this->response->withJson($rows);
});

/**
* @api {post} /nieuws/upload
* @apiName PostNewsImage
* @apiGroup Nieuws
* @apiDescription Voegt foto aan nieuws toe
* @apiPermission none
* @apiSuccess {string} fotoUrl van de file
*/
$app->post('/nieuws/upload', function ($request, $response) {
  $directory = $this->get('upload_directory').'/images/nieuws';
  $files = $request->getUploadedFiles();

        if (empty($files['file'])) {
            throw new \RuntimeException('Expected a new file');
        }

        $file = $files['file'];
        if ($file->getError() === UPLOAD_ERR_OK) {
            $fileName = moveUploadedFile($directory, $file);
            $resp = (object) [
              'link' => "assets/uploads/images/nieuws/" . $fileName
            ];
            return $this->response->withJson($resp)->withStatus(200);
        }

        return $this->response
            ->withJson([
                'error' => 'Nothing was uploaded'
            ])
            ->withStatus(415);
});

/**
* @api {get} /events/upcoming Alle aankomende evenementen
* @apiName GetEventsUpcoming
* @apiGroup Nieuws
* @apiDescription Geeft alle aankomende evenementen van KSK Klinge
* @apiPermission none
* @apiSuccess {Object[]} nieuws Lijst van alle evenementen (maximaal 3)
*/
$app->get('/events/upcoming', function ($request, $response, $args) {
        $d = date('Y-m-j');
        $newdate = strtotime ( '-14 day' , strtotime ( $d ) ) ;
        $newdate = date ( 'Y-m-j' , $newdate );
        $eventType= "evenementen";
        $sth = $this->db->prepare("SELECT * FROM nieuws WHERE eventDate > :newDate AND newsType= :eventType ORDER BY eventDate LIMIT 3");
        $sth->bindParam("newDate", $newdate);
        $sth->bindParam("eventType", $eventType);
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

/**
* @api {get} /events/upcomingAll Alle aankomende evenementen
* @apiName GetEventsUpcomingAll
* @apiGroup Nieuws
* @apiDescription Geeft alle aankomende evenementen van KSK Klinge
* @apiPermission none
* @apiSuccess {Object[]} nieuws Lijst van alle evenementen
*/
$app->get('/events/upcomingAll', function ($request, $response, $args) {
        $d = date('Y-m-j');
        $eventType= "evenementen";
        $sth = $this->db->prepare("SELECT * FROM nieuws WHERE eventDate >= :newDate AND newsType= :eventType ORDER BY eventDate");
        $sth->bindParam("newDate", $d);
        $sth->bindParam("eventType", $eventType);
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

/**
* @api {get} /events/pastLastYear Alle voorbije evenementen
* @apiName GetEventsPastLastYear
* @apiGroup Nieuws
* @apiDescription Geeft alle voorbije evenementen van KSK Klinge van het afgelopen jaar
* @apiPermission none
* @apiSuccess {Object[]} nieuws Lijst van alle evenementen
*/
$app->get('/events/pastLastYear', function ($request, $response, $args) {
        $d = date('Y-m-j');
        $newdate = strtotime ( '-150 day' , strtotime ( $d ) ) ;
        $newdate = date ( 'Y-m-j' , $newdate );
        $eventType= "evenementen";
        $sth = $this->db->prepare("SELECT * FROM nieuws WHERE eventDate < :newDate and eventDate > :oldDate AND newsType= :eventType ORDER BY eventDate");
        $sth->bindParam("newDate", $d);
        $sth->bindParam("oldDate", $newdate);
        $sth->bindParam("eventType", $eventType);
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});



$app->get('/sponsors', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT *  FROM sponsors ORDER BY sponsors.isHoofdsponsor DESC");
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

$app->get('/sponsors/main', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT *  FROM sponsors WHERE sponsors.isHoofdsponsor = 1 ORDER BY sponsors.sponsor_id");
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

$app->get('/sponsors/{id}', function ($request, $response, $args) {

        $sth = $this->db->prepare("SELECT *  FROM sponsors WHERE sponsors.sponsor_id=:id ORDER BY sponsors.sponsor_id");
        $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
        $sth->execute();
        $todos = $sth->fetchObject();
        return $this->response->withJson($todos);
    });



$app->post('/sponsors', function ($request, $response) {
    $input = $request->getParsedBody();

    $sql = "INSERT INTO sponsors (naam, website, email, telnr, fotoUrl, adres, slogan, isHoofdsponsor) VALUES (:naam, :website, :email, :telnr, :fotoUrl, :adres, :slogan, :isHoofdsponsor)";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("naam", $input['naam']);
    $sth->bindParam("website", $input['website']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("telnr", $input['telnr']);
    $sth->bindParam("fotoUrl", $input['fotoUrl']);
    $sth->bindParam("adres", $input['adres']);
    $sth->bindParam("slogan", $input['slogan']);
    $sth->bindParam("isHoofdsponsor", $input['isHoofdsponsor']);
    $sth->execute();
    $id = $this->db->lastInsertId();
    return $this->response->withJson($id);

});

// Update todo with given id
$app->put('/sponsors/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE sponsors SET naam = :naam, email = :email, website = :website, fotoUrl = :fotoUrl, telnr = :telnr, adres = :adres,  slogan = :slogan, isHoofdsponsor = :isHoofdsponsor WHERE sponsor_id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("naam", $input['naam']);
    $sth->bindParam("website", $input['website']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("telnr", $input['telnr']);
    $sth->bindParam("fotoUrl", $input['fotoUrl']);
    $sth->bindParam("adres", $input['adres']);
    $sth->bindParam("slogan", $input['slogan']);
    $sth->bindParam("isHoofdsponsor", $input['isHoofdsponsor']);
    $sth->execute();
    return $this->response->withJson($args['id']);
});

// DELETE a todo with given id
$app->delete('/sponsors/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM sponsors WHERE sponsor_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $rows = $sth->execute();
    return $this->response->withJson($rows);
});

/**
* @api {post} /sponsors/upload
* @apiName PostSponsorImage
* @apiGroup Sponsor
* @apiDescription Voegt foto van een sponsor toe
* @apiPermission admin
* @apiSuccess {string} fotoUrl van de file
*/
$app->post('/sponsors/upload', function ($request, $response) {
  $directory = $this->get('upload_directory').'/images/sponsors';
  $files = $request->getUploadedFiles();

        if (empty($files['file'])) {
            throw new \RuntimeException('Expected a new file');
        }

        $file = $files['file'];
        if ($file->getError() === UPLOAD_ERR_OK) {
            $fileName = moveUploadedFile($directory, $file);

            return $this->response->withJson($fileName)->withStatus(200);
        }

        return $this->response
            ->withJson([
                'error' => 'Nothing was uploaded'
            ])
            ->withStatus(415);
});

/**
* @api {get} /signups Alle signups
* @apiName GetSignups
* @apiGroup Signups
* @apiDescription Geeft alle leden van nieuwsbrief KSK Klinge terug
* @apiPermission admin
* @apiSuccess {Object[]} nieuws Lijst van alle signups
*/
$app->get('/signups', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT * FROM signups");
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

/**
* @api {get} /nieuws/:id Alle laatste nieuws
* @apiName GetNieuwsItem
* @apiGroup Nieuws
* @apiDescription Geeft nieuwsbericht van KSK Klinge terug
* @apiPermission none
* @apiParam {Number} id Unieke id van het nieuws
* @apiSuccess {Object} nieuws
*/
$app->get('/signups/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM signups WHERE signup_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $sth->execute();
    $todos = $sth->fetchObject();
    return $this->response->withJson($todos);
});

/**
 * @api {post} /nieuws
 * @apiName PostNieuws
 * @apiGroup Nieuws
 * @apiDescription Voegt nieuws toe
 * @apiPermission admin
 * @apiParam {Number} id  Id van nieuws
 */
$app->post('/signups', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO signups (datum, email, voornaam, naam) VALUES (NOW(), :email, :voornaam, :naam)";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("voornaam", $input['voornaam']);
    $sth->bindParam("naam", $input['naam']);
    $sth->execute();
    $id = $this->db->lastInsertId();
    return $this->response->withJson($id);

});

/**
 * @api {post} /nieuws
 * @apiName PostNieuws
 * @apiGroup Nieuws
 * @apiDescription Voegt nieuws toe
 * @apiPermission admin
 * @apiParam {Number} id  Id van nieuws
 */
$app->post('/signups/newSignup', function ($request, $response) {
    $input = $request->getParsedBody();
    $sthGet = $this->db->prepare("SELECT * FROM signups WHERE email=:email");
    $sthGet->bindParam("email", $input['email']);
    $sthGet->execute();
    $todos = $sthGet->fetchObject();

    if(!$todos) {
      $sql = "INSERT INTO signups (datum, email, voornaam, naam) VALUES (NOW(), :email, :voornaam, :naam)";
      $sth = $this->db->prepare($sql);
      $sth->bindParam("email", $input['email']);
      $sth->bindParam("voornaam", $input['voornaam']);
      $sth->bindParam("naam", $input['naam']);
      $sth->execute();
      $id = $this->db->lastInsertId();
      if ($id) {
        $response_array['status'] = 'success';
        return $this->response->withJson($response_array);
      } else {
        $response_array['status'] = 'error';
        $response_array['errorCode'] = 1;
        $response_array['errorString'] = 'Fout bij inschrijven';
        return $this->response->withJson($response_array);
      }

    } else {
      $response_array['status'] = 'error';
      $response_array['errorCode'] = 2;
      $response_array['errorString'] = 'Reeds ingeschreven';
      return $this->response->withJson($response_array);
    }


});

/**
 * @api {put} /nieuws/:id
 * @apiName PutNieuws
 * @apiGroup Nieuws
 * @apiDescription Voegt nieuws toe
 * @apiPermission admin
 * @apiParam {Number} id  Id van nieuws
 */
$app->put('/signups/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE signups SET email = :email, voornaam = :voornaam, naam = :naam WHERE signup_id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("voornaam", $input['voornaam']);
    $sth->bindParam("naam", $input['naam']);
    $sth->execute();
    return $this->response->withJson($args['id']);
});

/**
 * @api {delete} /nieuws/:id
 * @apiName DeleteNieuws
 * @apiGroup Nieuws
 * @apiDescription Voegt nieuws toe
 * @apiPermission admin
 * @apiParam {Number} id  Id van nieuws
 */
$app->delete('/signups/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM signups WHERE signup_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $rows = $sth->execute();
    return $this->response->withJson($rows);
});




/**
 * @api {post} /email
 * @apiName CreateEmail
 * @apiGroup Utilities
 * @apiDescription Verstuurt een email
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de ploeg
 * @apiParam {Object} ploeg  Geüpdate ploeg-object
 */
$app->post('/email', function ($request, $response) {
    $input = $request->getParsedBody();

    $errors = '';
    if(empty($errors)) {
    	$visitorName = htmlspecialchars($input['firstName']) . ' ' . htmlspecialchars($input['lastName']);
    	$visitorMail = htmlspecialchars($input['email']);
    	$visitorMessage = htmlspecialchars($input['subjectMail']);
    	$visitorPhone = htmlspecialchars($input['phone']);

    	$serverMail = 'info@kskklinge.be';
    	$to_email_cc = $visitorMail;
      $kskEmail = 'secretariaatkskklinge@telenet.be';
      $mailHeaderStyle = "<html>
                            <head>
                              <style>
                              body {
                                  background-color: linen;
                              }

                              h1 {
                                  text-align: center;
                                  color: #466289;
                                  background-color: #dbdfe6;
                                  padding: 40px;
                              }
                              .message {
                                color: #466289;
                                padding: 20px;
                                background-color: #fbedcf;
                                font-size: 16px;
                                font-style: italic;
                              }
                              .infoMessage {
                                color: #466289;
                                padding: 20px;
                                font-size: 14px;
                                font-weight:bold;
                              }

                              .list {
                                list-style: none;
                              }
                              .list li {
                                color: #466289;
                                font-size: 14px;
                              }
                              .list li a, .infoMessage a {
                                color: #466289;
                                text-decoration: underline;
                              }
                              .link {
                                color: #A0AEC1;
                                font-size: 12px;
                              }
                              .listIndent {
                                position: absolute;
                                left: 250px;
                                text-indent: 20px;
                              }
                              </style>
                            </head>
                            <body>";
    	$mailToKSKHeader = "<h1>Nieuwe mail ontvangen van $visitorName</h1>";

    	$mailToVisitorHeader = "<h1 >Uw vraag is met succes verzonden. Wij nemen zo spoedig mogelijk contact met u op.</h1>";

    	$contactKSK = "
    							<p class='infoMessage'>Je hebt een nieuw bericht ontvangen van <strong>$visitorName</strong>:</p>
    		    			<p class='message'>$visitorMessage</p>
    							<h4 class='infoMessage'>
                    Contactgegevens:
    								<ul class='list'>
                      <li >
                        <strong>Naam:</strong> <span class='listIndent'>$visitorName</span>
                      </li>
                      <li >
                        <strong>Mail:</strong> <span class='listIndent'>$visitorMail</span>
                      </li>
                      <li >
                        <strong>Telefoonnummer:</strong> <a href='tel:$visitorPhone'> <span class='listIndent'>$visitorPhone</span></a>
                      </li>
                    </ul>
    							</h4>";
    	$contactVisitor = "<p class='infoMessage'>Verzonden bericht:</p>
      <p class='message'>$visitorMessage</p>
      <h4 class='infoMessage'>
      Contactgegevens:
        <ul class='list'>
          <li >
            <strong>Naam:</strong> $visitorName
          </li>
          <li >
            <strong>Mail:</strong> $visitorMail
          </li>
          <li >
            <strong>Telefoonnummer:</strong> <a href='tel:$visitorPhone'> $visitorPhone</a>
          </li>
        </ul>
      </h4>
      <p class='infoMessage'>
      Wij nemen zo snel mogelijk contact met u op! Voor dringende zaken kan u ons ook steeds bellen of kom gerust eens langs in onze kantine,
      </p>
      <p class='infoMessage'>
      Bestuur KSK Klinge <br>
      <a class='link' href='http://www.kskklinge.be/club/info'>Website KSK Klinge</a>
      </p>";

    	$emailSubjectKSK = "KSK website - Nieuw bericht van $visitorName";
    	$emailSubjectVisitor= "Uw bericht is succesvol verzonden";

    	$emailBodyKSK = "$mailHeaderStyle";
    	$emailBodyKSK .= "$mailToKSKHeader $contactKSK";
    	$emailBodyKSK .= '</body></html>';

    	$emailBodyVisitor= $mailHeaderStyle;
    	$emailBodyVisitor .= "$mailToVisitorHeader $contactVisitor";
    	$emailBodyVisitor .= '</body></html>';

    	$headers = "MIME-Version: 1.0\r\n";
    	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
      $headers .= "Return-Path: $serverMail\r\n";
	    $headers .= "X-Mailer: PHP \r\n";

    	$headersKSK = $headers;
    	$headersVisitor = $headers;
    	$headersKSK .= "From: $serverMail\r\n";
      $headersKSK .= "Reply-To: $visitorMail\r\n";
    	$headersVisitor .= "From: $serverMail\r\n";
      $headersVisitor .= "Reply-To: $kskEmail\r\n";

      $mailToVisitorSent = false;
      $mailToKSKSent = false;
      if(@mail($kskEmail,$emailSubjectKSK,$emailBodyKSK,$headersKSK))
      {
        $mailToKSKSent = true;
      }

    	if(@mail($visitorMail,$emailSubjectVisitor,$emailBodyVisitor,$headersVisitor)) {
        $mailToVisitorSent = true;
      }

      if($mailToKSKSent && $mailToVisitorSent) {
        $response_array['status'] = 'success';
      	return $this->response->withJson($response_array);
      } else {
        $response_array['status'] = 'error';
        $response_array['errorCode'] = 'mail verzenden mislukt';
        $response_array['errorMessage'] = error_get_last()['message'];
      	return $this->response->withJson($response_array);
      }

    } else {
    	$response_array['status'] = 'error';
      $response_array['errorCode'] = 'mail verzenden mislukt';
    	return $this->response->withJson($response_array);
    }
});

/**
 * @api {post} /email
 * @apiName CreateEmail
 * @apiGroup Utilities
 * @apiDescription Verstuurt een email
 * @apiPermission admin
 * @apiParam {Number} id Unieke id van de ploeg
 * @apiParam {Object} ploeg  Geüpdate ploeg-object
 */
$app->post('/newsEmail', function ($request, $response) {
    $input = $request->getParsedBody();

    $errors = '';
    if(empty($errors)) {
    	$visitorName = htmlspecialchars($input['firstName']) . ' ' . htmlspecialchars($input['lastName']);
    	$visitorMail = htmlspecialchars($input['email']);
    	$visitorMessage = htmlspecialchars($input['subjectMail']);
    	$visitorPhone = htmlspecialchars($input['phone']);

    	$serverMail = 'info@kskklinge.be';
    	$to_email_cc = $visitorMail;
      $kskEmail = 'secretariaatkskklinge@telenet.be';
      $mailHeaderStyle = "<html>
                            <head>
                              <style>
                              body {
                                  background-color: linen;
                              }

                              h1 {
                                  text-align: center;
                                  color: #466289;
                                  background-color: #dbdfe6;
                                  padding: 40px;
                              }
                              .message {
                                color: #466289;
                                padding: 20px;
                                background-color: #fbedcf;
                                font-size: 16px;
                                font-style: italic;
                              }
                              .infoMessage {
                                color: #466289;
                                padding: 20px;
                                font-size: 14px;
                                font-weight:bold;
                              }

                              .list {
                                list-style: none;
                              }
                              .list li {
                                color: #466289;
                                font-size: 14px;
                              }
                              .list li a, .infoMessage a {
                                color: #466289;
                                text-decoration: underline;
                              }
                              .link {
                                color: #A0AEC1;
                                font-size: 12px;
                              }
                              .listIndent {
                                position: absolute;
                                left: 250px;
                                text-indent: 20px;
                              }
                              </style>
                            </head>
                            <body>";
    	$mailToKSKHeader = "<h1>Nieuwe mail ontvangen van $visitorName</h1>";

    	$mailToVisitorHeader = "<h1 >Uw vraag is met succes verzonden. Wij nemen zo spoedig mogelijk contact met u op.</h1>";

    	$contactKSK = "
    							<p class='infoMessage'>Je hebt een nieuw bericht ontvangen van <strong>$visitorName</strong>:</p>
    		    			<p class='message'>$visitorMessage</p>
    							<h4 class='infoMessage'>
                    Contactgegevens:
    								<ul class='list'>
                      <li >
                        <strong>Naam:</strong> <span class='listIndent'>$visitorName</span>
                      </li>
                      <li >
                        <strong>Mail:</strong> <span class='listIndent'>$visitorMail</span>
                      </li>
                      <li >
                        <strong>Telefoonnummer:</strong> <a href='tel:$visitorPhone'> <span class='listIndent'>$visitorPhone</span></a>
                      </li>
                    </ul>
    							</h4>";
    	$contactVisitor = "<p class='infoMessage'>Verzonden bericht:</p>
      <p class='message'>$visitorMessage</p>
      <h4 class='infoMessage'>
      Contactgegevens:
        <ul class='list'>
          <li >
            <strong>Naam:</strong> $visitorName
          </li>
          <li >
            <strong>Mail:</strong> $visitorMail
          </li>
          <li >
            <strong>Telefoonnummer:</strong> <a href='tel:$visitorPhone'> $visitorPhone</a>
          </li>
        </ul>
      </h4>
      <p class='infoMessage'>
      Wij nemen zo snel mogelijk contact met u op! Voor dringende zaken kan u ons ook steeds bellen of kom gerust eens langs in onze kantine,
      </p>
      <p class='infoMessage'>
      Bestuur KSK Klinge <br>
      <a class='link' href='http://www.kskklinge.be/club/info'>Website KSK Klinge</a>
      </p>";

    	$emailSubjectKSK = "KSK website - Nieuw bericht van $visitorName";
    	$emailSubjectVisitor= "Uw bericht is succesvol verzonden";

    	$emailBodyKSK = "$mailHeaderStyle";
    	$emailBodyKSK .= "$mailToKSKHeader $contactKSK";
    	$emailBodyKSK .= '</body></html>';

    	$emailBodyVisitor= $mailHeaderStyle;
    	$emailBodyVisitor .= "$mailToVisitorHeader $contactVisitor";
    	$emailBodyVisitor .= '</body></html>';

    	$headers = "MIME-Version: 1.0\r\n";
    	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
      $headers .= "Return-Path: $serverMail\r\n";
	    $headers .= "X-Mailer: PHP \r\n";

    	$headersKSK = $headers;
    	$headersVisitor = $headers;
    	$headersKSK .= "From: $serverMail\r\n";
      $headersKSK .= "Reply-To: $visitorMail\r\n";
    	$headersVisitor .= "From: $serverMail\r\n";
      $headersVisitor .= "Reply-To: $kskEmail\r\n";

      $mailToVisitorSent = false;
      $mailToKSKSent = false;
      if(@mail($kskEmail,$emailSubjectKSK,$emailBodyKSK,$headersKSK))
      {
        $mailToKSKSent = true;
      }

    	if(@mail($visitorMail,$emailSubjectVisitor,$emailBodyVisitor,$headersVisitor)) {
        $mailToVisitorSent = true;
      }

      if($mailToKSKSent && $mailToVisitorSent) {
        $response_array['status'] = 'success';
      	return $this->response->withJson($response_array);
      } else {
        $response_array['status'] = 'error';
        $response_array['errorCode'] = 'mail verzenden mislukt';
        $response_array['errorMessage'] = error_get_last()['message'];
      	return $this->response->withJson($response_array);
      }

    } else {
    	$response_array['status'] = 'error';
      $response_array['errorCode'] = 'mail verzenden mislukt';
    	return $this->response->withJson($response_array);
    }
});

/**
* @api {get} /login
* @apiName PostLogin
* @apiGroup Utilities
* @apiDescription Aanvraag tot login
* @apiPermission none
* @apiSuccess {string} login-token (JWT)
*/
$app->post('/login', function ($request, $response, $args) use ($container) {
    $input = $request->getParsedBody();

    $sql = "SELECT * FROM admin WHERE username = :username AND password = :password";
    $sth = $this->db->prepare($sql);
    $sth->bindParam("username", $input['username']);
    $sth->bindParam("password", $input['password']);
    $sth->execute();
    $user = $sth->fetchObject();
    if ($user) {
      $now = new DateTime();
      $future = new DateTime("+120 minutes");
      $server = $request->getServerParams();
      $jti = (new Base62)->encode(random_bytes(16));
      $payload = [
          "iat" => $now->getTimeStamp(),
          "exp" => $future->getTimeStamp(),
          "jti" => $jti,
          "username" => $user->username
      ];
      $secret = $this->get('settings');
      $token = JWT::encode($payload, $secret['secretPW'], "HS256");
      $data["token"] = $token;

      $data["expires"] = $future->getTimeStamp();
    } else {
      $data["error"] = "No username in db";
      $data["token"] = "";
    }
    return $this->response->withJson($data);
});
