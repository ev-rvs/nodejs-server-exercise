# nodejs-server-exercise
EV Onboarding Exercise

## Requirements
- [Docker desktop](https://www.docker.com/why-docker)
- nvm (for local development - optional)
- Node v14.x or later for local development - optional)
- npm for local development - optional)

### How to run
- In your terminal, checkout this repo by running `git clone git@github.com:ev-rvs/nodejs-server-exercise.git`.
- Then go into the project's docroot by running `cd nodejs-server-exercise`. 
- Copy `env.example` as `.env` and update `.env` file with postgres initialization variables. Whichever you wish to set them to.
- Go to `http:localhost:3003/`and you should see JSON response `{ "message": "I'm healthy" }`, as a HTTP status code of `200`.
- There are 2 addtional endpoints: 
  - `http:localhost:3003/ping` records this event and responds with `{ "message": "PONG" }`, as a HTTP status code of `200`.
  - `http:localhost:3003/pong` responds with `{ "message": "PONG", "pingCount": X }`, as a HTTP status code of `200`.

### Optional commands
- If you've run this project before or are updating it with the latest changes, you may want to purge the old volumes with the command: `docker volumes prune` (optional)
- Also if you have built this project before you may want to take down the existing containers by running `docker-compose down`
- Then if you wish to run test containers, you can run `docker-compose -f test-docker-compose.yml up` or if you want to continue with development on the project, you can use this as your test driven development containers.
- To restart the docker-compose group, you should run `docker-compose down -v && docker-compose up --build` optionally with `-d` as a daemon or without for running logs to container.
