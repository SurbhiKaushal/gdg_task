const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/notes.db", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Connected to SQLite database");
    }
});


// Create Users Table
db.run(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'user'
)
`);


// Create Notes Table
db.run(`
CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    content TEXT,
    user_id INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
`);

module.exports = db;

 
