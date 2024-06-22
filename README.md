# Color Dropper App

## Overview

The Color Dropper App is a React application that allows users to pick and preview colors from a canvas. The application provides a simple interface for selecting colors directly from an image or a color grid.

## Features

- **Color Picker**: Select any color from the canvas by clicking on it.
- **Color Preview**: Preview the color as you hover over the canvas.
- **Responsive**: Handles window scroll and resize events to ensure accurate color picking.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **CSS**: Styling for the application.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/color-dropper-app.git
    cd color-dropper-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

The app should now be running on `http://localhost:3000`.

## Usage

1. **Open the App**: Navigate to `http://localhost:3000` in your browser.
2. **Enable Color Dropper**: Click the color picker icon to activate the color dropper.
3. **Pick a Color**: Move your mouse over the canvas to preview colors and click to select a color. The selected color will be displayed at the top.

## Project Structure

```
color-dropper-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── PickerIcon.tsx
│   │   │   ├── PlusIcon.tsx
│   │   │   ├── PreviewIcon.tsx
│   │   │   └── ...
│   │   ├── images/
│   │   │   └── sample-image.jpg
│   │   └── ...
│   ├── components/
│   │   ├── ColorDropper/
│   │   │   ├── ColorDropper.tsx
│   │   │   ├── ColorDropper.css
│   │   │   └── ...
│   │   ├── PreviewColor/
│   │   │   ├── PreviewColor.tsx
│   │   │   ├── PreviewColor.css
│   │   │   └── ...
│   │   └── ...
│   ├── helpers/
│   │   ├── rgbToHex.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles.css
│   └── ...
├── package.json
├── README.md
└── ...
```

## Contributing

Contributions are welcome! If you have any improvements or bug fixes, please open an issue or create a pull request.
