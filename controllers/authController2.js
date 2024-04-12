import jwt from 'jsonwebtoken';

const posts = [
  {
    username: "Kyle",
    title: "post 1"
  },
  {
    username: "Jim",
    title: "post 2"
  },
]

export const getPosts = (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
}

export const login = (req, res) => {
  //Authenticate user

  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.json({ accessToken: accessToken })
}

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(" ")[1]
  if (token === null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}