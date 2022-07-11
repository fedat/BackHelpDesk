"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const routerApi = (require("./../routes"));
let {engine} = __importDefault(require("express-handlebars"));
__importDefault(require("./../utils/auth"));

class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.iniciarConfiguracion();
    }
    iniciarConfiguracion() {
        this.app.engine("handlebars", engine({ defaultLayout: "main" }));
        this.app.set("view engine", "handlebars");
        this.app.set('PORT', 3210);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({
            extended: true,
        }));
        routerApi(this.app);
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }


    iniciarServidor() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('servidor funcionando en el puerto: ', this.app.get('PORT'));
        });
    }
}
exports.default = Servidor;
