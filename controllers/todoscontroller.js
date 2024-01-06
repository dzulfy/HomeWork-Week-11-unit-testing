const { Todo } = require("../models");

class TodosController {
  static getAll = async (req, res, next) => {
    try {
      const data = await Todo.findAll(
        {where: {status: 'active'}}
      );
      if (data) {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };
  static getById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const data = await Todo.findByPk(id);
      if (data) {
        res.status(200).json(data);
      }
    } catch (err) {
      next(err);
    }
  };
  static create = async (req, res, next) => {
    const { title, status } = req.body;
    try {
      const newTodo = await Todo.create({
        title,
        status,
      });
      res.status(201).json(newTodo);
    } catch (err) {
      next(err);
    }
  };
  static delete = async (req, res, next) => {
    const { id } = req.params;
    try {
      await Todo.update(
        {
          status: "inactive",
        },
        { where: { id } }
      );
      res.status(200).json({ message: "Todo delete successfully" });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = TodosController;
