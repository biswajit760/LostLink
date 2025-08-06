import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

const authUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ success: false, message: 'Not Authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }
    req.user = user; // ✅ so you can use req.user._id later
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: err.message });
  }
};

export default authUser;
