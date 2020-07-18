<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Herramientas</title>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="../css/estilo.css">
    <link rel="icon" type="image/png" href="../logo/logo.png">

  </head>
  <body>
    <div class="container">
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
            <a href="../index.php" class="navbar-brand"><img src="../logo/logo.png" width="50" height="50"></a>
            <a href="../mapa/mapa.html" class="navbar-brand"><img src="../logo/icono_mapa.png" width="50" height="50"></a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#menu"><span class="navbar-toggler-icon"></span></button>
            <div id="menu" class="collapse navbar-collapse">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="../index.php#oferta">Ofertas</a></li>
                    <li class="nav-item"><a class="nav-link" href="moda.php">Moda</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Tegnología</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="celulares.php">Celulares</a>
                            <a class="dropdown-item" href="computacion.php">Computación</a>
                            <a class="dropdown-item" href="audio.php">Audio y Video</a>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="electrodomesticos.php">Electrodomésticos</a></li>
                    <li class="nav-item"><a class="nav-link" href="juguetes.php">Juguetes</a></li>
                    <li class="nav-item"><a class="nav-link" href="herramientas.php">Herramientas</a></li>
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
                        <form action="../iniciar.php">
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <center> <button class="btn btn-primary">Iniciar Sesión</button> </center>
                                </div>
                            </div>
                        </form>
                        <form action="../crear.php">
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

    <center><h2>Herramientas</h2><br></center>

    <div class="row">

        <div class="col-2 d-none d-md-block " id="filtro">
            <center>
                <p>
                <h5>Publicidad</h5>
                <p> <p>
                <img src="../img/publicidad1.jpg" width="95%"> <p> <p>
                <img src="../img/publicidad2.jpg" width="95%"> <p> <p>
                <img src="../img/publicidad3.jpg" width="95%"> <p> <p>
                <img src="../img/publicidad4.jpg" width="95%"> <p> <p>
                <img src="../img/publicidad5.jpg" width="95%"> <p> <p>
                <img src="../img/publicidad6.jpg" width="95%"> <p> <p>
            </center>
        </div>
        <div class="col-9 ">


            <div class="row">                

                <div class="col-lg-3 col-md-6">
                       <center><img src="../img/h1.jpg" height="70%" width="70%"></center><p>Juego Herramienta Mecánica 100 Pz Pretul</p><u><i>Precio: $129.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>           
                </div>

                <div class="col-lg-3 col-md-6">
                       <center><img src="../img/h2.jpg" height="60%" width="60%"></center><p>Taladro Inalambrico 24v Percutor Para Trabajo Pesado</p><u><i>Precio: $289.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>           
                </div>


                <div class="col-lg-3 col-md-6">
                       <center><img src="../img/h3.jpg" height="80%" width="80%"></center><p>Kit Juego De Herramienta 85pz Copas Rache Carro Moto Pretul</p><u><i>Precio: $79.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>           
                </div>

                <div class="col-lg-3 col-md-6">
                       <center><img src="../img/h5.jpg" height="60%" width="60%"></center><p>Juego De Herramientas 42 Piezas Pretul Cuadrante 1/4</p><u><i>Precio: $99.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>           
                </div>

            </div><br><br>

            <div class="row">                

                <div class="col-lg-3 col-md-6">
                       <center><img src="../img/h6.jpg" height="70%" width="70%"></center><p>Pulidora 4-1/2 PuLG 820w Black+decker G720k-b3</p><u><i>Precio: $138.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>           
                </div>

                <div class="col-lg-3 col-md-6">
                       <center><img src="../img/h7.jpg" height="60%" width="60%"></center><p>Multimetro Digital Uni-t Ut33c+, Temperatura, Tester</p><u><i>Precio: $55.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>           
                </div>


                <div class="col-lg-3 col-md-6">
                       <center><img src="../img/h8.jpg" height="80%" width="80%"></center><p>Pistola Sopladora Aspiradora Pc 6 Velocidades</p><u><i>Precio: $84.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>           
                </div>

                <div class="col-lg-3 col-md-6">
                       <center><img src="../img/h9.jpg" height="60%" width="60%"></center><p>Termómetro Digital Nevera Refrigerador Acuario Carro </p><u><i>Precio: $10.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>           
                </div>

            </div><br><br>

            <div class="row">                

                <div class="col-lg-3 col-md-6">
                       <center><img src="../img/h10.jpg" height="70%" width="70%"></center><p>Guadaña B-45 3.5 Hp Shindaiwa Trabajo Pesado </p><u><i>Precio: $329.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>           
                </div>

                <div class="col-lg-3 col-md-6">
                       <center><img src="../img/h11.jpg" height="60%" width="60%"></center><p>Estación De Soldadura 2 En 1 Baku Bk-702b </p><u><i>Precio: $249.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>           
                </div>

            </div>
                  
        </div>
    </div> <br><br>

    <div class="col-12 bg-secondary">
        <center>
        <a href="#menu"><img src="../logo/facebook.png" width="30" height="30"> </a>
        <a href="#menu"><img src="../logo/instagram.png"width="30" height="30"></a>
        <a href="#menu"><img src="../logo/twitter.png"width="30" height="30"></a>
        <a href="#menu"><img src="../logo/whatsapp.png"width="30" height="30"></a>
        </center>
        <footer>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>        
        </footer>      
    </div>     

</body>

</html>