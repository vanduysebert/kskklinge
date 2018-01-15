<?php
// Routes
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});



$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

$app->get('/', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");

    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});

// $app->get('/ploegen/[{id}]', function ($request, $response, $args) {
//         $sth = $this->db->prepare("SELECT * FROM ploegen WHERE ploeg_id=:id");
//         $sth->bindParam("ploeg_id", $args['id']);
//
//         // $sth->execute();
//         //
//         // $ploegen = $sth->fetchObject();
//         // return $this->response->withJson($ploegen);
// });

$app->get('/ploegen/{id}', function ($request, $response, $args) {

         $sth = $this->db->prepare("SELECT * FROM ploegen WHERE ploeg_id=:id");
        $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
        $sth->execute();
        $todos = $sth->fetchObject();
        return $this->response->withJson($todos);
    });

    $app->get('/ploegen/{id}/spelers', function ($request, $response, $args) {

             $sth = $this->db->prepare("SELECT * FROM speler WHERE ploeg_id=:id");
            $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
            $sth->execute();
            $todos = $sth->fetchAll();
            return $this->response->withJson($todos);
        });

$app->get('/ploegen', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT * FROM ploegen ORDER BY ploeg_id");
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

// Add a new todo
$app->post('/ploegen', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO ploegen (naam, trainer_1, telTrainer_1, trainer_2, telTrainer_2, trainingsuur, trainingsdagen, fotoUrl ) VALUES (:naam, :trainer_1, :telTrainer_1, :trainer_2, :telTrainer_2, :trainingsuur, :trainingsdagen, :fotoUrl)";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("naam", $input['naam']);
    $sth->bindParam("trainer_1", $input['trainer_1']);
    $sth->bindParam("telTrainer_1", $input['telTrainer_1']);
    $sth->bindParam("telTrainer_2", $input['telTrainer_2']);
    $sth->bindParam("trainer_2", $input['trainer_2']);
    $sth->bindParam("trainingsuur", $input['trainingsuur']);
    $sth->bindParam("trainingsdagen", $input['trainingsdagen']);
    $sth->bindParam("fotoUrl", $input['fotoUrl']);
    $sth->execute();
    $id = $this->db->lastInsertId();
    return $this->response->withJson($id);

});

// DELETE a todo with given id
$app->delete('/ploegen/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM ploegen WHERE ploeg_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $rows = $sth->execute();
    return $this->response->withJson($rows);
});

// Update todo with given id
$app->put('/ploegen/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE ploegen SET naam = :naam, trainer_1 = :trainer_1, telTrainer_1 = :telTrainer_1, trainer_2 = :trainer_2, telTrainer_2 = :telTrainer_2, trainingsuur = :trainingsuur, trainingsdagen = :trainingsdagen, fotoUrl = :fotoUrl WHERE ploeg_id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("naam", $input['naam']);
    $sth->bindParam("trainer_1", $input['trainer_1']);
    $sth->bindParam("telTrainer_1", $input['telTrainer_1']);
    $sth->bindParam("telTrainer_2", $input['telTrainer_2']);
    $sth->bindParam("trainer_2", $input['trainer_2']);
    $sth->bindParam("trainingsuur", $input['trainingsuur']);
    $sth->bindParam("trainingsdagen", $input['trainingsdagen']);
    $sth->bindParam("fotoUrl", $input['fotoUrl']);
    $sth->execute();
    return $this->response->withJson($args['id']);
});


$app->get('/spelers', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT speler.naam, speler.voornaam, speler.email, speler.telefoonnummer, speler.geboortedatum, speler.adres, speler.ingeschreven, speler.fotoUrl, speler.positie, speler.doelpunten, speler.ploeg_id, speler.speler_id, ploegen.naam as ploegNaam  FROM speler INNER JOIN ploegen on speler.ploeg_id = ploegen.ploeg_id ORDER BY speler.ploeg_id");
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

$app->get('/spelers/{id}', function ($request, $response, $args) {

         $sth = $this->db->prepare("SELECT speler.naam, speler.voornaam, speler.email, speler.telefoonnummer, speler.geboortedatum, speler.adres, speler.ingeschreven, speler.fotoUrl, speler.positie, speler.doelpunten, speler.ploeg_id, speler.speler_id, ploegen.naam as ploegNaam  FROM speler INNER JOIN ploegen on speler.ploeg_id = ploegen.ploeg_id WHERE speler.speler_id=:id");
        $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
        $sth->execute();
        $todos = $sth->fetchObject();
        return $this->response->withJson($todos);
    });

$app->post('/spelers/upload', function ($request, $response) {
  $directory = $this->get('upload_directory').'\images\spelers';
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

$app->post('/ploegen/upload', function ($request, $response) {
  $directory = $this->get('upload_directory').'\images\ploegen';
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

// DELETE a todo with given id
$app->delete('/spelers/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM speler WHERE speler_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $rows = $sth->execute();
    return $this->response->withJson($rows);
});

// Update todo with given id
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

$app->get('/wedstrijden', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT wedstrijden.wedstrijd_id, wedstrijden.thuisSpelend, wedstrijden.tegenstander, wedstrijden.datum, wedstrijden.verslag, wedstrijden.doelpuntenKSK, wedstrijden.doelpuntenTegenstander, wedstrijden.ploeg_id, ploegen.naam as ploegNaam  FROM wedstrijden INNER JOIN ploegen on wedstrijden.ploeg_id = ploegen.ploeg_id ORDER BY wedstrijden.datum");
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

$app->get('/wedstrijden/{id}', function ($request, $response, $args) {

        $sth = $this->db->prepare("SELECT wedstrijden.wedstrijd_id, wedstrijden.thuisSpelend, wedstrijden.tegenstander, wedstrijden.datum, wedstrijden.verslag, wedstrijden.doelpuntenKSK, wedstrijden.doelpuntenTegenstander, wedstrijden.ploeg_id, ploegen.naam as ploegNaam  FROM wedstrijden INNER JOIN ploegen on wedstrijden.ploeg_id = ploegen.ploeg_id WHERE wedstrijden.wedstrijd_id=:id ORDER BY wedstrijden.datum");
        $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
        $sth->execute();
        $todos = $sth->fetchObject();
        return $this->response->withJson($todos);
    });

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

// Update todo with given id
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

// DELETE a todo with given id
$app->delete('/wedstrijden/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM wedstrijden WHERE wedstrijd_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $rows = $sth->execute();
    return $this->response->withJson($rows);
});

$app->get('/nieuws', function ($request, $response, $args) {
        $sth = $this->db->prepare("SELECT * FROM nieuws ORDER BY datum");
        $sth->execute();
        $ploegen = $sth->fetchAll();
        return $this->response->withJson($ploegen);
});

$app->get('/nieuws/{id}', function ($request, $response, $args) {

        $sth = $this->db->prepare("SELECT * FROM nieuws WHERE nieuws_id=:id ORDER BY nieuws.datum");
        $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
        $sth->execute();
        $todos = $sth->fetchObject();
        return $this->response->withJson($todos);
    });

$app->post('/nieuws', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO nieuws (titel, inhoud, datum) VALUES (:titel, :inhoud, :datum)";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("titel", $input['titel']);
    $sth->bindParam("inhoud", $input['inhoud']);
    $sth->bindParam("datum", $input['datum']);
    $sth->execute();
    $id = $this->db->lastInsertId();
    return $this->response->withJson($id);

});

// Update todo with given id
$app->put('/nieuws/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE nieuws SET titel = :titel, inhoud = :inhoud, datum = :datum WHERE nieuws_id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("titel", $input['titel']);
    $sth->bindParam("inhoud", $input['inhoud']);
    $sth->bindParam("datum", $input['datum']);
    $sth->execute();
    return $this->response->withJson($args['id']);
});

// DELETE a todo with given id
$app->delete('/nieuws/{id}', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM nieuws WHERE nieuws_id=:id");
    $sth->bindParam("id", $args['id'], PDO::PARAM_INT);
    $rows = $sth->execute();
    return $this->response->withJson($rows);
});
