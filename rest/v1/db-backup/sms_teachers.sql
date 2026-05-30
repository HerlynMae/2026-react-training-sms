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
-- Table structure for table `sms_teachers`
--

CREATE TABLE `sms_teachers` (
  `teachers_aid` int(11) NOT NULL,
  `teachers_is_active` int(11) NOT NULL,
  `teachers_id` int(11) NOT NULL,
  `teachers_first_name` varchar(128) NOT NULL,
  `teachers_middle_name` varchar(128) NOT NULL,
  `teachers_last_name` varchar(128) NOT NULL,
  `teachers_subject` varchar(128) NOT NULL,
  `teachers_email` varchar(128) NOT NULL,
  `teachers_created` datetime NOT NULL,
  `teachers_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sms_teachers`
--

INSERT INTO `sms_teachers` (`teachers_aid`, `teachers_is_active`, `teachers_id`, `teachers_first_name`, `teachers_middle_name`, `teachers_last_name`, `teachers_subject`, `teachers_email`, `teachers_created`, `teachers_updated`) VALUES
(1, 1, 1, 'Aemie', 'Romero', 'Roswell', 'Math', 'aemie123@gmail.com', '2026-05-30 17:43:41', '2026-05-30 17:43:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sms_teachers`
--
ALTER TABLE `sms_teachers`
  ADD PRIMARY KEY (`teachers_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sms_teachers`
--
ALTER TABLE `sms_teachers`
  MODIFY `teachers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
