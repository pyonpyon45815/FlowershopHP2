<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="display-contact">

    <div class="form-title">入力内容</div>

    <div class="form-item">■ 名前</div>
    <!-- nameを受け取りechoしましょう -->
    <?php echo $_POST['name']; ?>
    <div class="form-item">■ 内容</div>
    <!-- bodyを受け取りechoしましょう -->
    <?php echo $_POST['body']; ?>

</div>




</body>

</html>
