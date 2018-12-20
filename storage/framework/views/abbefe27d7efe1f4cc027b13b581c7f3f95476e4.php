<!doctype html>
<html lang="<?php echo e(app()->getLocale()); ?>">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/css/app.css">
        <title>React + Laravel</title>


        <style>
               .title{
                    margin-top: 230px;
                    color: cadetblue;
               } 
        </style>
    </head>
    <body>
        <div id="app"></div>
        <script src="../js/app.js"></script>
    </body>
</html>
