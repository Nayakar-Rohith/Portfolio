const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  greeting: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
});
const aboutSchema = new mongoose.Schema({
  aboutHeading: {
    type: String,
    required: true,
  },
  aboutText: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: true,
  },
});

const experiencesSchema = new mongoose.Schema({
  experienceHeading: {
    type: String,
    required: true,
  },
  experience: [
    new mongoose.Schema({
      role: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      period: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      companyImg: {
        type: String,
        required: true,
      },
    }),
  ],
});

const skillsSchema = new mongoose.Schema({
  SkillsHeading: {
    type: String,
    required: true,
  },
  Skills: [
    new mongoose.Schema({
      SkillsSubHeading: {
        type: String,
        required: true,
      },
      skill: [
        new mongoose.Schema({
          skillName: {
            type: String,
            required: true,
          },
          skillImg: {
            type: String,
            required: true,
          },
        }),
      ],
    }),
  ],
});

const educationSchema = new mongoose.Schema({
  educationHeading: {
    type: String,
    required: true,
  },
  educations: [new mongoose.Schema({
    clgName: {
      type: String,
      required: true,
    },
    clgField: {
      type: String,
      required: true,
    },
    clgPeriod: {
      type: String,
      required: true,
    },
    gpa: {
      type: String,
      required: true,
    },
    clgImg: {
      type: String,
      required: true,
    },
  })]
});
const contactSchema = new mongoose.Schema({
  contactHeading: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

module.exports = {
  intro: model.Schema("introduction", introSchema),
  about: model.Schema("about", aboutSchema),
  experience: model.Schema("experience", experiencesSchema),
  skills: model.Schema("skills", skillsSchema),
  education: model.Schema("education", educationSchema),
  contact: model.Schema("contact", contactSchema),
};
