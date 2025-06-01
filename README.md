
# Technical Test – Minitok

This project was developed as part of a technical test for a software development position.  
It demonstrates the setup, technology stack, and commands required for local development.

**Technical Test URL**: [Google Drive Link](https://drive.google.com/file/d/1qArozFgfFbyJHTox8w4q-kCcy7oYzt8c/view?usp=sharing)

## Technology Stack

This project is built on two of my personal projects:

### Open Source  
| Project | Description |
|--------|-------------|
| [Slim Containers](https://github.com/VictorMGomes/slim-containers) | A lightweight Docker environment for full-stack applications |

### Private  
| Project | Description |
|--------|-------------|
| [TypeScript Boilerplate](#) | A full-stack boilerplate project built with TypeScript |

## Prerequisites

- **Docker**: Ensure Docker is installed and running on your system.
- **Docker Compose**: Ensure Docker Compose is installed and running.

## Setup Instructions

1. **Clone the Repository**  
   ```bash
   git clone --recurse-submodules https://github.com/VictorMGomes/technical-test-minitok
   ```

2. **Navigate to the Project Directory**  
   ```bash
   cd technical-test-minitok
   ```

3. **Copy Infrastructure and Application Environment Files**  
   > Application environment:  
   ```bash
   cp env.example .env
   ```

   > Docker environment:  
   ```bash
   cp slim-containers/.env.example slim-containers/.env
   ```

   ⚠️ **Note**: Configuration may vary depending on your host operating system. Update the `.env` files with the necessary environment variables.

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

## Running the App in Development Mode

### Backend Startup Commands

1. **Generate ORM Client and Types**  
   ```bash
   npm run Backend:DB:Generate
   ```

2. **Apply Schema to the Database**  
   ```bash
   npm run Backend:DB:Push
   ```

3. **Start the Development Server**  
   ```bash
   npm run Backend:Start:Dev
   ```

## Testing Application

1. **For running unit tests**  
   ```bash
   npm run Backend:Test
   ```

### Additional Commands

Refer to the `scripts` section in the `package.json` file for more available commands.

## API Documentation

While in development, you can access the API documentation at:

- **OpenAPI UI**: [http://localhost:3000/api/doc](http://localhost:3000/api/doc)  
- **OpenAPI JSON**: [http://localhost:3000/api/doc/json](http://localhost:3000/api/doc/json)

## Notes

- Ensure all dependencies are installed and environment variables are correctly configured before running any commands.