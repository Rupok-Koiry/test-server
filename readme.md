# [Campee Shop](https://ph-assignment-04-client.vercel.app/)

## Introduction

Welcome to Campee Shop, your one-stop e-commerce website for all camping enthusiasts!

## Project Description

Campee Shop is designed to provide camping enthusiasts with a wide range of products necessary for their adventures. The website aims to offer a user-friendly and visually appealing shopping experience, inspired by popular sites like Adventure Shop, Camping Shop, and The Camperco Shop.

## Features

- **Homepage**

  - Header with logo and site name.
  - Navigation bar with links to core pages and cart icon.
  - Hero section to captivate visitors.
  - Recommended Products section with a "view more" button.
  - Categories Section with images or icons.
  - Featured Products section.
  - Testimonial section.
  - FAQ section.
  - Footer with quick links and social media links.

- **Products Page**

  - Product listings in grid or list view.
  - Product details button.
  - Search bar and filters for categories and price range.
  - Sorting options and clear button.

- **Product Details Page**

  - Product information including name, price, stock, description, category, ratings, and images.
  - Add to Cart button with stock limit validation.

- **Product Management**

  - Product list table with image, name, price, category, and actions.
  - Create, update, and delete products with confirmation prompts.

- **Cart Page**

  - List of cart items with quantity controls.
  - Remove product button with confirmation prompt.
  - Detailed total pricing and dynamic updates.
  - Place order button with stock validation.

- **Checkout Page**

  - User details form.
  - Payment methods: Cash on Delivery.
  - Redirect to success page and stock deduction upon order placement.

- **About Us Page**

  - Team members introduction, social media links, contact form.

- **UI/UX Enhancements**

  - Responsive design.
  - State management using Redux.
  - Fast loading times.
  - Intuitive navigation and consistent design language.
  - Optional accessibility standards.
  - Interactive elements.

- **Bonus Features**
  - Image gallery with magnifier effect.
  - Page refresh warning for unsaved cart data.
  - Random featured product fetching using React Query.

## Technology Stack

- Frontend: React, Redux
- Backend: Node.js, Express
- Optional: Typescript, React Query

## Installation Guideline

### Prerequisites

- Node.js
- npm or yarn

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Campee-shop.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Campee-shop
   ```
3. Install client dependencies:
   ```bash
   cd client
   npm install
   # or
   yarn install
   ```
4. Install server dependencies:
   ```bash
   cd server
   npm install
   # or
   yarn install
   ```

### Configuration

1. Create a `.env` file in the client directory of the project.
2. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    VITE_API_URL=http://localhost:8000/api
   ```
3. Create a `.env` file in the server directory of the project.
4. Add necessary configuration variables in the `.env` file.
   Example:
   ```bash
    NODE_ENV=development
    PORT=8000
    DATABASE_URL=your_db_connection_uri
   ```

## Usage

To start the development server, run the following commands:

### Frontend

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Start the React development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Backend

1. Navigate to the sever directory:
   ```bash
   cd sever
   ```
2. Start the Node.js server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

You can now access the application at `http://localhost:5173` in your browser.
