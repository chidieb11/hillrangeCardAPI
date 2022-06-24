import Data from "../models/Data";

export const createNewData = async (req, res) => {
  const newData = new Data(req.body);
  try {
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.log(error);
  }
};

export const updateData = async (req, res) => {
  try {
    const updatedData = await Data.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (req, res) => {};

export const getData = async (req, res) => {};

export const getAllData = async (req, res) => {};
