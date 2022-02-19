<?php
require_once("car.php");
require_once("uberX.php");
require_once("uberVan.php");
require_once("uberPool.php");
require_once("account.php");

$uberX = new UberX("CVB123", new Account("Juan Hernandez", "AND456"), "Chevrolet", "Spark");
$uberX->printDataCar();

$uberPool = new UberPool("TYU567", new Account("Andrea Ferran", "ANDA765"), "Dodge", "Attitude");
$uberPool->printDataCar();

$uberVan = new uberVan ("HIX824", new Account ("Juan Hernández", "JHZ123"), "Tesla", "T3");
$uberVan->setPassenger(6);
$uberVan->printDataCar();
?>