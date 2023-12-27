const { where } = require("sequelize");
const db = require("../connection");
const User = db.user;
const addUser = async (req, res) => {
  const bodyData = req.body;

  let data;

  if (bodyData.length > 1) {
    data = await User.bulkCreate(bodyData);
  } else {
    data = await User.create(bodyData);
  }

  res.status(200).json({ data });
};

const getUsers = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json({ data });
};

const getUser = async (req, res) => {
  const data = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data });
};

const deleteUser = async (req, res) => {
  const data = await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ data });
};

const updateUser = async (req, res) => {
  const bodyData = req.body;
  const data = await User.update(bodyData, {
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ data });
};

module.exports = {
  addUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
