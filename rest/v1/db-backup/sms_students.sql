-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2026 at 02:41 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `viter-sms_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `sms_students`
--

CREATE TABLE `sms_students` (
  `students_aid` int(11) NOT NULL,
  `students_is_active` tinyint(1) NOT NULL,
  `students_first_name` varchar(128) NOT NULL,
  `students_middle_name` varchar(128) NOT NULL,
  `students_last_name` varchar(128) NOT NULL,
  `students_id` varchar(50) NOT NULL,
  `students_grade` varchar(50) NOT NULL,
  `students_section` varchar(50) NOT NULL,
  `students_created` datetime NOT NULL,
  `students_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sms_students`
--

INSERT INTO `sms_students` (`students_aid`, `students_is_active`, `students_first_name`, `students_middle_name`, `students_last_name`, `students_id`, `students_grade`, `students_section`, `students_created`, `students_updated`) VALUES
(1, 1, 'Kierra', 'Melendez', 'Bautista', '1', '3', 'A', '2026-05-30 17:42:11', '2026-05-30 17:42:11'),
(2, 1, 'Kaizer', 'L.', 'Lamperouge', '2', '7', 'B', '2026-05-30 19:44:37', '2026-05-30 19:44:37'),
(3, 1, 'Amber', 'M.', 'Dela Cruz', '3', '8', 'A', '2026-05-30 19:46:15', '2026-05-30 19:46:15'),
(4, 1, 'Yannie', 'C.', 'Ong', '4', '9', 'B', '2026-05-30 19:52:26', '2026-05-30 19:52:26'),
(5, 1, 'Jiggy', 'G.', 'Young', '5', '9', 'C', '2026-05-30 19:53:00', '2026-05-30 19:53:00'),
(6, 1, 'Elma', 'M.', 'Mendoza', '6', '7', 'A', '2026-05-30 19:53:38', '2026-05-30 19:53:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sms_students`
--
ALTER TABLE `sms_students`
  ADD PRIMARY KEY (`students_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sms_students`
--
ALTER TABLE `sms_students`
  MODIFY `students_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
