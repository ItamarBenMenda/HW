<?php
use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\src\SMTP;
use PHPMailer\PHPMailer\Exception;

$result='';
$input='';

if(isset($_POST['submit']))
	$name=$_POST['full-name'];
	$email=$_POST['email'];
	$message=$_POST['message'];

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

// Load Composer's autoloader
require 'PHPMailer\src\PHPMailer.php';
require 'PHPMailer\src\Exception.php';
require 'PHPMailer\src\SMTP.php';


/* Include the Composer generated autoload.php file. */
//require 'C:\xampp\composer\vendor\autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
//$mail = new PHPMailer();

try {
    //Server settings
   $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'itamar83@gmail.com';                     // SMTP username
    $mail->Password   = '83798379';                               // SMTP password
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress('itamar83@gmail.com', 'WebFeedBack');     // Add a recipient
	
	$mail->AddReplyTo($email, $name);
	
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'New FeedBack From The Site';
    $mail->Body    = "Mail was received from: ".$email. "\t Mail Content: ".$message;

    $mail->send();
	//$result = "תודה \t".$name. " בעבור שליחת המייל  במידה ויהיה צורך אצור קשר";
	//$input = $_POST['inputText']; //get input text
	//$result = "Thank You \t".$name. " We will be in contact with you";
	//echo $result. $inputTest; 
	
    echo 'Message has been sent';
		
	//header("Location:index.html");		
		
	//echo $_POST["Mail was sent Succesfully"];
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
//		$result = "Somthing went Wrong Please Try again";

}
?>




