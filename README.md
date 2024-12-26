# Fitness Buddy App

**Fitness Buddy App** is a platform that connects users with similar fitness goals, enabling them to find workout partners, track their progress, and stay motivated in a supportive fitness community.

## Overview

The **Fitness Buddy App** helps users:
- Set and track fitness goals.
- Find workout buddies with similar goals and interests.
- Monitor progress through weekly reports.
- Stay motivated with additional features like BMI calculation and location-based buddy matching.

This project emphasizes creating a vibrant fitness community where users can stay committed to their goals.

## Key Features

### 1. **User Authentication**
- Secure user registration and login using email/password.
- Social media login support (Google, Facebook).
- Authentication implemented with JWT for secure access.

### 2. **Profile Creation**
- Users can create customized profiles with:
  - Name, location, and fitness goals.
  - Preferred workouts (e.g., yoga, running, weightlifting).
- Profiles help match users with relevant buddies.

### 3. **Buddy Matching**
- Matches users based on:
  - Fitness goals.
  - Preferred workouts.
  - Location (to suggest geographically closer buddies).

### 4. **Weekly Progress Reports**
- Weekly summaries include:
  - Completed workouts.
  - Calories burned.
  - Progress towards goals.

### 5. **Additional Features**
- **Map Location:** View buddies' locations on a map.
- **BMI Calculator:** Quick and easy BMI calculation tool.
- **Google Search Integration:** Search fitness-related resources directly from the app.

## Technical Details

### Frontend
- Built with **React**.
- Styled using **CSS**.
- Routes implemented for seamless navigation.

### Backend
- **Node.js** for server-side logic.
- **Express.js** for API design.
- **MongoDB** for database storage.
- **JWT** for secure authentication.
- **Argon2** for password hashing.
- **Nodemailer** for sending OTPs.
- **Cron-jobs** to automate data cleanup.

### Deployment
- **Frontend:** Hosted on [Netlify](https://spontaneous-clafoutis-e0ec46.netlify.app).
- **Backend:** Hosted on [Render](https://fitness-buddy-app.onrender.com).
- **Database:** Managed using [MongoDB Atlas](https://cloud.mongodb.com).

## Directory Structure
```
FITNESS_BUDDY_APP/
├── backend/
│   └── main.js
├── frontend/
│   └── ... (React project files)
```

## Installation & Getting Started

### Prerequisites
- **Node.js** installed on your system.
- Clone the repository:
  ```bash
  git clone https://github.com/cadetvivek/Fit-Buddy-FullStack.git
  npm i
  cd FullStack
  npm run dev

### Steps
1. **Frontend Setup**
   ```bash
   cd FullStack
   npm install
   npm run dev
   ```
2. **Backend Setup**
   ```bash
   cd Fitness_Buddy/backend
   npm install
   npm start
   ```

### Usage
- Access the app via the deployed frontend and backend URLs.
- Use the following test credentials to explore the app:
  - **Username:** emaail
  - **Email:** emaail@gmail.com
  - **Password:** emaail

## API Endpoints

### GET Requests
- **`/getWorkoutDataForDay`**: Fetch workout data for a specific day.
- **`/getProfile`**: Retrieve user profile details.
- **`/getBuddies`**: Get a list of matched workout buddies.
- **`/weekProgress`**: Fetch weekly progress data.

### POST Requests
- **`/signin`**: Register a new user.
- **`/login`**: Log in an existing user.
- **`/profile`**: Create or update a user profile.
- **`/workoutUpdate`**: Update workout details.
- **`/forgot-password`**: Request a password reset.
- **`/resetPassword`**: Reset the user password.

## Technology Stack
- **Frontend:** React, CSS.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB Atlas.
- **Authentication:** JWT, Argon2.
- **Deployment:** Netlify (Frontend), Render (Backend).
- **Automation:** Cron-jobs for data cleanup.
- **Email Service:** Nodemailer.

## Design Decisions & Assumptions
- Focus on simplicity and usability for non-technical users.
- Prioritize secure user data handling.
- Enable scalability with a modular architecture.

Project Live Link = https://676d83542c3980f207cbc50f--superlative-marzipan-87edf3.netlify.app/

---
![Screenshot (1509)](https://github.com/user-attachments/assets/bd180b9e-c0a3-46ad-a772-526732a5cb7e)
![Screenshot (1508)](https://github.com/user-attachments/assets/41e4bfdc-eb7c-493a-8951-908f125ae8d8)
![Screenshot (1510)](https://github.com/user-attachments/assets/c9592258-e6a1-440c-8ea6-11a14e2508fe)

For contributions, issues, or suggestions, please contact us via [GitHub Issues](https://github.com/ddhruv8824/Fitness_Buddy/issues).

