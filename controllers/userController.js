import User from '../models/userModel.js';
import { ObjectId } from 'mongodb';

export const getAllUsers = async(req, res) => {
  const users = await User.find();
  res.status(200).json(users);
}

export const getUser = async(req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.status(200).json(user);
}

export const createUser = async(req, res) => {
  const { name, age } = req.body;
  const newUser = {
    name: name,
    age: age
  }
  await User.create(newUser);

  res.status(201).json(newUser);
}

export const updateUser = async(req, res) => {
  const { id } = req.params;
  const updates = req.body;

  await User.findByIdAndUpdate(id, updates, { new: true })

  res.status(200).json(updates);
 }

export const deleteUser = async(req, res) => {
  const { id } = req.params

  const afterDeleteOp = await User.findByIdAndDelete(id);

  res.status(200).json(afterDeleteOp);
}
