<?php 
    $server = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'databaseso';

    try{
        $conn = new PDO("mysql:host=$server;dbname=$database;",$username,$password);
    } catch (PDOException $e){
        die('Connected failed: '.$e->getMessage());
    }
?>