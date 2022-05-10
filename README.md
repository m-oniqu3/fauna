# **Fauna**

This is a very simple e-commerce app made with **React** and **Firebase**. It authenticates users by allowing them to create an account, sign in and sign out. Authenticated users can then view protected routes.

### **Description**

Fauna is a very, very simple e-commerce app for selling plant products. New users can create an account using their email and password, and on success they will be redirected to the protected Home Page that only authenticated users can visit.
Authenticated users will have access to the Garden page, where they can see the indoor plants being sold. Users will be alerted with an error message if the authentication process failed.

### **Features**

- Allows users to create an account with their email and password
- Alerts users if there was an error when trying to create an account
  - Eg. if the email they are trying to use already exists or if their password is too short.
- Users can sign in and out after creating an account
- Includes protected routes so only authenticated users can view Home and Garden Page
- Shows the appropriate home page based on the auth status
- Redirects unauthenticated users to the login page if they try to access a protected route manually.

### **Motivation**

I recently learned Firebase Auth and wanted to create a project around it to practice what I learnt, to see if I understood all the new topics and concepts I was introduced to.

### **Technologies**

This project was built using :

- **React**
- **React Router**
- **The Context API**
- **Firebase**

### [Figma Design File](https://www.figma.com/file/GwMI3qcwzeO4G2SvDiuMYz/fauna?node-id=0%3A1)

Here is the UI design of Fauna.

### **Installation and Development**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### **Available Scripts**

To run this project locally, you can run:

### `npm install`

This will install all the project packages and dependencies.

```
npm install
```

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```
npm start
```
