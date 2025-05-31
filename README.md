# Test Minitok

This project was developed as part of a technical test for a software development position.  
It demonstrates the setup, technology stack, and commands required for local development.  

Thecnical Test URL: https://drive.google.com/file/d/1qArozFgfFbyJHTox8w4q-kCcy7oYzt8c/view?usp=sharing

## Technology Stack

This project is built over my two personal projects:

Open Source:  
| [Slim Containers](https://github.com/VictorMGomes/slim-containers) | A Lightweight Docker Environment for Full Stack Applications       |

Private:  
| [TypeScript Boilerplate](#) | A fullstack boilerplate project build with TypeScript       |

## Prerequisites

- **Docker**: Ensure Docker is installed and running on your system.

## Setup Instructions

1. **Clone the Repository**  
  ```bash
  git clone --recurse-submodules https://github.com/VictorMGomes/teste_minitok.git
  ```

2. **Go to the project folder**
  ```bash
  cd teste_minitok
  ```

4. **Copy Environment Files**  
  > App envirioment
  ```bash
  cp env.example .env
  ```

  > Docker envirioment
  ```bash
  cp slim-containers/.env.example slim-containers/.env
  ```

  > ⚠️ **Warning**: The configuration may vary depending on your host operating system. Configure the `.env` file with the necessary environment variables. 

5. **Start MongoDB and Node.js**  
  ```bash
  docker-compose -f slim-containers/docker-compose.yml up -d mongodb nodejs
  ```

6. **Enter the Node.js Container**  
  ```bash
  docker exec -it development_nodejs sh
  ```

7. **Install Dependencies**  
  ```bash
  npm install
  ```

## Run App in development mode

### Start Backend Commands

1. **Generate ORM Client types**  
  ```bash
  npm run Backend:DB:Generate
  ```
2. **Run Database Transfer**  
  ```bash
  npm run Backend:DB:Push
  ```

3. **Start Development Server**  
  ```bash
  npm run Backend:Start:Dev
  ```

  ### Additional Commands

  For more available commands, refer to the `scripts` section in the `package.json` file.

  ## API Documentation

  During development, you can access the API documentation at the following endpoints:

  - **OpenAPI UI**: [http://localhost:3000/api/doc](http://localhost:3000/api/doc)  
  - **OpenAPI JSON**: [http://localhost:3000/api/doc/json](http://localhost:3000/api/doc/json)

## Notes

- Ensure all dependencies are installed and environment variables are correctly configured before running the commands.
- Use the provided `docker-compose` file to manage the PostgreSQL database container.
