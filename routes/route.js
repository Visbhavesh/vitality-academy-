import express from "express";
import { userSignUp, userLogIn } from "../controller/user-controller.js";
import {
  getAllNotes,
  postNote,
  deletnotes,
} from "../controller/notes-controller.js";
import {
  postAllResult,
  getAllResults,
  deleteResult,
} from "../controller/result-controller.js";
import {
  postLecture,
  getAllLecture,
  deletLecture,
} from "../controller/lecture-controller.js";
import {
  postNotice,
  getAllNotice,
  deletNotice,
} from "../controller/notice-controller.js";
import {
  postAllNotice_img,
  getAllNotice_img,
  deletenotice_img,
} from "../controller/notice_img-controller.js";

const router = express.Router();

//login & signup & all other routes
router.post("/signup", userSignUp);
router.post("/login", userLogIn);
router.post("/postNotes", postNote);
router.get("/getallNotes", getAllNotes);
router.delete("/deletenotes/:id", deletnotes);
router.post("/postALLResult", postAllResult);
router.get("/getAllResults", getAllResults);
router.delete("/deleteresult/:id", deleteResult);
router.get("/getallLecture", getAllLecture);
router.post("/postLectures", postLecture);
router.delete("/deletLecture/:id", deletLecture);
router.get("/getAllNotice", getAllNotice);
router.post("/postNotice", postNotice);
router.delete("/deletenotice/:id", deletNotice);
router.post("/postAllNotice_img", postAllNotice_img);
router.get("/getAllNotice_img", getAllNotice_img);
router.delete("deletenotice_img/:id", deletenotice_img);

export default router;
