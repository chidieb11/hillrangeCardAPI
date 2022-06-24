import express from "express";
import {
  createNewData,
  deleteData,
  getAllData,
  getData,
  updateData,
} from "../controllers/DataController";

const dataRouter = express.Router();

dataRouter.post("/", createNewData);
dataRouter.put("/:id", updateData);
dataRouter.delete("/:id", deleteData);
dataRouter.get("/:id", getData);
dataRouter.get("/", getAllData);

export default dataRouter;
