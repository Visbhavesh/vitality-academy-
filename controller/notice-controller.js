import Notice from "../model/noticeSchema.js";

export const postNotice = async (req, res) => {
  try {
    const newNotice = new Notice({
      tittle: req.body.tittle,
      paragraph: req.body.paragraph,
    });
    const savedNotice = await newNotice.save();
    res.status(201).json(savedNotice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getAllNotice = async (req, res) => {
  try {
    const notice = await Notice.find();
    res.status(200).json(notice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletNotice = async (req, res) => {
  const { id } = req.params;
  try {
    const notice = await Notice.findById(id);
    if (!notice) {
      return res.status(404).json({ message: "notice not found" });
    }
    await Notice.deleteOne({ _id: id });
    res.json({ message: "notice deleted successfully" });
  } catch (error) {
    res.status(500).json(`message;${error.message}`);
  }
};
