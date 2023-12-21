const express =require('express')
const router = express.Router();

const {getallproducts,getallproductsTesting}=require("../controllers/products")

router.route("/").get(getallproducts)
router.route("/testing").get(getallproductsTesting)

module.exports= router;