// const productDetailService = require('./productDetailService')
const {models} = require('../../models')

exports.CustomerDetail = async (req, res, next) => {
    const id = req.params.id;
    const page = req.query.page;
    const itemPerPage = 3;
    if(page){
        const customer = await models.customers.findOne({where: {id: id}, raw: true})
        res.render('productDetail', {customer});
    }
    else{
        const customer = await models.customers.findOne({where: {id: id}, raw: true})
        res.render('productDetail', {customer});
    }
}