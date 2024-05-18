<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title','tcdc ajira portal')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <style>
        .div1 {
            background-color: green;
        }

        .bround {
            border: 2px solid #73AD21;
            padding: 20px;
            width: 650px;
            height: 150px:
        }

        .badges {
            height: 20px;
            border-radius: 25px;
            width: 25px;
            border: 10px solid #bbb;
            background-color: #bbb;
            color: red;
        }

        .column1 {
            float: left;

        }

        .column2 {
            float: right;


        }

        .brounds {
            border: 6px solid #FFFFFF;
            padding: 20px 20px 20px;
            width: ;
            height: 150px:
        }

        .centerdiv {
            background-color: #FFFFFF;
        }

    </style>
</head>
<body>
    <div>
        <ul class="nav justify-content-end nav-tabs">
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#home">HOME</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#language">LANGUAGE</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#register">REGISTER</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="tcdclogin">LOGIN</a>
            </li>
        </ul>
    </div>
    <div class="container-fluid p-5 bg-white text-secondary text-center">
        <div class="row">
            <div class="col-sm-4">
                <img src="images/Coat_of_arms_of_Tanzania.svg.png" alt="tcdc image" width="120" height="120">
            </div>
            <div class="col-sm-4">
                <h1>TCDC AJIRA</h1>
                <P>MFUMO WA USIMAMIZI WA AJIRA KATIKA VYAMA VYA USHIRIKA</P>
            </div>
            <div class="col-sm-4">
                <img src="images/tcdc.png" alt="tcdc image" width="120" height="120" float="left">
            </div>

        </div>



    </div>
    @yield('content')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
