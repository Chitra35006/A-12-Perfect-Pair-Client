 # Project Name: Perfect Pair [ A Matrimony Platform ]
 <div align="center">
  <img height="500" width="100%" src="https://github.com/Chitra35006/5_practice/blob/7b7ec840d4041c8fb9027636d689a1d6f2f1eb08/pp.png" />
</div>

## :::Description:::
This project is a Matrimony platform using the powerful MERN stack (MongoDB, Express, React, and Node.js). This online platform will enable users to connect with potential life partners in an intuitive, user-friendly environment. It has admin & user dashboard. Also people can be a premier user by requesting. If admin approve it then he user can see the requested contact. Also it if user a normal user then he have to pay 5usd to see the requested each contact.

## :::Project Features:::
1. **User Friendly Interactivity**
2. **Responsive Design**
3. **Firebase Authentication**

    ### Normal User:
    - Add user bio
    - Update user bio
    - Add contact to Favorite 
    - Upload Marital Status, share reviews, thoughts
    - View user bio
    - Request to get Number [Pay USD]
    - Request for a premium user
    - After approval, can see all user contact information

    ### Admin:
    - Admin Home [see all user total, male, female, revenue]
    - Manage Users: Make admin or premium
    - Approve Premium
    - Approve Contact Request
    - See Success Story

      

<h3 align="left">::: Technologies Used :::</h3>

<div style="display: block; width: 100%; margin-bottom: 20px;">
  <table width="100%" style="border-collapse: collapse;">
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Category</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Technologies</th>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Frontend</td>
      <td style="border: 1px solid #ddd; padding: 8px;">React.js, TailwindCSS, AntDesign</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Backend</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Node.js, Express.js</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Database</td>
      <td style="border: 1px solid #ddd; padding: 8px;">MongoDB</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Authentication</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Firebase Authentication</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">Hosting</td>
      <td style="border: 1px solid #ddd; padding: 8px;">Client (Firebase), Server (Vercel)</td>
    </tr>
  </table>
</div>

<h3 align="left">::: Dependencies :::</h3>

- @ant-design/icons: ^5.5.2  
- @ant-design/plots: ^2.3.3  
- @emotion/react: ^11.14.0  
- @emotion/styled: ^11.14.0  
- @mui/icons-material: ^6.4.0  
- @mui/material: ^6.4.0  
- @react-icons/all-files: ^4.1.0  
- @stripe/react-stripe-js: ^3.1.1  
- @stripe/stripe-js: ^5.5.0  
- @tanstack/react-query: ^5.64.2  
- animate.css: ^4.1.1  
- animate.css-react: ^1.1.0  
- antd: ^5.23.1  
- axios: ^1.7.9  
- clsx: ^2.1.1  
- date-fns: ^4.1.0  
- dayjs: ^1.11.13  
- firebase: ^11.2.0  
- localforage: ^1.10.0  
- lottie-react: ^2.4.0  
- match-sorter: ^8.0.0  
- moment: ^2.30.1  
- moment-timezone: ^0.5.46  
- motion: ^11.18.2  
- react: ^18.3.1  
- react-datepicker: ^7.6.0  
- react-dom: ^18.3.1  
- react-gradient-text: ^0.1.0  
- react-helmet: ^6.1.0  
- react-hook-form: ^7.54.2  
- react-icons: ^5.4.0  
- react-moment: ^1.1.3  
- react-router-dom: ^7.1.3  
- react-select: ^5.9.0  
- sort-by: ^1.2.0  
- sweetalert2: ^11.15.10  
- swiper: ^11.2.1  
- tailwindcss-animate: ^1.0.7  

## ::: Live Link :::
 https://a-12-perfect-pair.web.app

# 🛠 Setup Instructions

Follow these steps to clone the repository, install dependencies, and run the project on your local machine.

## 1. **Clone the Repository**

Start by cloning the repository to your local machine and navigating into the project directory:

```bash
git clone https://github.com/Chitra35006/A-12-Perfect-Pair-Client.git
cd A-12-Perfect-Pair-Client

Install the necessary dependencies using your preferred package manager (npm or yarn):

# Using npm
```bash
npm install

# Or using yarn
```bash
yarn install
 Create a .env file in the root directory of the project:
```bash
touch .env
Add the following variables to your .env file:

env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
VITE_Payment_Gateway_PK=your_payment_gateway_pk

4. Run the Application
You're all set to run the application locally.

bash
# Using npm
npm run dev

# Or using yarn
yarn

5. Access the Application
Open your web browser and navigate to:

http://localhost:5173

 

