import Notice_img from "../model/noticeScema_img.js";

export const postAllNotice_img = async (req, res) => {
  try {
    const newNotice_img = new Notice_img({
      title1: req.body.title1,
      image: req.body.image,
    });
    const savedNotice_img = await newNotice_img.save();
    res.status(201).json({ savedNotice_img });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getAllNotice_img = async (req, res) => {
  try {
    const notice_img = await Notice_img.find();
    res.status(200).json(notice_img);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deletenotice_img = async (req, res) => {
  const { id } = req.params;
  try {
    const notice_img = await Notice_img;
    if (!notice_img) {
      return res.status(404).json({ message: "notice not found" });
    }
    await Notice_img.deleteOne({ _id: id });
    res.json({ message: "notice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
