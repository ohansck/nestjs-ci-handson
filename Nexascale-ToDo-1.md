# NestJS Backend Dockerization and Caddy Reverse Proxy

This repository contains a NestJS backend project with Dockerization. The task is to fork this repository, create a Docker Compose file (optional), and set up a Caddy server as a reverse proxy to the backend application. Additionally, there is a `/ninjas/verify` endpoint that can be verified by sending a JSON payload through a POST request.

## Prerequisites

Before starting, ensure you have the following installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

# Task Objective

The primary purpose of this task is to encourage contributors to independently find and utilize needed resources and documentation. The goal is to achieve the following:

1. **Fork the Repository:**
   - Fork the existing backend repository on GitHub.

2. **Create Docker Compose File (Optional):**
   - Independently create a `docker-compose.yml` file for Docker Compose configuration.

3. **Run Dockerized Backend:**
   - Build and run the Dockerized backend on a server of your choice or using the "[Play With Docker](https://labs.play-with-docker.com/)" platform.

4. **Host the Backend:**
   - Choose a server for hosting the Dockerized backend and ensure it's accessible over the internet.

5. **Setup Caddy Server:**
   - Independently setup Caddy on the chosen server

6. **Verify Endpoint:**
   - Independently send a JSON payload to the `/ninjas/verify` endpoint using a POST request.
   - Verify that the backend responds appropriately.

## Note:
This task is designed to test your ability to source and utilize documentation. Avoid explicit instructions and leverage official documentation and resources to achieve each step. Feel free to seek help online if needed.

## Fork the Repository

1. Fork this repository by clicking the "Fork" button at the top-right corner of this page.
2. Clone your forked repository to your local machine:

    ```bash
    git clone https://github.com/ohansck/nestjs-ci-handson nest-caddy
    cd nest-caddy
    ```

## Dockerize the Backend

If the backend project already has a Dockerfile, you can use it. Otherwise, you may need to create a Dockerfile in the root of your project.

## Verify the Endpoint

Send a JSON payload to the `/ninjas/verify` endpoint:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "Ninja", "code": "12345"}' http://localhost/ninjas/verify
```

Expected response:

```json
{"status":"success","message":"Verification successful","receivedPayload":{"name":"Ninja","code":"12345"}}
```
## Resources

- [Docker Documentation](https://docs.docker.com/)
- [NestJS Documentation](https://docs.nestjs.com/)
- [Caddy Documentation](https://caddyserver.com/docs/)

## Contributors

- Kingsley Ohaneme - [Connect with me on LinkedIn](https://linkedin.com/in/ohaneme-kingsley)

## Conclusion

Congratulations! You've successfully Dockerized the NestJS backend, set up a Caddy server as a reverse proxy, and verified the `/ninjas/verify` endpoint. Feel free to explore and customize the project further.

---