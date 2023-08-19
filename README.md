# NodeJS-auth-backend
> Simple register, login backend with JWT and PostgreSQL running on express

## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Configuration](#configuration)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)
* [License](#license)

## Technologies Used
- prisma
- node
- morgan
- postgreSQL
- yarn
- bcrypt
- express
- jwt (jsonwebtoken)
- jest
- ts-jest
- supertest

## Features
List the ready features here:
- Generate service templates with custom config

## Setup
1. Create a folder named you like.
2. Inside your folder, open console and paste: `git clone https://github.com/ZMizgalski/NodeJS-auth-backend.git`
3. `yarn install`
4. Then you are ready to go just open it in any Editor. (I prefer VSCode) [Download here](https://code.visualstudio.com/)

## Configuration

1. Create `.env` and fill in the necessary configuration values.
Example config
```bash
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="link"
JWT_SECRET="secret"
```

## Usage

Basic usage:
1. `yarn run build`
2. `yarn run start`

Prod or stage usage:
1. `yarn run prod`
2. `yarn run dev`

## Project Status
Project is:  _complete_ .

## Room for Improvement
- Multiple databases for testing
- Better error handler

## Contact
Created by [@zmizgalski](https://zmizgalski.github.io/) - feel free to contact me!

## License
This project is open source and available under the [... License](https://github.com/ZMizgalski/NodeJS-auth-backend/blob/main/LICENSE).
