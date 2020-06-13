let express = require("express");
let mongoose = require("mongoose");
let port = process.env.PORT||4500;
let app = express();
app.use(express.json());
let pagination = require("./routes/pagination");
app.use("/api/pagination",pagination);

mongoose.connect("mongodb://localhost/CoordinateMongodb&Express",{ useNewUrlParser: true,  useUnifiedTopology: true })
        .then(()=>console.log("database got connected"))
        .catch(error=>console.log(`database not connected${error.message}`));

app.listen(port,()=>console.log(`app is working on port ${port}`));