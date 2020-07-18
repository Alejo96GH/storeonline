<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <script type="text/javascript" src="js/scriptsCelulares.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Celulares</title>
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

    <center><h2>Celulares</h2></center><br>

    <div class="row">

        <div class="col-2 d-none d-md-block " id="filtro">
            <center>
                <p>
                <h5>Ordenar Precio</h5> 
                <br>
                <img src="../img/asce.jpg" id="asc" width="30%"> <br>
                <input type="radio" name="precio" value="ascendente" id="ascendente">
                <label>Ascendente</label><br><br>
                <img src="../img/desc.jpg" id="dec" width="30%"> <br>
                <input type="radio" name="precio" value="descendente" id="descendente"> 
                <label>Descendente</label><br><br>
            </center>
            
        </div>
        <div class="col-9 ">


            <div class="row">

                <div class="col-lg-3 col-md-6">
                    <div id="contenidos_1">
                       <center><img src="../img/c4.jpg" height="80%" width="80%"></center><p>Celular iPhone 8 Plus 64gb Entrega Inmediata </p><u><i>Precio: $1.689.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>
                    </div>           
                </div>

                <div class="col-lg-3 col-md-6">
                    <div id="contenidos_2">
                       <center><img src="../img/c5.jpg" height="45%" width="45%"></center><p>Celular Libre Samsung A71 /128gb 6ram / 64mp / 4g</p><u><i>Precio: $1.519.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>
                    </div>           
                </div>

                <div class="col-lg-3 col-md-6">
                    <div id="contenidos_3">
                       <center><img src="../img/c6.jpg" height="75%" width="75%"></center><p>Celular Xiaomi Redmi Note 8 Pro 128gb 64mpx 6 Ram</p><u><i>Precio: $1.099.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>
                    </div>           
                </div>


                <div class="col-lg-3 col-md-6">
                    <div id="contenidos_4">
                       <center><img src="../img/c7.jpg" height="80%" width="80%"></center><p>Celular Huawei P30 Lite /128gb /32mp / 4 Ram Forro 4g</p><u><i>Precio: $899.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>
                    </div>           
                </div>

            </div><br><br>

            <div class="row">

                <div class="col-lg-3 col-md-6">
                    <div id="contenidos_5">
                       <center><img src="../img/c1.jpg" height="50%" width="50%"></center><p>Celular Xiaomi Redmi Note 8 Memoria 64gb 4gb+estuche</p><u><i>Precio: $689.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>
                    </div>           
                </div>

                <div class="col-lg-3 col-md-6">
                    <div id="contenidos_6">
                       <center><img src="../img/c2.jpg" height="100%" width="100%"></center><p>Celular Samsung Galaxy A10s 32 Gb Rojo Dual Sim</p><u><i>Precio: $519.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>
                    </div>           
                </div>

                <div class="col-lg-3 col-md-6">
                    <div id="contenidos_7">
                       <center><img src="../img/c3.jpg" height="80%" width="80%"></center><p>Celular Moto One Action 128gb 12+5+4mpx Dual Sim</p><u><i>Precio: $699.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>
                    </div>           
                </div>


                <div class="col-lg-3 col-md-6">
                    <div id="contenidos_8">
                       <center><img src="../img/c6.jpg" height="75%" width="75%"></center><p>Celular Xiaomi Redmi Note 8 Pro 128gb 64mpx 6 Ram</p><u><i>Precio: $1.099.900</i></u><br> 
                       <button class="btn btn-success" type="submit">Comprar</button>
                    </div>
          
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

