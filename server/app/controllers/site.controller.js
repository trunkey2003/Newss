class siteController{
    show(req,res,next){
        res.json("App hiển thị hồ sơ");
    }
}

module.exports = new siteController;