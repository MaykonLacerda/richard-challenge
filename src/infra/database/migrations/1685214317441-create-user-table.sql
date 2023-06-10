CREATE SCHEMA farmaki;

CREATE TABLE farmaki.users (
  id SERIAL PRIMARY KEY,
  fullName VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(255) DEFAULT 'DOCTOR'
);

INSERT INTO farmaki.users (fullName, email, password, role)
  VALUES ('Admin Test', 'admin@admin.io', 'Teste@123', 'ADMIN');

INSERT INTO farmaki.users (fullName, email, password, role)
  VALUES ('Doctor Test', 'doctor@doctor.io', 'Teste@123', 'DOCTOR');