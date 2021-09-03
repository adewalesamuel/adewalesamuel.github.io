<?php
		include '../db.php';

		$mail=""; $message=""; $errmsg ="";

		if($_SERVER['REQUEST_METHOD'] === 'POST'){
		  $mail = test_input($_POST["mail"]);		  		

		  $sql = "INSERT INTO newsletter_sub (mail)
		          VALUES ('$mail')";

		  if (!$conn->query($sql)) {
		    echo("Un problème est survenue dans l'insertion de données" . $conn->error);
		  }else{
		  	mail("samroberval@gmail.com", "Nouvelle Souscription", $mail);
		  };
		};

		function test_input($data){
			$data = stripslashes($data);
			$data = trim($data);
			$data = htmlspecialchars($data);
			return $data;
		}

?>
