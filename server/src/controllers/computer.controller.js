const fs = require('fs').promises
const dir = `/Data`;

class computerController {
    async readAllComputerFiles(req, res){
        var files = await fs.readdir(dir);
        try{
            if (!files.length) {
                res.status(203).send([]);
                return;
            }

            let filesData = [];

            const data = [];

            for (var i = 0; i < files.length; i++) {
                const fileData = await fs.readFile(dir + `/${files[i]}`, 'utf-8');
                const profileID = files[i].substring(0, files[i].search("_"));
                const fileName = files[i].substring(files[i].search("_") + 1, files[i].length) 
                data.push({
                    profileID : profileID,
                    fileName : fileName, 
                    fileData : fileData
                });
            }

            res.status(200).send(data);
        } catch (err){
            console.log(err);
            res.status(503).send("Error when getting all computer files")
        }
    }

    async readFilesComputeByProfileID(req, res) {
        const { id } = req.params;
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
            res.status(403).send("Error when reading file");
        }
    }

    async deleteAllFilesComputerByProfileID(req, res, next){
        const {id} = req.params;

        if (!id) {
            res.status(403);
            return;
        }

        try{
            var files = await fs.readdir(dir);
            files = files.filter((fileName) => fileName.substring(0, fileName.search("_")) == id);

            if (!files.length) {
                res.status(304);
                return;
            }

            const deletePaths = files.map((file) => dir + '/' + file);
            for (var i = 0; i < deletePaths.length; i++) {
                await fs.unlink(deletePaths[i]);
            }
            res.status(200).send("Delete files successfully");
        }
        catch(err){
            console.log(err);
            res.status(403).send("Error when delete computer files");
        }
        
    }
}

module.exports = new computerController;