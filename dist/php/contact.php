<?php

$name = $_POST['name'];
$subject = $_POST['subject'];
$email = $_POST['email'];
$emailConfirm = $_POST['emailConfirm'];
$message = $_POST['message'];
$to = 'trevoreyre@gmail.com';
$error = false;

// Validate various inputs
if (!$name || !preg_match('/[a-zA-z ]*/', $name)) {
    $error = true;
} else if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error = true;
} else if (strtolower($email) != strtolower($emailConfirm)) {
    $error = true;
} else if (!$message) {
    $error = true;
}

// If there are no errors, send the email. Return 1 on success, 0 if
// unable to send emails, or -1 if there are input errors.
if ($error) {
    echo "-1";
} else {
    $subject = "From trevoreyre.com: $subject";
    $message = str_replace('\n.', '\n..', $message);
    $headers = "From: $name <$email>" . "\r\n" . "Reply-To: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "1";
    } else {
        echo "0";
    }
}
