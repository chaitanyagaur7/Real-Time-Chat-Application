# Real-Time Chat Application  

A feature-rich real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack. This application provides an interactive platform for users to engage in seamless text-based communication.  



## Features  
- **Real-Time Messaging**: Instant updates with WebSockets.  
- **User Authentication**: Secure login and registration system using JWT.  
- **Responsive Design**: Fully optimized for mobile and desktop devices.  
- **Group Chats**: Create and manage group conversations.  
- **Typing Indicators**: See when someone is typing in real time.  
- **Read Receipts**: Know when your messages are seen.  
- **Search Functionality**: Quickly find users or chats.  

## Tech Stack  
- **Frontend**: React with Redux for state management.  
- **Backend**: Node.js with Express.js for the API.  
- **Database**: MongoDB for data persistence.  
- **Real-Time Communication**: Socket.IO for WebSocket-based messaging.  

## Getting Started  

Follow these steps to set up the application locally:  

### Prerequisites  
Ensure you have the following installed on your system:  
- Node.js  
- MongoDB  
- Git  

### Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/chaitanyagaur7/Real-Time-Chat-Application.git
   cd Real-Time-Chat-Application
   ```
2. **Install dependency**
   ```bash
   # Backend
      cd backend
    npm install  
    
    # Frontend
    cd ../frontend
    npm install
   ```
3. **Set up environment variables**
   Create a .env file in the backend directory with the following values:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string 
   JWT_SECRET=your_jwt_secret_key
   ```
4. **Start the development server**
   ```bash
    # Backend
    cd backend
    npm run dev  
    
    # Frontend
    cd ../frontend
    npm start
   ```
5. **Access the application**
   Open your browser and navigate to http://localhost:5173

## Contact
Feel free to reach out for feedback or collaboration:

**LinkedIn:** linkedin.com/in/chaitanyagaur7

**GitHub:** github.com/chaitanyagaur7

**Email:** chaitanyagaur16@gmail.com


  

