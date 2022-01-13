const CustomerListService = require('./CustomerListService')
exports.CustomerList = async (req, res) => {
    const customers = await CustomerListService.CustomerList();
    console.log(customers);
    res.render('CustomerList', {customers});
}