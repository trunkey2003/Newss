const profiles = require('../models/profile.model')


class profileController {
    showAllProfile(req, res, next) {
        profiles.find({})
            .then((profiles) => {
                res.status(200).send(profiles);
            })
            .catch(() => {
                res.status(403).send("Cannot get profiles");
            })
    }

    showProfileByID(req, res, next) {
        const { id } = req.params;

        profiles.findOne({ id: id })
            .then((profile) => {
                if (!profile) {
                    res.status(404).send(`NO PROFILE HAVE ID : ${id}`);
                    return;
                }
                res.json(profile);
            })
            .catch((err) => {
                res.status(503).send(err);
            })
    }

    deleteProfileByID(req, res, next){
        const {id} = req.params;
        profiles.findOneAndDelete({id : id})
        .then(() => next())
        .catch((err) => {
            console.log(err);
            res.status(503).send('Delete request has not been completed')
        })
    }

    deleteComputerRelatingProfileByID(req, res, next){

    }

    postProfile(req, res, next) {
        const newProfile = new profiles(req.body);
        newProfile.save()
            .then((profile) => {
                res.send(profile);
            })
            .catch((err) => {
                console.log(err);
                res.status(503).send("Err add profile");
            });
    }
}

module.exports = new profileController;