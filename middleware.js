const API_KEY = '123456';

function validateApiKey(req, res, next) {

    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== API_KEY) {
        return res.status(401).json({
            message: 'API KEY inválida'
        });
    }

    next();
}

module.exports = validateApiKey;