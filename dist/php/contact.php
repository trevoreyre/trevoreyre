<?php

$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$emailConfirm = $_POST['emailConfirm'];
$message = $_POST['message'];
$to = 'trevoreyre@gmail.com'; 

// Check if name has been entered
if (!$name) {
    $errName = 'Please enter your name';
}

// Check if email has been entered and is valid
if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errEmail = 'Please enter a valid email address';
}

// Check if email matches confirmation email
if ($email != $emailConfirm) {
    $errEmail = 'Emails do not match';
}

//Check if message has been entered
if (!$message) {
    $errMessage = 'Please enter your message';
}

// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage) {
    $subject = "From trevoreyre.com: $subject";
    $message = str_replace('\n.', '\n..', $message);
    $headers = "From: $name <$email>" . "\r\n" . "Reply-To: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank You! I will be in touch";
    } else {
        echo "Sorry there was an error sending your message. Please try again later";
    }
}
