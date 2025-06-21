# Smart Travel Hub

This project provides a boilerplate setup for a smart travel hub application with a Node.js/Express backend, React frontend, and MongoDB database. It also contains placeholders for integrating third-party APIs including Google Maps, Viator, Skyscanner, and sports data services.

## Project Structure

- **backend/** – Express server, API routes and MongoDB connection.
- **frontend/** – React application.
- **index.html** – Initial landing page (placeholder).

## Setup

1. Install dependencies for backend and frontend:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```
2. Copy the example environment files and fill in your configuration:
   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```
3. Start the backend server:
   ```bash
   npm --prefix backend run dev
   ```
4. In another terminal, start the React development server:
   ```bash
   npm --prefix frontend start
   ```

Backend runs on port `5000` by default and the React app proxies API requests to it via `REACT_APP_API_BASE`.

## API Routes

- `GET /api/maps/geocode` – Google Maps example
- `GET /api/viator/activities` – Viator example
- `GET /api/skyscanner/flights` – Skyscanner example
- `GET /api/sports/events` – Sports data example

Each route demonstrates how to forward requests to external APIs using Axios. Replace the placeholders with your own logic or additional endpoints as needed.

