const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password,
    });

    try {
        const savedUser = await user.save();
        res.json({ error: null, data: { userId: savedUser._id } });
    } catch (error) {
        res.status(400).json({ error });
    }
});
// login route
router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    // throw error when email is wrong
    if (!user) return res.status(400).json({ error: "Email is wrong" });
    // check for password correctness
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).json({ error: "Password is wrong" });
    // create token
    const token = jwt.sign(
        // payload data
        {
            name: user.name,
            id: user._id,
        },
        "TOKEN_SECRET"
    );
    res.header("auth-token", token).json({
        error: null,
        data: {
            token,
        },
    });
});

module.exports = router;