module.exports = (mongoose) => {
  const location = mongoose.model(
    "location",
    mongoose.Schema(
      {
        uuid: String,
        name: String,
        latitude: Number,
        longitude: Number,
        address: String,
      },
      { timestamps: true }
    ),
    "location"
  );

  return location;
};
