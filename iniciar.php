<?php

  session_start();

  if (isset($_SESSION['user_id'])) {
    header('Location: /Proyecto_Final/bienvenido.php');
  }
  require 'database.php';

  if (!empty($_POST['email']) && !empty($_POST['password'])) {
    $records = $conn->prepare('SELECT id, email, password FROM users WHERE email = :email');
    $records->bindParam(':email', $_POST['email']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $message = '';

    if (count($results) > 0 && password_verify($_POST['password'], $results['password'])) {
      $_SESSION['user_id'] = $results['id'];
      header('Location: /Proyecto_Final/bienvenido.php');
    } else {
      $message = 'Lo sentimos, esa cuenta no existe.';
    }
  }

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Store Online</title>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="css/estilo.css">
    <link rel="icon" type="image/png" href="logo/logo.png">

  </head>
  <body>
    <div class="container">
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
            <a href="index.php" class="navbar-brand"><img src="logo/logo.png" width="50" height="50"></a>
            <a href="mapa/mapa.html" class="navbar-brand"><img src="logo/icono_mapa.png" width="50" height="50"></a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#menu"><span class="navbar-toggler-icon"></span></button>
            <div id="menu" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="index.php">Ofertas</a></li>
                    <li class="nav-item"><a class="nav-link" href="html/moda.php">Moda</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Tegnología</a>
                        <div class="dropdown-menu">
                            <a id="tec" class="dropdown-item" href="html/celulares.php">Celulares</a>
                            <a class="dropdown-item" href="html/computacion.php">Computación</a>
                            <a class="dropdown-item" href="html/audio.php">Audio y Video</a>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="html/electrodomesticos.php">Electrodomésticos</a></li>
                    <li class="nav-item"><a class="nav-link" href="html/juguetes.php">Juguetes</a></li>
                    <li class="nav-item"><a class="nav-link" href="html/herramientas.php">Herramientas</a></li>
                </ul>

                <label> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </label>
                <label> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </label>
                <label> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </label>
                <label> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </label>
                
                <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#modal_info">Sesión</button>
            </div>
        </nav>
    </div>

    <div class="modal fade" id="modal_info">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- header -->
                <div class="modal-header">
                    <center> <h4 class="modal-title">Sesion</h4> </center>
                    <button class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- body -->
                <div class="modal-body">
                    <div class="container">
                        <form action="iniciar.php">
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <center> <button class="btn btn-primary">Iniciar Sesión</button> </center>
                                </div>
                            </div>
                        </form>
                        <form action="crear.php">
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <center>    
                                        <button class="btn btn-secondary">Crear Sesión</button>
                                    </center>
                                </div>
                            </div> 
                        </form>
                    </div>
                </div>

                <!-- footer -->
                <div class="modal-footer">
                    <button class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>

    <center>
        <br> <h1> Iniciar Sesión </h1> <br>

        <?php if(!empty($message)): ?>
          <p> <?= $message ?></p>
        <?php endif; ?>

        <br>

        <form action="iniciar.php" method="POST">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label"></label> 
                <label class="col-sm-1 col-form-label">Correo:</label>
                <div class="col-md-5">
                    <input name="email" class="form-control" type="text" placeholder="Correo electronico"> <br>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label"></label> 
                <label class="col-sm-1 col-form-label">Contraseña:</label>
                <div class="col-md-5">
                    <input name="password" class="form-control" type="password" placeholder="Contraseña"> <br>
                </div>
            </div>
          <input class="btn btn-primary" type="submit" value="Iniciar Sesión">
        </form>

  </body>
</html>