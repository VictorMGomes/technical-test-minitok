# Test Minitok

This project was developed as part of a technical test for a software development position.  
It demonstrates the setup, technology stack, and commands required for local development.

**Technical Test URL**: [Google Drive Link](https://drive.google.com/file/d/1qArozFgfFbyJHTox8w4q-kCcy7oYzt8c/view?usp=sharing)

## Technology Stack

This project is built on two of my personal projects:

### Open Source  
| [Slim Containers](https://github.com/VictorMGomes/slim-containers) | A lightweight Docker environment for full-stack applications |

### Private  
| [TypeScript Boilerplate](#) | A full-stack boilerplate project built with TypeScript |

## Prerequisites

- **Docker**: Ensure Docker is installed and running on your system.

## Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone --recurse-submodules https://github.com/VictorMGomes/teste_minitok.git
   ```

2. **Navigate to the Project Folder**  
   ```bash
   cd teste_minitok
   ```

3. **Copy Environment Files**  
   > App environment  
   ```bash
   cp env.example .env
   ```

   > Docker environment  
   ```bash
   cp slim-containers/.env.example slim-containers/.env
   ```

   > ⚠️ **Warning**: Configuration may vary depending on your host operating system. Make sure to update the `.env` file with the necessary environment variables.

4. **Start MongoDB and Node.js Services**  
   ```bash
   docker-compose -f slim-containers/docker-compose.yml up -d mongodb nodejs
   ```

5. **Enter the Node.js Container**  
   ```bash
   docker exec -it development_nodejs sh
   ```

6. **Install Dependencies**  
   ```bash
   npm install
   ```

## Run the App in Development Mode

### Backend Startup Commands

1. **Generate ORM Client Types**  
   ```bash
   npm run Backend:DB:Generate
   ```

2. **Apply Database Schema**  
   ```bash
   npm run Backend:DB:Push
   ```

3. **Start the Development Server**  
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
