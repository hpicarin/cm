-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 14-04-2024 a las 08:27:39
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `demo`
--

--
-- Volcado de datos para la tabla `appointment`
--

INSERT INTO `appointment` (`id_app`, `end_date`, `start_date`, `title`, `id_user_d`, `id_user_p`) VALUES
(104, '2024-04-23 00:00:00.000000', '2024-04-22 00:00:00.000000', 'Cita Oftalmologia', 104, 352),
(105, '2024-04-27 00:00:00.000000', '2024-04-26 00:00:00.000000', 'Psicologia', 104, 355),
(153, '2024-04-15 00:00:00.000000', '2024-04-14 00:00:00.000000', 'Neurologia', 354, 352),
(154, '2024-04-05 00:00:00.000000', '2024-04-04 00:00:00.000000', 'Fisioterapia', 354, 355);

--
-- Volcado de datos para la tabla `appointment_seq`
--

INSERT INTO `appointment_seq` (`next_val`) VALUES
(251);

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id_rol`, `description`, `name`) VALUES
(1, 'User of system', 'Patient'),
(3, 'Worker of system', 'Doctor'),
(5, 'Admin of system', 'Admin');

--
-- Volcado de datos para la tabla `rols_seq`
--

INSERT INTO `rols_seq` (`next_val`) VALUES
(101);

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`created_at`, `id_rol`, `id_user`, `avatar`, `country`, `lastname`, `name`, `password`, `type`) VALUES
('2024-04-06 09:53:13.000000', 3, 104, 'avatar3', 'London', 'Picarin', 'Harol', '123', NULL),
('2024-04-06 12:23:55.000000', 5, 253, 'avatar7', 'nueva', 'nuevomas', 'nuevo', '123', NULL),
('2024-04-13 10:48:51.000000', 1, 352, 'avatar2', 'Plaza', 'mas', 'Dima', '123', 'patient'),
('2024-04-14 07:55:37.000000', 5, 353, 'avatar1', 'Vedado', 'full', 'admin', '123', NULL),
('2024-04-14 07:57:49.000000', 3, 354, 'avatar4', 'Paris', 'Sosa', 'Mirtica', '123', NULL),
('2024-04-14 07:58:30.000000', 1, 355, 'avatar6', 'Murcia', 'antium', 'Adam', '123', NULL);

--
-- Volcado de datos para la tabla `users_seq`
--

INSERT INTO `users_seq` (`next_val`) VALUES
(451);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
