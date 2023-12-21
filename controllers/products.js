const Products = require("../models/product")

const getallproducts = async(req,res)=>{
      const {company,name,featured,sort,select} = req.query;
      const queryObject ={};
      if(company){
        queryObject.company=company;
        
      }
      if(name){
        queryObject.name={$regex:name,$options:"i"};
       
      }

      if(featured){
        queryObject.featured=featured;
        
      }


      let apiData = Products.find(queryObject);

       if (sort){
        let sortFix = sort.split(",").join(" ")
        apiData=apiData.sort(sortFix);
       }
        
       if (select){
        let selectFix = select.split(",").join(" ")
        apiData=apiData.select(selectFix);
       }


       let page =Number(req.query.page)||1;
       let limit = Number(req.query.limit)||3;

       let skip = (page -1)*limit;

       apiData=apiData.skip(skip).limit(limit);


    
      console.log(queryObject);
    const mydata = await apiData
    res.status(200).json({mydata, nbhits: mydata.length})
}

const getallproductsTesting = async(req,res)=>{
    const mydata = await Products.find(req.query)
    res.status(200).json({mydata})
}

module.exports={getallproducts,getallproductsTesting}