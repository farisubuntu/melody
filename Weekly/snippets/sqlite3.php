<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My site</title>
</head>
<body>

<?php
class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open('new.sqlite');
    }
}


$db = new MyDB();

$returned_set = $db->query('SELECT * FROM test');
while ($result = $returned_set->fetchArray()) {
echo $result['name'] . "<br>";
}



?>

</body>
</html>