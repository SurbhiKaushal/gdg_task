const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const express = require("express");
require("dotenv").config();
require("./database/init");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const notesRoutes = require("./routes/notesRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "GDG Notes API",
      version: "1.0.0",
      description: "Backend API for GDG recruitment project",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req,res)=>{
    res.send("API Running");
});

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});
