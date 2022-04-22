const profiles = require('../models/profile.model')
const fs = require('fs').promises


class siteController {
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

    async readFilesComputer(req, res, next) {
        const { id } = req.params;
        const dir = `/Data`;
        var files = await fs.readdir(dir);
        try {
            if (!files.length) {
                res.status(204).send(`NO COMPUTER IN FOLDER`);
                return;
            }

            files = files.filter((fileName) => fileName.substring(0, fileName.search("_")) == id);

            console.log(files);

            if (!files.length) {
                res.status(203).send([]);
                return;
            }

            let data = [];

            for (var i = 0; i < files.length; i++) {
                let temp = await fs.readFile(dir + `/${files[i]}`, 'utf-8');
                data.push(temp);
            }

            res.json(data);
        }
        catch (err) {
            console.log(err);
            res.status(403).send("Error when read file");
        }
    }
}

module.exports = new siteController;