body {
    font-family: Arial, sans-serif;
    background-color: #001122; /* Navy blue background */
    color: #ffffff;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    background-color: #002244; /* Slightly lighter navy for contrast */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    max-width: 600px;
    width: 100%;
}

h1, h2 {
    text-align: center;
    color: #ffffff;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
    font-weight: bold;
}

input, textarea, select {
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #ffffff;
    color: #000000;
}

button {
    margin-top: 20px;
    padding: 10px;
    background-color: #004466; /* Navy accent */
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #005577;
}

.hidden {
    display: none;
}

#invoice {
    margin-top: 20px;
    padding: 20px;
    background-color: #ffffff;
    color: #000000;
    border-radius: 8px;
}

#invoiceContent {
    display: flex;
    flex-direction: column;
}

#invoiceLogo {
    max-width: 100px;
    margin-bottom: 10px;
}
