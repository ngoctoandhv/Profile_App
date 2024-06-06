# Dockerized Rails and React App

## Step 1: Build docker image

```yml
docker compose build
```

## Step 2: Run app

```yml
docker compose up
```

## Step 3: Fake data

```yml
docker compose run api bash
rails db:migrate
rails db:seed
```

[http://localhost:3000/] => Rails app
[http://localhost:3000/] => React app
