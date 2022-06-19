const tracking = require('../models/tracking.model');

class trafficController{
    add(req, res, next){
        const {url} = req.body;

        if (!url){
            res.status(403).send('ERR');
            return;
        }
        
        const trackingObj = {
            url : url,
            
        }
    }

    get(req, res, next){
        res,send('get');
    }
}

module.exports = new trafficController;