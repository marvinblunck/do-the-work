const { user } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    me: async(parent, args, context) => {
return User.findOne({_id: context.user._id})
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    login: async (parent, { email, password }) => {
        const profile = await Profile.findOne({ email });
  
        if (!profile) {
          throw new AuthenticationError('No profile with this email found!');
        }
  
        const correctPw = await profile.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(profile);
        return { token, profile };
      },
  },
};


module.exports = resolvers;
