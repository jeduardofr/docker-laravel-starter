# Docker with Laravel Starter

This repository contains a docker configuration ready to work with Laravel.

## Getting up and running

To start the whole project we need to use the command:

```sh
docker-compose up -d
docker run --rm -v $(pwd):/app composer install
sudo chown $USER:$USER -R .
```

### Useful Commands

The most frequent commands might be:

```sh
docker-compose exec app php artisan key:generate
docker-compose exec app php artisan migrate
docker-compose exec db bash
```
