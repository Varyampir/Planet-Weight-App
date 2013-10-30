<?php
    header('Content-type: application/json; charset=utf-8');
    header("access-control-allow-origin: *");
    
    //Loading database info in a separate file that won't be pushed to repository.
    require_once('databaseInfo.php');

    $connection = mysql_connect(HOST, USER, PASSWORD)or die("Can't connect to database.");

    mysql_select_db(DBNAME);

    $query = "SELECT * FROM planetData";

    $result = mysql_query($query, $connection)or die("Can't make the query.");

    mysql_close($connection);

    while ($row = mysql_fetch_array($result)) {
        $jsonRow = array(
            "planet"=>$row["planet"],
            "weight"=>$row["weight"],
            "day"=>$row["day"],
            "year"=>$row["year"],
            "distance"=>$row["distance"],
            "rotation"=>$row["rotation"],
            "revolution"=>$row["revolution"],
            "diameter"=>$row["diameter"],
            "moons"=>$row["moons"],
            "meanTemp"=>$row["meanTemp"]
        );

        $jsonResponse[] = $jsonRow;
    }

    echo json_encode($jsonResponse);
?>