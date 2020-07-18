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
                    <li class="nav-item"><a class="nav-link" href="#oferta">Ofertas</a></li>
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

    <div id="carousel-main" class="carousel slide" data-ride="carousel">

        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/imagen1.png">
            </div>
            <div class="carousel-item"><img src="img/imagen2.jpg"></div>
            <div class="carousel-item"><img src="img/imagen3.png"></div>
            <div class="carousel-item"><img src="img/imagen4.jpg"></div>
        </div>

        <a href="#carousel-main" class="carousel-control-prev" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#carousel-main" class="carousel-control-next" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>

        <ul class="carousel-indicators">
            <li data-target="#carousel-main" class="active" data-slide-to=0></li>
            <li data-target="#carousel-main" data-slide-to=1></li>
            <li data-target="#carousel-main" data-slide-to=2></li>
            <li data-target="#carousel-main" data-slide-to=3></li>
        </ul>
    </div><br>

    <div class="container">
        <h3 id="oferta">Ofertas del Día</h3> 

        <div class="row">

            <div class="col-lg-4 col-md-6">
               <center><img src="oferta/o1.jpg" height="50%" width="50%"></center><p>[Proyector WiFi] POYANK 2000LUX Mini proyector Led, WiFi directamente conectado con iPhone X, 8, 7, 6, 5/ iPad/Mac/Google/Samsung,Huawei,Xiaomi y dispositivo Android (1080p soportado)), TP-01-P18</p><p>Precio: <s>$300.000</s><br> Ahora: $249.990</p>    
               <button class="btn btn-success" type="submit">Comprar</button>        
            </div>

            <div class="col-lg-4 col-md-6">
               <center><img src="oferta/o2.jpg" height="40%" width="40%"></center><p>El Huawei Y9 Prime te ofrece una experiencia envolvente y sorprendente con colores vivos y ángulos de visión increíbles para jugar, ver películas, trabajar y disfrutar de una experiencia multimedia inigualable e ininterrumpida al no tener ningún tipo de muesca. </p><p>Precio: <s>$1.299.900</s><br> Ahora: $742.900</p> 
               <button class="btn btn-success" type="submit">Comprar</button>           
            </div>    

            <div class="col-lg-4 col-md-6">
               <center><img src="oferta/o3.jpg" height="85%" width="85%"></center><p>Tv Led Samsung 32 Pulgadas Un32j4290 Tdt Smart Tv 2018-Los televisores LED te ofrecen la mejor imagen. Su tamaño de 32 pulgadas tiene una resolución de 1366x768. Verás imágenes con una nitidez que jamás imaginaste, todo en HD y desde la comodidad de tu propia habitación. </p><p>Precio: <s>$1.199.900</s><br> Ahora: $649.900</p> 
               <button class="btn btn-success" type="submit">Comprar</button>           
            </div>
        </div>

        <div class="row">

            <div class="col-lg-4 col-md-6">
               <center><img src="oferta/o4.jpg" height="60%" width="60%"></center><p>Nevera No Frost 300 Lts. Brutos Grafito Mabe - Rma300fbcg -Amplio espacio interior que permite guardar alimentos y recipientes de gran tamaño-Anaquel especial para almacenar botellas de hasta 3Lx-Ahorro de energia y mejor conservación gracias a su sistema de enfriamiento R600 </p><p>Precio: <s>$1.679.900</s><br> Ahora: $1.059.900</p> 
               <button class="btn btn-success" type="submit">Comprar</button>           
            </div>

            <div class="col-lg-4 col-md-6">
               <center><img src="oferta/o5.jpg" height="65%" width="65%"></center><p>Juego Taladro Percutor 1/2 - 85 Pzas 500w En Maleta-Taladro Percutor 1/2 500 W STAMPROF Para uso en pequeños trabajos en el hogar.Multifuncional: Taladro, rotomartillo y destornillador para uso en concreto, madera y metal. Ideal para aprendices de algún oficio.</p><p>Precio: <s>$179.900</s><br> Ahora: $129.900</p> 
               <button class="btn btn-success" type="submit">Comprar</button>           
            </div>

            <div class="col-lg-4 col-md-6">
               <center><img src="oferta/o6.jpg" height="100%" width="100%"></center><p>2 Cascos Moto Certificados Abatible Ich Gratis Placas Dot - El nuevo ICH 3300 Doble Visor es un casco certificado con la norma DOT AMERICANA Y NTC 4533 bajo la resolución 1080 del 2019, producción 100% nacional. </p><p>Precio: <s>$279.900</s><br> Ahora: $159.900</p> 
               <button class="btn btn-success" type="submit">Comprar</button>           
            </div>

                    
        </div>
        
    </div><br><br>

    <div class="col-12 bg-secondary">
        <center>
        <a href="#menu"><img src="logo/facebook.png" width="30" height="30"> </a>
        <a href="#menu"><img src="logo/instagram.png"width="30" height="30"></a>
        <a href="#menu"><img src="logo/twitter.png"width="30" height="30"></a>
        <a href="#menu"><img src="logo/whatsapp.png"width="30" height="30"></a>
        </center>
        <footer>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>        
        </footer>      
    </div>

  </body>

</html>