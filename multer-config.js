import multer, { memoryStorage } from 'multer'
// const storage = memoryStorage()  // store image in memory

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
const upload = multer({storage:storage})

export default upload