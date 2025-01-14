const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseURL = process.env.SUPABASE_URL;
const supabaseKey = process.env.ANON_KEY;
const supabase = createClient(supabaseURL, supabaseKey);
const SECRET = process.env.SECRET;

const createToken = (name, id) => {
  return jwt.sign({ name, id }, SECRET, { expiresIn: "48h" });
};

// user registration
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const { data: exisitingUser, error: existingUserError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (exisitingUser) {
      return res.status(400).send({ message: "User already exists" });
    }
    if (existingUserError && existingUserError.code !== "PGRST116")
      throw existingUserError;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const { data, error } = await supabase
      .from("users")
      .insert([{ name, email, password_hash: hashedPassword }])
      .single();

    if (error) throw error;

    res.status(201).send({ message: "User created" });
  } catch (error) {
    res.status(500).send({ message: "An error occured registering user" });
  }
};

// user login

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data: user, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    if (userError) throw userError;

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(400).send({ message: "Invalid password" });
    }

    const token = createToken(user.name, user.id);
    const exp = Date.now() + 48 * 60 * 60 * 1000;

    const response = {
      name: user.name,
      userId: user.id,
      token,
      exp,
    };

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send({ message: "An error occured logging in user" });
  }
};

module.exports = {
  register,
  login,
};
