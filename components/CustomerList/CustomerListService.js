const {models} = require('../../models')

exports.CustomerList = (page = 0, itemPerPage = 9) => {
    return models.customers.findAll({offset: page*itemPerPage, limit: itemPerPage});
}