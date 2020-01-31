const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  eventName: {
    type: Schema.Types.String,
    required: true
  },
  subtitle: {
    type: Schema.Types.String,
    required: false
  },
  date: {
    type: Schema.Types.Date,
    required: true
  },
  about: {
    type: Schema.Types.String,
    required: false
  },
  image: {
    type: Schema.Types.String,
    required: false
  },
  category: {
    type: Schema.Types.String,
    required: true
  },
  groupResponsible: {
    type: Schema.Types.String,
    required: false
  },
  upvotes: {
    type: Schema.Types.Number,
    default: 0
  },
  ended: {
    type: Schema.Types.Number,
    default: false
  },
  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Attendees"
    }
  ],
  activities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Activities"
    }
  ]
});

eventsSchema.pre("save", function(next) {
  console.log("event saved");
  next();
});

const Event = mongoose.model("Event", eventsSchema);

module.exports = Event;
