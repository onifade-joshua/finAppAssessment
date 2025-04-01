# Fintech Savings & Investment Dashboard

## Overview
This is a responsive and dynamic financial dashboard built using **Vue 3**, **Vite**, **Pinia**, and **Vuetify**. It provides users with real-time stock data, investment insights, and savings tracking to help them manage their financial goals efficiently.

## Features
- **Authentication**: Firebase-based login system with email/password and Google Sign-In.
- **Dynamic Financial Dashboard**: Real-time stock market data integration using **Twelve Data API**.
- **State Management**: Pinia store for managing financial data across the application.
- **Data Visualization**: Interactive charts and graphs powered by **Chart.js**.
- **User-Friendly UI**: Vuetify-based design ensuring mobile responsiveness.
- **Error Handling**: Robust API error handling and fallback UI messages.

## Technologies Used
- **Vue 3** with Composition API
- **Vite** for fast development and build
- **Vuetify** for UI components
- **Pinia** for state management
- **Firebase** for authentication
- **Twelve Data API** for stock market data
- **Chart.js** for financial data visualization

## Installation & Setup
### Prerequisites
Ensure you have **Node.js (v16 or later)** and **Yarn or npm** installed on your machine.

### Steps to Run the Project
```sh
# Clone the repository
git clone https://github.com/onifade-joshua/finAppAssessment.git

# Navigate into the project folder
cd fintech-dashboard

# Install dependencies
yarn install  # or npm install

# Create a .env file and add your API keys
VITE_ALPHA_VANTAGE_API_KEY=your_api_key
VITE_FIREBASE_API_KEY=your_firebase_key

# Run the development server
yarn dev  # or npm run dev
```

## Project Structure
```
├── src
│   ├── components        # Reusable UI components
│   ├── views             # Page components
│   ├── stores            # Pinia state management
│   ├── api               # API calls
│   ├── assets            # Static assets
│   ├── router            # Vue Router configuration
│   ├── main.js           # App entry point
│   ├── App.vue           # Root component
├── public                # Static public files
├── .gitignore            # Git ignore rules
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## API Integration
The app fetches stock market data using the **Twelve Data API**. Ensure you replace `your_api_key` in your `.env` file with a valid API key.

## Enhancements & Future Updates
- Add user portfolio management.
- Implement additional investment analytics.
- Improve accessibility and performance optimizations.

## Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests.

## License
This project is licensed under the **MIT License**.

## Contact
For inquiries, reach out via [onifadejoshua15@gmail.com].

