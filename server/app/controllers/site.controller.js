class siteController{
    show(req,res,next){
        res.json("App hiển thị hồ sơ");
    }

    getUsSong(req,res,next){
        // usSong.find({}) 
        // .then((songs) => res.json(songs))
    }

    getVnSong(req,res,next){
        // vnSong.find({}) 
        // .then((songs) => res.json(songs))
    }
}

module.exports = new siteController;