# Certificate Issuing and Verifying System

This project is a simple Certificate Issuing and Verifying System built with React and Vite for the frontend, and Node.js, Express, and MongoDB for the backend. The system allows users to issue certificates and verify their authenticity.

## Project Structure

- `client/`: Contains the frontend code.
- `server/`: Contains the backend code.

## Getting Started

### Setting Up the Backend

1. **Navigate to the server directory:**

   ```bash
   cd server
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the backend server:**

   ```bash
   npm run dev
   ```

   The backend server should now be running on `http://localhost:8000`.

### Setting Up the Frontend

1. **Navigate to the client directory:**

   ```bash
   cd ../client
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the frontend development server:**

   ```bash
   npm run dev
   ```

   The frontend should now be running on `http://localhost:5173`.

## Usage

### Issuing a Certificate

1. Open your browser and navigate to `http://localhost:5173/register-certificate`.
2. Fill out the form with the required details (Recipient's Name, Course Name, Issuer's Name, Date of Issue).
3. Submit the form to issue a certificate. A unique certificate ID will be generated.

### Verifying a Certificate

1. Open your browser and navigate to `http://localhost:5173/verify-certificate`.
2. Enter the unique certificate ID in the form.
3. Submit the form to verify the certificate. The details of the certificate will be displayed if it exists and is valid.

## API Endpoints

- **Issue Certificate:**

  - **Endpoint:** `POST /api/register-certificate`
  - **Description:** Issues a new certificate.


- **Verify Certificate:**
  - **Endpoint:** `GET /api/certificates/?id`
  - **Description:** Verifies the certificate with the given ID.
  