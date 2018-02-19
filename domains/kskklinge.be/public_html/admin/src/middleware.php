<?php
// Application middleware

// e.g: $app->add(new \Slim\Csrf\Guard);
/**
 * Moves the uploaded file to the upload directory and assigns it a unique name
 * to avoid overwriting an existing uploaded file.
 *
 * @param string $directory directory to which the file is moved
 * @param UploadedFile $uploaded file uploaded file to move
 * @return string filename of moved file
 */
function moveUploadedFile($directory, $uploadedFile)
{
  try {
    $extension = pathinfo($uploadedFile->getClientFilename(), PATHINFO_EXTENSION);

    $basename = bin2hex(random_bytes(8)); // see http://php.net/manual/en/function.random-bytes.php
    $filename = sprintf('%s.%0.8s', $basename, $extension);

    $uploadedFile->moveTo($directory . DIRECTORY_SEPARATOR . $filename);
    return $filename;
  }
  catch(Exception $e) {

  }

}

$container = $app->getContainer();



$app->add(new \Slim\Middleware\JwtAuthentication([
    "path" => "/",
    "logger" => $container['logger'],
    "secret" => $settings['settings']['secretPW'],
    "secure" => false,
    "rules" => [
        new \Slim\Middleware\JwtAuthentication\RequestPathRule([
            "path" => "/",
            "passthrough" => ["/login", "/email", "/wedstrijden/upload", "/nieuws/upload"]
        ]),
        new \Slim\Middleware\JwtAuthentication\RequestMethodRule([
            "passthrough" => ["OPTIONS", "GET"]
        ]),
    ],
    "callback" => function ($request, $response, $arguments) use ($container) {

        $container["jwt"] = $arguments["decoded"];
    },
    "error" => function ($request, $response, $arguments) {
        $data["status"] = "error";
        $data["message"] = "test" . $arguments["message"];
        return $response
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    }
]));
