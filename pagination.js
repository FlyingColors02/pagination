let express = require("express");
let router = express.Router();
let model = require("../db/user");

router.post(`/:page`,async(req,res)=>{
    let perPage = 10; //per page how much data?
    let pageNo = req.params.page || 1;   //page number
    let data = await model.userModel
                    .find()
                    .skip((perPage*pageNo)-perPage)
                    .limit(perPage);
    let dataCount = await model.userModel.find().count();
    let pageSize = Math.ceil(dataCount/perPage);

    res.send({
        perPage:perPage,
        pageNo:pageNo,
        data:data,
        totalRecord:dataCount,
        pageSize:pageSize
    });
});

module.exports=router;