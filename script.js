body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
}

.sidebar {
    width: 250px;
    background-color: #001122; /* Navy blue */
    color: #ffffff;
    padding: 20px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.sidebar h2 {
    margin-bottom: 20px;
    text-align: center;
}

.sidebar button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #002244;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.sidebar button:hover {
    background-color: #004466; /* Navy accent */
}

.main-content {
    margin-left: 250px;
    padding: 20px;
    width: calc(100% - 250px);
}

h1, h2 {
    color: #001122;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #001122;
}

input, textarea, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #ffffff;
    color: #000000;
    box-sizing: border-box;
}

.accent-btn {
    background-color: #004466; /* Navy accent */
    color: #ffffff;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
}

.accent-btn:hover {
    background-color: #005577;
}

.hidden {
    display: none;
}

#invoice {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin-top: 20px;
}

#invoiceContent {
    margin-bottom: 20px;
}

#invoiceLogo {
    max-width: 150px;
    margin-bottom: 20px;
}

#historyList {
    display: flex;
    flex-direction: column;
}

.history-item {
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    cursor: pointer;
}

.history-item:hover {
    background-color: #f0f0f0;
}
