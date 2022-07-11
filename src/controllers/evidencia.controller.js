const EvidenciaService = require('../services/evidencia.service')
const uploadFile = require("../middlewares/upload.handler");
const fs = require("fs");
const baseUrl = process.env.BASE_URL;
const path = require("path");
const service = new EvidenciaService();
const loadImage = imageName => (require(`../Assets/images/Home/${imageName}`).default);

const getEvidencias = async (req, res, next) => {
    try {
        const { id } = req.params;
        const imagenes = [];
        const evidencias = await service.getEvidenciasById(id);
        evidencias.forEach(evidencia => {
            const data = fs.readFileSync('./' + evidencia.dataValues.url, 'base64');
            imagenes.push(data);
        });
        res.json(imagenes);
    }
    catch (error) {
        next(error);
    }
}
const guardarImagen = (nombreImagen, base64, path) => {
    let decodificacion = base64.replace(/^data:image\/\w+;base64,/, '');
    fs.readdir(path, (err) => {
        if (err) {
            fs.mkdirSync(path, { recursive: true });
        }
        fs.writeFile(path + nombreImagen, decodificacion, { encoding: 'base64' }, function () {
        });
    })
}

const createEvidencia = (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        console.log(req.body, 'aca vienen los archivos');
        body.map(async (file) => {
            var nuevoNombre = new Date().valueOf() + '_' + file.nombreImagen;
            const path = 'src/resources/static/assets/uploads/';
            console.log('antes de guardar la imagen');
            guardarImagen(nuevoNombre, file.baseImg, path);
            var file = {
                nombre: nuevoNombre,
                url: path + nuevoNombre,
                type: file.tipo
            };
            var evidencia = await service.createEvidencia(id, file);
        }
        );
        res.status(201).json({ "respuesta": "todo good" })
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    getEvidencias,
    createEvidencia
}