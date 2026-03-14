const express = require('express')
const cors = require('cors')
const app = express();
const User = require("./models/user")
const { StatusCodes } = require('http-status-codes')
const multer = require("multer");
const path = require("path");


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const database = require("./config/db")
database()



// --------------------------------------------------------------------------------------------------------------


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");  
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  
  }
});

const upload = multer({ storage: storage });


app.post("/v1/add", async (req, res) => {
  try {
    upload.single('photo')(req, res, async (err) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: "Faylni yuklashda xatolik", error: err });
      }
      const photoPath = req.file ? req.file.path : null;
      const user = new User({
        FIO: req.body.FIO,
        Passport_Seria: req.body.Passport_Seria,
        photo: photoPath,  
        category: req.body.category
      })
      await user.save(); 
      res.status(StatusCodes.CREATED).json({ message: "User yaratildi", user });
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Xatolik yuz berdi", error: err });
  }
})  


// ------------------------------------------------------------------------------------------------------------


app.get("/v1/all", async (req, res) => {
  try {
    const users = await User.find()  
    res.status(StatusCodes.OK).json({ users })  
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })  
  }
})


// ------------------------------------------------------------------------------------------------------------


app.get("/v1/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
          return res.status(StatusCodes.NOT_FOUND).json({ message: "User topilmadi" });
        }
        res.status(StatusCodes.OK).json({ user });
      } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Xatolik yuz berdi", error });
      }
  })



//   -------------------------------------------------------------------------------------------------------------



app.delete("/v1/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)        
        res.status(StatusCodes.OK).json({message: "malumot o'chirili"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })  

    }
  })


app.listen(3000, () => {
  console.log(`Server is running on port 3000`)
})