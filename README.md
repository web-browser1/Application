
# Math Calculation Application

This **Math Calculation Application** allows users to perform basic arithmetic operations (addition, subtraction, multiplication, division) and stores the results in a MySQL database. It demonstrates a full-stack application with a Node.js/TypeScript backend using **GraphQL** for API communication, a PHP frontend, and a MySQL database. The application is containerized using **Docker** and orchestrated with **Kubernetes**.

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Run with Docker](#run-with-docker)
  - [Run with Kubernetes](#run-with-kubernetes)
- [API Usage](#api-usage)
- [Project Structure](#project-structure)

## Features
- Perform arithmetic operations: addition, subtraction, multiplication, and division.
- Store and retrieve calculation history.
- Backend implemented with **Node.js/TypeScript** and **GraphQL**.
- Frontend built with **PHP** and **JavaScript**.
- Persistent data storage using **MySQL**.
- Containerized with **Docker** and orchestrated using **Kubernetes**.

## Technology Stack
- **Backend**: Node.js, TypeScript, Express.js, GraphQL (Apollo Server)
- **Frontend**: PHP, JavaScript, HTML, CSS
- **Database**: MySQL
- **Containerization**: Docker
- **Orchestration**: Kubernetes

## Prerequisites
Ensure the following are installed on your system:
- [Docker](https://docs.docker.com/get-docker/)
- [Kubernetes](https://kubernetes.io/docs/setup/) (Minikube or a cloud provider like GKE, EKS, AKS)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Node.js](https://nodejs.org/) (for local development)
- [MySQL](https://www.mysql.com/)

## Installation

### Run with Docker

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/math-calculation-app.git
    cd math-calculation-app
    ```

2. **Run Docker Compose**:
    Make sure Docker is running on your machine, then execute:
    ```bash
    docker-compose up
    ```

3. **Access the application**:
    - The frontend (PHP) will be available at `http://localhost`.
    - The GraphQL API is available at `http://localhost:3000/graphql`.

4. **MySQL Database**:
    - The MySQL database will be available at `localhost:3306`.
    - Use `root` as the username and `password` as the password.

### Run with Kubernetes

1. **Ensure your Kubernetes cluster is running**:
    If you're using Minikube:
    ```bash
    minikube start
    ```

2. **Deploy the application**:
    Apply the Kubernetes configurations:
    ```bash
    kubectl apply -f kubernetes/kubernetes-deployment.yml
    kubectl apply -f kubernetes/kubernetes-service.yml
    ```

3. **Access the application**:
    - If using Minikube, get the service URL by running:
      ```bash
      minikube service math-app-service
      ```
    - Access the application in the browser via the provided URL.
    - The GraphQL API will be available at `/graphql` on the same URL.

## API Usage

The backend uses **GraphQL** for communication. Here are some examples of how to interact with the API.

### Perform a Calculation (Mutation)

Send a mutation request to perform a calculation:

```graphql
mutation {
  calculate(operand1: 5, operand2: 3, operator: "+") {
    result
  }
}
