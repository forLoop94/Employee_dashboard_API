import { sampleData } from "../data.js"
import User from '../models/userModel.js';

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

export const updateUser = (req, res) => {
 const { id } = req.params;

 const { name, age } = req.body;
 console.log(name, age, id)

 const newArr = [...sampleData];
 console.log(newArr);

 for (let i = 0; i < newArr.length; i++) {
  let holder = newArr[i];
  if(newArr[i].id === parseFloat(id)) {
    newArr[i].name = !name ? holder.name : name;
    newArr[i].age = !age ? holder.age : age;
  }
 }
 res.status(200).json(newArr);
}
