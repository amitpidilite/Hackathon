const Order = require('../models/Order');
const User = require('../models/User');
const Estimator = require('../models/Estimator');
const DP = require('../models/Dp');
const Persona = require('../models/Persona');
// const PersonaUser = require('../models/PersonaUser');

exports.getAllData = async (req, res) => {
  console.log("WERVG")
  try {
    const orders = await Order.find();
    const users = await User.find();
    const estimators = await Estimator.find();
    const dps = await DP.find();
    const personas = await Persona.find();
    // const personaUsers = await PersonaUser.find();

    res.status(200).json({
      success: true,
      data: {
        orders,
        users,
        estimators,
        dps,
        personas,
        // personaUsers
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
