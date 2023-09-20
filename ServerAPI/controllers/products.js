const Product = require("../models/products");

const getAllProducts = async (req, res) => {
    const { company, name, feature, sort, select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }

    if (feature) {
        queryObject.feature = feature;
    }

    if (name) {
        queryObject.name = {$regex: name, $options: "i"};
    }

    let apiData = Product.find(queryObject);

    if (sort) {
        // let sortFix = select.replace("," , " ");
        let sortFix = select.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        // let sortFix = select.replace("," , " ");
        let sortFix = select.split(",").join(" ");
        apiData = apiData.select(sortFix);
    }

    const myData = await apiData;  
    console.log(myData );
    res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query).select("name"); 
    console.log(req.query);
    res.status(200).json({ myData });
};

module.exports = {getAllProducts, getAllProductsTesting};