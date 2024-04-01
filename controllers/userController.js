import { sampleData } from "../data.js"

export const getAllUsers = (req, res) => {
  res.status(200).json(sampleData);
}