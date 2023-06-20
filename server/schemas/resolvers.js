const { User, Workout, Nutrition } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');



const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    me: async (parent, args, context) => {
      try {
        if (context.user) {
          const user = await User.findOne({ _id: context.user._id }).populate("workouts").populate("nutrition")
          console.log(user)
          return user
        }
        throw new AuthenticationError("no user logged in");
      } catch (err) {
        console.log(err)
        throw new AuthenticationError('No profile with this email found!');
      }
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        console.log(err)
        throw new AuthenticationError('No profile with this email found!');
      }
    },
    addWorkout: async (parent, { name, reps, sets }, context) => {
      if (context.user){
        const workout = await Workout.create({ name, reps, sets });
      console.log(workout)
      const user=await User.findOneAndUpdate({_id:context.user._id}, { $push: { workouts: workout._id } },{new:true})
      console.log(user)
      return workout
    }
    throw new AuthenticationError("no user logged in");
    },
    addNutrition: async (parent, { sleep, water, weight }, context) => {
      if (context.user){
        const nutrition = await Nutrition.create({ sleep, water, weight });
      console.log(nutrition)
      const user=await User.findOneAndUpdate({_id:context.user._id}, { $push: { nutrition: nutrition._id } },{new:true})
      console.log(user)
      return nutrition
    }
    throw new AuthenticationError("no user logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};


module.exports = resolvers;
