<?php
use Firebase\JWT\JWT;
use Tuupola\Base62;
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

    $app->get('/ploegen/byName/{name}', function ($request, $response, $args) {

             $sth = $this->db->prepare("SELECT * FROM ploegen WHERE naam=:name");
            $sth->bindParam("name", $args['name']);
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

        $app->get('/ploegen/{id}/wedstrijden', function ($request, $response, $args) {

                 $sth = $this->db->prepare("SELECT * FROM wedstrijden WHERE ploeg_id=:id");
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
$app->post('/email', function ($request, $response) {
    $input = $request->getParsedBody();
    header('Content-type: application/json');

    $errors = '';

    if(empty($errors))
    {
      var_dump($input);
    	$from_name = $input['name'];
    	$from_email = $input['email'];
    	$message = $input['message'];
    	$phone = $input['phone'];

    	$to_email = 'vanduysebert@gmail.com';
    	$to_email_cc = $from_email;

    	$mail_to_header = "<h2>Nieuwe mail ontvangen van $from_name</h2>";

    	$mail_from_header = "<h2>Uw mail is verzonden. Wij nemen zo spoedig mogelijk contact met u op.</h2>";

    	$contact = "
    							<p><strong>Naam:</strong> $from_name</p>
    		    			<p><strong>Email:</strong> $from_email</p>
    							<p>
    								<strong>Telefoonnummer</strong> $phone
    							</p>
    							<p>
    							</p>";
    	$content = "<p>$message</p>";

    	$email_subject = "KSK website - Nieuw bericht van $from_name";
    	$email_subject_cc = "Uw bericht is succesvol verzonden";

    	$email_body = '<html><body>';
    	$email_body .= "$mail_to_header $contact $content";
    	$email_body .= '</body></html>';

    	$email_bodyFrom = '<html><body>';
    	$email_bodyFrom .= "$mail_from_header $contact $content";
    	$email_bodyFrom .= '</body></html>';

    	$headers = "MIME-Version: 1.0\r\n";
    	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "Reply-To: $from_email";

    	$headersMain = $headers;
    	$headersCc = $headers;
    	$headersMain .= "From: $to_email\n";
    	$headersCc .= "From: $from_email\n";


    	mail($to_email,$email_subject,$email_body,$headers);
    	mail($to_email_cc,$email_subject_cc,$email_bodyFrom,$headers);

    	$response_array['status'] = 'success';
    	return $this->response->withJson($response_array);
    } else {
    	$response_array['status'] = 'error';
    	return $this->response->withJson($response_array);
    }

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
      $future = new DateTime("+90 minutes");
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
$app->post('/sponsors/upload', function ($request, $response) {
  $directory = $this->get('upload_directory').'\images\sponsors';
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

$app->post('/wedstrijden/upload', function ($request, $response) {
  $directory = $this->get('upload_directory').'\images\wedstrijden';
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

$app->post('/nieuws/upload', function ($request, $response) {
  $directory = $this->get('upload_directory').'\images\nieuws';
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

$app->get('/wedstrijden/senioren/lastGame', function ($request, $response, $args) {
        $ploegNaam = "Senioren";
        $sth = $this->db->prepare("SELECT wedstrijden.wedstrijd_id, wedstrijden.thuisSpelend, wedstrijden.tegenstander, wedstrijden.datum, wedstrijden.verslag, wedstrijden.doelpuntenKSK, wedstrijden.doelpuntenTegenstander, wedstrijden.ploeg_id, ploegen.naam as ploegNaam  FROM wedstrijden INNER JOIN ploegen on wedstrijden.ploeg_id = ploegen.ploeg_id WHERE ploegen.naam=:naam ORDER BY wedstrijden.datum DESC LIMIT 1");
        $sth->bindParam("naam", $ploegNaam);
        $sth->execute();
        $todos = $sth->fetchObject();
        return $this->response->withJson($todos);
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

$app->get('/nieuws/latest', function ($request, $response, $args) {
        $d = date('Y-m-j');
        $newdate = strtotime ( '-60 day' , strtotime ( $d ) ) ;
        $newdate = date ( 'Y-m-j' , $newdate );
        $eventType= "evenementen";
        $sth = $this->db->prepare("SELECT * FROM nieuws WHERE datum > :newDate AND newsType != :eventType ORDER BY eventDate LIMIT 3");
        $sth->bindParam("newDate", $newdate);
        $sth->bindParam("eventType", $eventType);
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
    $sql = "INSERT INTO nieuws (titel, inhoud, datum, newsType, eventDate) VALUES (:titel, :inhoud, :datum, :newsType, :eventDate)";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("titel", $input['titel']);
    $sth->bindParam("inhoud", $input['inhoud']);
    $sth->bindParam("datum", $input['datum']);
    $sth->bindParam("newsType", $input['newsType']);
    $sth->bindParam("eventDate", $input['eventDate']);
    $sth->execute();
    $id = $this->db->lastInsertId();
    return $this->response->withJson($id);

});

// Update todo with given id
$app->put('/nieuws/[{id}]', function ($request, $response, $args) {
    var_dump($request);
    var_dump($response);
    var_dump($args);
    $input = $request->getParsedBody();
    $sql = "UPDATE nieuws SET titel = :titel, inhoud = :inhoud, datum = :datum, eventDate = :eventDate, newsType =:newsType WHERE nieuws_id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("titel", $input['titel']);
    $sth->bindParam("inhoud", $input['inhoud']);
    $sth->bindParam("datum", $input['datum']);
    $sth->bindParam("eventDate", $input['eventDate']);
    $sth->bindParam("newsType", $input['newsType']);
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
        $sth = $this->db->prepare("SELECT *  FROM sponsors ORDER BY sponsors.sponsor_id");
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
    $sql = "INSERT INTO sponsors (naam, website, email, telnr, fotoUrl, adres, slogan) VALUES (:naam, :website, :email, :telnr, :fotoUrl, :adres, :slogan)";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("naam", $input['naam']);
    $sth->bindParam("website", $input['website']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("telnr", $input['telnr']);
    $sth->bindParam("fotoUrl", $input['fotoUrl']);
    $sth->bindParam("adres", $input['adres']);
    $sth->bindParam("slogan", $input['slogan']);
    $sth->execute();
    $id = $this->db->lastInsertId();
    return $this->response->withJson($id);

});

// Update todo with given id
$app->put('/sponsors/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE sponsors SET naam = :naam, email = :email, website = :website, fotoUrl = :fotoUrl, telnr = :telnr, adres = :adres,  slogan = :slogan WHERE sponsor_id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("naam", $input['naam']);
    $sth->bindParam("website", $input['website']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("telnr", $input['telnr']);
    $sth->bindParam("fotoUrl", $input['fotoUrl']);
    $sth->bindParam("adres", $input['adres']);
    $sth->bindParam("slogan", $input['slogan']);
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
