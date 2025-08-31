📊 JSON Table Management with JavaScript

A simple web application built using HTML, CSS, and Vanilla JavaScript that allows users to view, add, update, delete, and search records stored in a JSON array.

This project demonstrates dynamic table rendering and JSON data manipulation without using any external frameworks or libraries (no React, Angular, Vue, jQuery, etc.).

📌 Features

Display JSON Data
Renders a JSON array into an interactive HTML table.

Add Row
Users can add a new record by entering ID, Name, and Email in the form.

Prevents duplicate IDs

Validates email format

Update Row

Each row has an Edit button

Clicking Edit loads the row values into the form

The form button changes to Update Row mode

Changes are saved back into the JSON and the table is refreshed

Delete Row

Remove a row by clicking the Delete button

Data is updated instantly

Search/Filter

Search by Name or Email dynamically

Table updates in real-time as you type

Validation

Prevents invalid email formats

Prevents duplicate IDs

Responsive Design (Optional)

Table and form scale well on small screens (with CSS tweaks).

🛠️ Tech Stack

HTML5 – Structure of the app

CSS3 – Basic styling and responsiveness

JavaScript (ES6) – Core logic for rendering, updating, and deleting

📂 Project Structure
json-table-project/
│
├── index.html     # Main HTML file (UI structure)
├── index.js      # JavaScript logic (render, add, update, delete)
└── index.css      # CSS styles (optional)

🚀 Getting Started

Clone or download the project folder.

git clone https://github.com/sujjwal21/vspagy
cd vspagy


Open index.html in your browser (double-click or right-click → "Open with browser").

You’ll see a table with sample JSON data and a form to add/edit rows.

📸 Screenshots (Optional)

Add screenshots of your table UI here if you want.

✨ Example Dataset
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
]

📖 Usage Guide

Add Row

Enter a unique ID, a name, and a valid email.

Click Add Row to insert into the table.

Edit Row

Click Edit on any row.

The form will be pre-filled with row values.

Make changes and click Update Row.

Delete Row

Click Delete on any row to remove it.

Search

Type in the search box to filter results by name or email.
