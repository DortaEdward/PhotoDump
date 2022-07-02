const jwt = require('jsonwebtoken');
const Joi = require('joi');

const registerJoiSchema = Joi.object({
  displayName: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  userImage:Joi.string().domain(),
});

const loginJoiSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

const postJoiSchema = Joi.object({
  userId: Joi.string().required(),
  imageUrl: Joi.string().domain().required(),
});

const commentJoiSchema = Joi.object({
  postId: Joi.string().required(),
  ownerId: Joi.string().required(),
  content: Joi.string().required().min(1),
});

async function validateRegister(payload){
  return await registerJoiSchema.validateAsync(payload);
};

async function validateLogin(payload){
  return await loginJoiSchema.validateAsync(payload);
};

async function validatePost(payload){
  return await postJoiSchema.validateAsync(payload);
};

async function validateComment(payload){
  return await commentJoiSchema.validateAsync(payload);
};

async function createJWT(user, res){
  delete user._doc.password;
  delete user._doc.createdAt;
  delete user._doc.updatedAt;
  delete user._doc.__v;
  const payload = {...user._doc};
  jwt.sign( payload,
    process.env.JWTSECRET,
    { expiresIn: '1d' },
    (error, token) => {
      if(error){
        res.status(500);
        next(error);
      } else {
        res
          .status(200)
          .json({
            status: res.statusCode,
            token:token
          })
      }
    }
  )
}

module.exports = {
  createJWT,
  validateComment,
  validateLogin,
  validateRegister,
  validatePost
}