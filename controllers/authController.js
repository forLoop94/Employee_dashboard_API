export const userRegistration = (req, res) => {
  const user = {
    name: "charles"
  }

  res.status(201).json(user)
}