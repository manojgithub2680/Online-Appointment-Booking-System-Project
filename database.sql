#Create Database MYSQL

CREATE DATABASE IF NOT EXISTS booking_system;
USE booking_system;

#Users table

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER'
);

#Appointments table

CREATE TABLE appointment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATETIME NOT NULL,
    contact VARCHAR(20) NOT NULL,
    name VARCHAR(100) NOT NULL
);

#Insert sample Users

INSERT INTO user (email, full_name, password, role) VALUES
('abc@gmail.com', 'ABC', '$2a$10$ZstnyuFk29GoCaK25jH.wNfwD7jWj7...', 'USER'),
('manoj2602860@gmail.com', 'Manoj Kumar', '$2a$10$Jq5dcfO0e7n7sZFJNyusmgcoPU7Gzj...', 'ADMIN'),
('test1@example.com', 'Test User', '$2a$10$oU6sjdrpF0af7coC.o7W1.mCkPrRyj...', 'USER'),
('manoj@gmail.com', 'Manoj Kumar Yadav', '$2a$10$keXfJiPgF93u9bVcWB.TvhJ.kup195...', 'USER'),
('raj9@gmail.com', 'Raj Yadav', '$2a$10$haAXEXiTX.Z7fs2PXC4UHdFh68kM7...', 'ADMIN'),
('kumar@gmail.com', 'Kumar', '$2a$10$WghnxAZNYYtLPvbdy9mMU.82S3w42...', 'USER');

# Insert sample Appointments

INSERT INTO appointment (date, contact, name) VALUES
('2025-08-23 15:00:00', '9693380172', 'Manoj Kumar'),
('2025-08-25 15:00:00', '9763380117', 'Virat'),
('2025-08-26 15:00:00', '7763380117', 'Rohit'),
('2025-08-27 15:00:00', '9763380115', 'Dhoni');
