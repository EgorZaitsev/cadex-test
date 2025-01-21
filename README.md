# 3D Box Configurator

## Description

The 3D Box Configurator is an interactive web application that allows users to create and visualize customizable 3D boxes. Users can adjust the dimensions of the box in real-time and see the changes reflected in a 3D rendering. The application features a dark mode toggle and persists user preferences using local storage.

## Features

- Interactive 3D box visualization
- Real-time dimension adjustments (length, width, height)
- Dark mode toggle with local storage persistence
- Responsive design for various screen sizes
- Server-side triangulation calculation for accurate 3D rendering

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
   
   `git clone https://github.com/EgorZaitsev/cadex-test.git`

   `cd cadex-test`
   

2. Install dependencies:

   `npm install`

3. Start the development server:

   `npm run dev`

4. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Use the input fields in the form to adjust the length, width, and height of the box.
2. Click the "Update Box" button to see the changes reflected in the 3D visualization.
3. Use the dark mode toggle in the header to switch between light and dark themes.
4. Interact with the 3D box using your mouse:
    - Click and drag to rotate the box
    - Scroll to zoom in and out
    - Right-click and drag to pan the view

## Technologies Used

- React
- TypeScript
- Three.js (via @react-three/fiber and @react-three/drei)
- Ant Design (UI components)
- Express.js (for server-side triangulation)

## Project Structure

- `src`: Contains the main React application code
    - `App.tsx`: Main application component
    - `components`: React components (BoxForm, BoxScene)
- `constants`
  - `constants.ts`: Constants of application

## Reference

Done for CAD Exchange test task
