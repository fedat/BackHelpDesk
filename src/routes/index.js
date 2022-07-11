const funcionarioRoutes = require('./funcionario.routes');
const encuestaRoutes = require('./encuesta.routes');
const modificacionRoutes = require('./modificacion.routes');
const solicitudRoutes = require('./solicitud.routes');
const AuthRoutes = require('./auth.routes');
const DependenciaRoutes = require('./dependencia.routes');
const TipoSolcitud = require('./tipoSolicitud.routes');
const Soporte = require('./soporte.routes');
const SubSoporte = require('./subsoporte.routes')
const Charts = require('./chart.routes')
const Evidencias = require('./evidencia.routes')
const Asignacion = require('./asignacion.routes')
function routerApi(app) {
    app.use('/users', funcionarioRoutes);
    app.use('/encuesta', encuestaRoutes);
    app.use('/modificacion', modificacionRoutes);
    app.use('/solicitud', solicitudRoutes);
    app.use('/auth', AuthRoutes);
    app.use('/dependencia', DependenciaRoutes);
    app.use('/tipoSolicitud', TipoSolcitud);
    app.use('/soporte', Soporte);
    app.use('/subsoporte', SubSoporte);
    app.use('/chart', Charts);
    app.use('/evidencia', Evidencias);
    app.use('/asignacion', Asignacion);
}
module.exports = routerApi

