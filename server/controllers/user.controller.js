const { Sequelize, Op, Model, DataTypes } = require('sequelize')
const db = require('../models')
const User = db.user
// const Op = db.Sequelize.Op

/* Find All can be modified to reutn pagination response like...
{
    "totalItems": 8,
    "tutorials": [...],
    "totalPages": 3,
    "currentPage": 1
}

const getPagination = (page, size) => {
  const limit = size ? +size : 3
  const offset = page ? page * limit : 0
  return { limit, offset }
}

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: tutorials } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, tutorials, totalPages, currentPage }
}
*/

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.first_name) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
    return
  }
  // Create a Tutorial
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  }
  // Save Tutorial in the database
  User.create(user)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.'
      })
    })
}

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const first_name = req.query.first_name
  var condition = first_name ? { first_name: { [Op.like]: `%${first_name}%` } } : null
  User.findAll({ where: condition })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      })
    })
}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id
  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving User with id=' + id
      })
    })
}

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id
  User.update(req.body, {
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'User was updated successfully.'
        })
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating User with id=' + id
      })
    })
}

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id
  User.destroy({
    where: { id: id }
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'User was deleted successfully!'
        })
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete User with id=' + id
      })
    })
}

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then((nums) => {
      res.send({ message: `${nums} Users were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all users.'
      })
    })
}
