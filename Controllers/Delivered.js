

const saving_image = async(req, res) => {
   
    console.log(req.file);
    return res.status(201).json({success: true, message: "success", data:  req.file });

}

exports.saving_image = saving_image;