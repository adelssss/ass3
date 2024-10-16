import express from "express";
import {fetch, create, update, deleteBlog, getBlogById} from "../controller/blogController.js";

const route= express.Router();

route.post("/create",create)
route.get("/getAllBlogs", fetch);
route.get("/get/:id", getBlogById);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteBlog)

export default route;
