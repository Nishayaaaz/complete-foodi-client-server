const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const stripe = require("stripe")(process.env.PAYMENT_SECRET_KEY);
const jwt = require('jsonwebtoken');

// middleware