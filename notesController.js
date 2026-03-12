exports.getNotes = (req, res) => {
    const userId = req.user.id;
    const role = req.user.role;
    const search = req.query.search; // get search keyword
    
    let query = "";
    let params = [];

    if (role === "admin") {
        query = "SELECT * FROM notes";
        if (search) {
            query += " WHERE title LIKE ?";
            params.push(`%${search}%`);
        }
    } else {
        query = "SELECT * FROM notes WHERE user_id = ?";
        params.push(userId);
        if (search) {
            query += " AND title LIKE ?";
            params.push(`%${search}%`);
        }
    }

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const offset = (page - 1) * limit;

// Append LIMIT and OFFSET
query += " LIMIT ? OFFSET ?";
params.push(limit, offset);

    });
};

