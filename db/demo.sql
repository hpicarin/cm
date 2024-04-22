-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 22-04-2024 a las 17:27:43
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appointment`
--

CREATE TABLE `appointment` (
  `id_app` bigint(20) NOT NULL,
  `end_date` datetime(6) NOT NULL,
  `start_date` datetime(6) NOT NULL,
  `title` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `id_user_d` bigint(20) NOT NULL,
  `id_user_p` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `appointment`
--

INSERT INTO `appointment` (`id_app`, `end_date`, `start_date`, `title`, `id_user_d`, `id_user_p`) VALUES
(104, '2024-04-23 00:00:00.000000', '2024-04-22 00:00:00.000000', 'Cita Oftalmologia', 104, 352),
(105, '2024-04-27 00:00:00.000000', '2024-04-26 00:00:00.000000', 'Psicologia', 104, 355),
(153, '2024-04-15 00:00:00.000000', '2024-04-14 00:00:00.000000', 'Neurologia', 354, 352),
(154, '2024-04-05 00:00:00.000000', '2024-04-04 00:00:00.000000', 'Fisioterapia', 354, 355);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `appointment_seq`
--

CREATE TABLE `appointment_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `appointment_seq`
--

INSERT INTO `appointment_seq` (`next_val`) VALUES
(301);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `id_rol` bigint(20) NOT NULL,
  `description` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `name` varchar(255) COLLATE latin1_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id_rol`, `description`, `name`) VALUES
(1, 'User of system', 'Patient'),
(3, 'Worker of system', 'Doctor'),
(5, 'Admin of system', 'Admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols_seq`
--

CREATE TABLE `rols_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `rols_seq`
--

INSERT INTO `rols_seq` (`next_val`) VALUES
(151);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `created_at` datetime(6) NOT NULL,
  `id_rol` bigint(20) DEFAULT NULL,
  `id_user` bigint(20) NOT NULL,
  `avatar` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `country` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `lastname` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `name` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `type` varchar(255) COLLATE latin1_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`created_at`, `id_rol`, `id_user`, `avatar`, `country`, `lastname`, `name`, `password`, `type`) VALUES
('2024-04-06 09:53:13.000000', 3, 104, 'avatar3', 'London', 'Picaro', 'Harol', '123', NULL),
('2024-04-06 12:23:55.000000', 5, 253, 'avatar7', 'nueva', 'nuevomas', 'nuevo', '123', NULL),
('2024-04-13 10:48:51.000000', 1, 352, 'avatar2', 'Plaza', 'mas', 'Dima', '123', 'patient'),
('2024-04-14 07:55:37.000000', 5, 353, 'avatar1', 'Vedado', 'full', 'admin', '123', NULL),
('2024-04-14 07:57:49.000000', 3, 354, 'avatar4', 'Paris', 'Sosa', 'Mirtica', '123', NULL),
('2024-04-14 07:58:30.000000', 1, 355, 'avatar6', 'Murcia', 'antium', 'Adam', '123', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_seq`
--

CREATE TABLE `users_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Volcado de datos para la tabla `users_seq`
--

INSERT INTO `users_seq` (`next_val`) VALUES
(451);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id_app`),
  ADD KEY `FK3j2pv2k98uoq9iiprbif7ynnv` (`id_user_d`),
  ADD KEY `FK2soupvopns3t6qao1894b438k` (`id_user_p`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `FKs5iqcyjr6uv576cd5wqcgnjjl` (`id_rol`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `appointment`
--
ALTER TABLE `appointment`
  ADD CONSTRAINT `FK2soupvopns3t6qao1894b438k` FOREIGN KEY (`id_user_p`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `FK3j2pv2k98uoq9iiprbif7ynnv` FOREIGN KEY (`id_user_d`) REFERENCES `users` (`id_user`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FKs5iqcyjr6uv576cd5wqcgnjjl` FOREIGN KEY (`id_rol`) REFERENCES `rols` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
