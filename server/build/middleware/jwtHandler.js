"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var config_1 = require("../services/config");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var generateToken = function (payload) {
    return jsonwebtoken_1["default"].sign(payload, config_1.secret);
};
var getTokenFrom = function (request) {
    var authorization = request.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7);
    }
    else {
        return null;
    }
};
var tokenVerify = function (token) { return jsonwebtoken_1["default"].verify(token, config_1.secret); };
var validateToken = function (req, res, next) {
    try {
        var token = getTokenFrom(req);
        var email = tokenVerify(token);
        //     let payload: JwtPayload;
        //     console.log(token);
        //     if (token) {
        //         payload = tokenVerify(token) as JwtPayload;
        //         next();
        //     }
        //      else {
        //         next(HTTPError(401,{error: 'token invalid or missed'}))
        //     }
        // } catch (error:any) {
        //     res.status(400).send(error.message)
        // }
        // let email: any = tokenVerify(token);
        // console.log(email)
        if (!token || email != 'admin') {
            throw new Error('token invalid or missing!');
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
var validateTokenLogin = function (req, res, next) {
    try {
        var token = getTokenFrom(req);
        var email = tokenVerify(token);
        //     let payload: JwtPayload;
        //     console.log(token);
        //     if (token) {
        //         payload = tokenVerify(token) as JwtPayload;
        //         next();
        //     }
        //      else {
        //         next(HTTPError(401,{error: 'token invalid or missed'}))
        //     }
        // } catch (error:any) {
        //     res.status(400).send(error.message)
        // }
        // let email: any = tokenVerify(token);
        // console.log(email)
        if (!token || !email) {
            throw new Error('token invalid or missing!');
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports["default"] = {
    generateToken: generateToken,
    validateToken: validateToken,
    validateTokenLogin: validateTokenLogin
};
