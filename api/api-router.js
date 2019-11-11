const router = require('express').Router();
const bcrypt = require('bcrypt.js')
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
const password = req.body.password

const hashedPassword = bcrypt.hashSync(password, 12)

return {
password: password,
hashedPassword: hashedPassword
}
})

module.exports = router;
