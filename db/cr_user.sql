CREATE USER 'harol'@'%' IDENTIFIED BY 'P@s5';
GRANT ALL ON *.* TO 'harol'@'%';

ALTER USER 'harol'@'%' IDENTIFIED WITH mysql_native_password BY 'P@s5';