// Agenda of this file is to note down dteps performe on mysql DB. This will later be converted into schema file.

// 1. create database messaging;

// 2. use messaging;

/* 3. CREATE TABLE IF NOT EXISTS user
        (
            id INT NOT NULL UNIQUE,
            name VARCHAR(100) NOT NULL,
            mobile INT NOT NULL UNIQUE,
            password VARCHAR(100),
            is_active TINYINT(1),
            is_enabled TINYINT(1),
            PRIMARY KEY(id)
        );
*/
// 4.  ALTER TABLE user CHANGE COLUMN name first_name VARCHAR(100) NOT NULL;

// 5.  ALTER TABLE user ADD COLUMN last_name VARCHAR(100) NOT NULL AFTER first_name;

// 6.  ALTER TABLE user CHANGE COLUMN id id INT UNIQUE NOT NULL AUTO_INCREMENT;

// 7. ALTER TABLE user CHANGE COLUMN mobile mobile varchar(10) UNIQUE; -- This was done as storing mobile nuber not possible in integer
