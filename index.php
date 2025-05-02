<?php
// Start session (if not already started)
if(session_status() === PHP_SESSION_NONE) session_start();

// Process contact form
$message_status = [];
if (isset($_POST['submit'])) {
    $to = "Betelhemtekle2021@gmail.com"; // Your email here
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $subject = trim($_POST['subject'] ?? 'No subject provided');
    $message = trim($_POST['message']);
    
    // Validate
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message_status = [
            'type' => 'error',
            'text' => 'Please fill all fields correctly!'
        ];
    } else {
        // Prepare email
        $email_subject = "New message from $name: $subject";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $email_body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";
        
        // For testing, just display the email
        echo "<pre>Email would be sent to: $to\nSubject: $email_subject\n\n$email_body</pre>";
        
        // In production, you would use:
        /*
        if (mail($to, $email_subject, $email_body, $headers)) {
            $message_status = [
                'type' => 'success',
                'text' => "Thank you, $name! Your message has been sent."
            ];
            $_POST = []; // Clear form on success
        } else {
            $message_status = [
                'type' => 'error',
                'text' => "Message failed to send. Please try again later."
            ];
        }
        */
    }
}

readfile('index.html');
?>