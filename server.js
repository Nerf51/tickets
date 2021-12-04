const express = require("express");
const app = express();
const cors = require("cors");
const { connect } = require("mongoose");
const ticketSchema = require("./schemas/ticket");
connect("mongodb+srv://Nerf51:nerfnomepegues@apollo.wt99v.mongodb.net/jack?retryWrites=true&w=majority", () => console.log("DB conectada"));

app.use(express.json());
app.use(cors());

app.get("/tickets/:id", async (req, res) => {
    const id = req.params.id;
    if(!id) return res.json({status: 404, message: "ticket not found"});
    const ticket = await ticketSchema.findOne({channel: id}).lean();
    if(!ticket) return res.json({status: 404, message: "ticket not found"});
    res.send(ticket.history)
})

app.listen(8080, () => console.log("Servidor encendido"))