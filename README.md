# backend-docker-base
An example repository for having a docker compose file with PSQL, MONGO and REDIS setup.

## Required Environment Variables
`COMPOSE_PROJECT_NAME`: determines the name of the volume we use. Since the default volume name format is `${project_name}_${volume_name}`

`POSTGRES_PASSWORD`, `POSTGRES_USER`, `POSTGRES_DB`, `POSTGRES_PORT`

`MONGO_USER`, `MONGO_PASSWORD`

`REDIS_PORT`, `REDIS_PASSWORD`

`ADMINER_PORT`


## Docker command explaination
`docker volume ls`

to insepect all volumes in you local instance.

`docker volume inspect ${volume_name}`

to insepect details of a specific volume

## Compose file explaination
`ports: ${HOST_PORT}:${CONTAINER_PORT}`