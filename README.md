# GrenouilleAPI

## Backend

### Documentation

The full API documentation is generated with the command `make refresh-docs` in the `/docs` folder.
This is a simple web page to open in a browser.

### Development Environment

Install system dependencies
```
sudo apt install make python3 python3-venv python-devpython-virtualenv libpq-dev libssl-dev libffi-dev 
```
or  
```
sudo apt install make python python-pip libpq-dev
sudo pip install virtualenv
```

Install virtual environment in a `.venv` directory:
```
make dev-backend-install
```

Simply run the code inside dev environment:
```
make dev-backend-run
```

Clean development files (virtual environment):
```
make dev-clean
```

### Configuration

Flask production and development app use a setting file `backend/cfg/settings.cfg`.
You have to create it to match your target system.
A setting file example is available at `backend/settings-example.cfg`


If you use docker to run postgres (which is the case in production), you have to setup the environment variables in `docker/grenouilleapi_postgres/conf.env`.
A environment file example is available at `docker/grenouilleapi_postgres/conf.example.env`

### Database

#### Manual Setup

You can use any Postgres database as long as you use the good connection url in `backend/cfg/settings.cfg`.

Commands to apply to setup the database
```
psql -c "create user grenouilleapi;"
psql -c "alter user grenouilleapi with superuser;"
psql -c "alter user grenouilleapi with password 'password';"
psql -c "create database grenouilleapi;
```

#### Docker Run

Production uses a Docker Postgres image with a persistent volume saving data into `/home/docker/grenouilleapi/`.
The same database is usable in development on your machine. Use `make db-docker-start` and `make db-docker-stop` to manage it.

#### Common commands

Once `settings.cfg` file is configured for your database setup, you can apply migration commands to the database.


Apply all migrations to the database with
```
make db-upgrade
```
Backtrack the latest migration on the database
```
make db-downgrade
```
Generate a new migration file into `backend/migrations/versions` by comparing `backend/models.py` with the running database (upgrade will be applied before the compare)
```
make db-migrate
```

## Frontend

The frontend is a Vuejs application.

### Development Environment

Install the dev environment:
```
make dev-frontend-install
```
Run the frontend in dev on the port `8080` with:
```
make dev-frontend-run
```
Unit tests are available with the automatically generated project:
```
make dev-frontend-unit
make dev-frontend-teste2e
```

## Deployment


### Production Environment

Production run inside docker images: tornado python image for the backend, and nginx for the frontend.
```
make prod-start
```
And stop the production services with
```
make prod-stop
```

NOTE: You can even use these commands in development because docker ensure isolation.
However, the docker image is built after each code modification, so it's not efficient.
