@extends('layout')
@section('content')
<div class="div1">
    <div class="row">
        <div class="col-sm-3 div1 column1 ">
            <div class="brounds">
                <ul class="list-group">
                    <h1 class="list-group-item-heading">DETAILS</h1>
                    <a href="#dashboard" class="list-group-item">DASHBOARD</a><br>
                    <a href="#PERSONAL DETAIL" class="list-group-item">PERSONAL DETAIL</a><br>
                    <a href="#ACCADEMIC DETAILS" class="list-group-item">ACCADEMIC DETAILS</a><br>
                    <a href="#PROFESIONAL QUALIFICATION" class="list-group-item">PROFESIONAL QUALIFICATION</a><br>
                    <a href="#PROFESIONAL QUALIFICATION" class="list-group-item">PROFESIONAL QUALIFICATION</a><br>
                    <a href="#REFEREE" class="list-group-item">REFEREE</a>
                </ul>
            </div>
        </div>
        <div class="col-sm-6 bround centerdiv">
            <h1>TCDC AJIRA MANAGEMENT SYSTEM</h1>
            <p>chama cha MIRAMBO COOPERATIVE UNION ajira (3) kwa mameneja na watendaji wa vyama... condition <b>reposted</b></p>
            <a href="login">apply</a>
            <p>chama cha MAZINDE JUU AMCOS ajira (3) kwa mameneja na watendaji wa vyama... condition <b>posted</b></p>
            <a href="login">apply</a>
            <p>chama cha WAKURUNGWA COOPERATIVE UNION ajira (3) kwa mameneja na watendaji wa vyama... condition <b>posted</b></p>
            <a href="login">apply</a>
            <p>chama cha MIRAMBO COOPERATIVE UNION ajira (3) kwa mameneja na watendaji wa vyama... condition <b>posted</b></p>
            <a href="login">apply</a>
        </div>
        <div class="col-sm-3 div1 column2">
            <div class="brounds">
                <ul class="list-group">
                    <h1 class="list-group-item-heading">VACANCIES</h1>
                    <a href="/vacancemanager" class="list-group-item ">MANAGERS/MAMENEJA <span class="badges">5</span></a><br>
                    <a href="/vacancechairman" class="list-group-item active">CHAIRMAN/WENYEVITIL </span></a><br>
                    <a href="vacanceict" class="list-group-item">ICT/TEHAMA <span class="badges">100</span></a><br>
                    <a href="#PROFESIONAL QUALIFICATION" class="list-group-item">FINANCE/UHASIBU <span class="badges">2</span></a><br>
                    <a href="#OTHER FILDS" class="list-group-item">OTHER FILDS <span class="badges">20</span></a><br>
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection
