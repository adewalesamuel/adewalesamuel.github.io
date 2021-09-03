<?php
		include './db.php';

		$mail=""; $message=""; $errmsg ="";

		if($_SERVER['REQUEST_METHOD'] === 'POST'){
		  $mail = test_input($_POST["mail"]);		  
		  $message = test_input($_POST["message"]);
		

		  $sql = "INSERT INTO info_visitor (mail, message)
		          VALUES ('$mail', '$message')";

		  if (!$conn->query($sql)) {
		    echo("Un problème est survenue dans l'insertion de données" . $conn->error);
		  }else{
		  	header("location: ./thankyou.php");
		  	mail("samroberval@gmail.com", "Formulaire Rempli", $message);
		  };
		};

		function test_input($data){
			$data = stripslashes($data);
			$data = trim($data);
			$data = htmlspecialchars($data);
			return $data;
		}

?>