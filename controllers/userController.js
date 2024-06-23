const userService = require('../services/userService');
const { validateUser, validateId } = require('../validators/userValidator');
const UserDto = require('../dto/userDto');

exports.listUsers = async (req, res) => {
  const users = await userService.listUsers();
  res.json(users.map(user => new UserDto(user)));
};

exports.getUser = async (req, res) => {
  const { userId } = req.params;
  if (!validateId(userId)) {
    return res.status(400).send('Invalid ID');
  }
  const user = await userService.getUser(userId);
  res.json(new UserDto(user));
};

exports.createUser = async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await userService.createUser(req.body);
  res.status(201).json(new UserDto(user));
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  if (!validateId(userId)) {
    return res.status(400).send('Invalid ID');
  }
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await userService.updateUser(userId, req.body);
  res.json(new UserDto(user));
};

exports.patchUser = async (req, res) => {
  const { userId } = req.params;
  if (!validateId(userId)) {
    return res.status(400).send('Invalid ID');
  }
  const user = await userService.patchUser(userId, req.body);
  res.json(new UserDto(user));
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  if (!validateId(userId)) {
    return res.status(400).send('Invalid ID');
  }
  await userService.deleteUser(userId);
  res.status(204).send();
};
