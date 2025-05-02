<?php
session_start();

// Validate and process form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize inputs
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST['subject'] ?? ''), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);
    
    // Store form data for repopulation
    $_SESSION['form_data'] = [
        'name' => $name,
        'email' => $email,
        'subject' => $subject,
        'message' => $message
    ];
    
    // Validate
    $errors = [];
    if (empty($name)) $errors[] = 'Name is required';
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Valid email is required';
    }
    if (empty($message)) $errors[] = 'Message is required';
    
    if (empty($errors)) {
        // Configure PHPMailer (recommended)
        // OR use basic mail() function:
        $to = "Betelhemtekle2021@gmail.com";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $email_body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";
        
        if (mail($to, "New Contact: $subject", $email_body, $headers)) {
            $_SESSION['form_status'] = [
                'success' => true,
                'message' => "Thank you, $name! Your message has been sent."
            ];
        } else {
            $_SESSION['form_status'] = [
                'success' => false,
                'message' => "Failed to send message. Please try again later."
            ];
        }
    } else {
        $_SESSION['form_status'] = [
            'success' => false,
            'message' => implode('<br>', $errors)
        ];
    }
    
    header('Location: ../index.php#contact');
    exit;
}