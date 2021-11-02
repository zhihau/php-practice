<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table{
            background-color:pink;
        }
    </style>
</head>
<body>
    
    <h1>計算BMI(html)</h1>
    <?php
 if(isset($_GET['bmi'])){
     echo "have bmi" . $_GET['bmi'];
 }
    ?>
    <form action="bmi.php" method="post">
        <p>身高:<input type="text" name="height" id=""></p>
        <p>體重:<input type="text" name="weight" id=""></p>
        <p><input type="submit" value="計算"></p>
    </form>
    
</body>
</html>
