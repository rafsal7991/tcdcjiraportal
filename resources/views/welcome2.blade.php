<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title','tcdc ajira portal')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
    <body>
        <div>
    
        <div className=''>
            <div>
                <nav class="navbar navbar-expand-sm ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">

                        </a>
                        <ul class="nav justify-content-end nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link" href="#home">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#language">LANGUAGE</a>
                            </li>
                            <li class="nav-item">

                                <a class="nav-link" href="#register">NOTIFICATIONS <span class="badge bg-danger">4</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">LOGOUT</a>
                            </li>
                        </ul>
                    </div>


                </nav>

            </div>

        </div>
            <div class="div1">
                <div class="row">
                    <div class="col-sm-3 div1 column1 spann">
                        <div class="broundsl">
                            <ul class="list-group">
                                <h1 class="list-group-item-heading">DETAILS</h1>
                                <img src={Logo} className='passport'></img><br></br>
                                <a href="/dashbord" class="list-group-item  span">DASHBOARD</a><br></br>
                                <a href="/personaldetails" class="list-group-item  span">PERSONAL DETAIL</a><br></br>
                                <a href="#ACCADEMIC DETAILS" class="list-group-item  active span">ACCADEMIC DETAILS</a><br></br>
                                <a href="#PROFESIONAL QUALIFICATION" class="list-group-item span">PROFESIONAL QUALIFICATION</a><br></br>
                                <a href="#PROFESIONAL QUALIFICATION" class="list-group-item span">PROFESIONAL QUALIFICATION</a><br></br>
                                <a href="#REFEREE" class="list-group-item span">REFEREE</a>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 bround centerdiv spancenter">


                        <div className='disp'><img src={Logo2} className='logo'></img><div className='head'>TCDC AJIRA MANAGEMENT SYSTEM</div><img src={Logo1} className='logo'></img></div>

                        <div>
                            <br></br>
                            <div className='accH'><p>ADD ACCADEMIC INFORMATION</p></div>
                            <form action="/getdata" method='get'>
                                <label className='form-label'>education level</label>
                                <select className='form-select' name='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="other">advanced</option>
                                    <option value="female">diploma</option>
                                    <option value="male">certificates</option>
                                    <option value="male">form four</option>
                                    <option value="male">form six</option>
                                </select><br></br>
                                <label className='form-label'>country</label>
                                <select className='form-select' name='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="other">==select country==</option>
                                    <option value="advanced">advanced</option>
                                    <option value="diploma">diploma</option>
                                    <option value="certificates">certificates</option>
                                    <option value="form four">form four</option>
                                    <option value="form six">form six</option>
                                </select><br></br>
                                <select className='form-select' name='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="other">==select country==</option>
                                    <option value="advanced">advanced</option>
                                    <option value="diploma">diploma</option>
                                    <option value="certificates">certificates</option>
                                    <option value="form four">form four</option>
                                    <option value="form six">form six</option>
                                </select>
                                <label class='form-label'>NIDA</label>
                                <input className='form-control' type='name' name='nida' value={nida} onChange={(e) => setNida(e.target.value)} placeholder='eg 79911025-21108-00001-27'></input>
                                <br></br>
                                <label class='form-label'>PHONE</label>
                                <input className='form-control' type='name' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='eg 0658381644'></input>
                                <br></br>
                                <label class='form-label'>MARITIAL STATUS</label>
                                <select className='form-select' name='maritialStatus' value={maritialStatus} onChange={(e) => setMaritialStatus(e.target.value)}>
                                    <option value="single">SINGLE</option>
                                    <option value="maried">MARRIED</option>
                                    <option value="divoced">DIVOCED</option>
                                </select>
                                <br></br>
                                <label class='form-label'>PLACE OF BIRTH</label>
                                <input className='form-control' type='name' name='placeBirth' value={placeBirth} onChange={(e) => setPlaceBirth(e.target.value)} placeholder='eg TANGA'></input>
                                <br></br>
                                <label class='form-label'>ORIGINALITY</label>
                                <input className='form-control' type='name' name='originality' value={originality} onChange={(e) => setOriginality(e.target.value)} placeholder='eg TANZANIA'></input>
                                <br></br>
                                <label class='form-label'>EMAIL</label>
                                <input className='form-control' type='name' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='eg raphaelrichard754@gmail.com'></input>
                                <br></br>
                                <label class='form-label'>POST ADRESS</label>
                                <input className='form-control' type='name' name='post' value={post} onChange={(e) => setPost(e.target.value)} placeholder='eg P.O.BOX 1789 TANGA'></input>
                                <br></br>
                                <input type='submit' />

                            </form>



                        </div>
                    </div>
                    <div class="col-sm-3 div1 column2 spanni">
                        <div class="broundsr">
                            <ul class="list-group">
                                <h1 class="list-group-item-heading">VACANCIES</h1>
                                <a href="/vacancemanager" class="list-group-item span">MANAGERS/MAMENEJA <span class="badge rounded-pill bg-info">4</span></a><br></br>
                                <a href="/chairman" class="list-group-item span">CHAIRMAN/WENYEVITIL<span class="badge rounded-pill bg-info">4</span></a><br></br>
                                <a href="#ICT/TEHAMA" class="list-group-item span">ICT/TEHAMA <span class="badge rounded-pill bg-info">4</span></a><br></br>
                                <a href="#PROFESIONAL QUALIFICATION" class="list-group-item span">FINANCE/UHASIBU <span class="badge rounded-pill bg-info">4</span></a><br></br>
                                <a href="#OTHER FILDS" class="list-group-item span">OTHER FILDS <span class="badge rounded-pill bg-info">4</span></a><br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>

        </div>
                        </body>
                        </html>

