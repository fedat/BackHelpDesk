const { Asignacion, AsignacionSchema } = require('./asignacion.model');
const { Funcionario, FuncionarioSchema } = require('./funcionario.model');
const { Solicitud, SolicitudSchema } = require('./solicitud.model');
const { Dependencia, DependenciaSchema } = require('./dependencia.model');
const { Soporte, SoporteSchema } = require('./soporte.model');
const { Modificacion, ModificacionSchema } = require('./modificacion.model');
const { Encuesta, EncuestaSchema } = require('./encuesta.model');
const { TipoSolcitud, TipoSchema } = require('./tipoSolicitud.model');
const { SubcategoriaSoporte, SubcategoriaSoporteSchema } = require('./subsoporte.model');
const { Evidencia, EvidenciaSchema } = require('./evidencia.model');

function setupModels(sequelize) {
  Funcionario.init(FuncionarioSchema, Funcionario.config(sequelize));
  Asignacion.init(AsignacionSchema, Asignacion.config(sequelize));
  Dependencia.init(DependenciaSchema, Dependencia.config(sequelize));
  Soporte.init(SoporteSchema, Soporte.config(sequelize));
  Encuesta.init(EncuestaSchema, Encuesta.config(sequelize));
  Modificacion.init(ModificacionSchema, Modificacion.config(sequelize));
  TipoSolcitud.init(TipoSchema, TipoSolcitud.config(sequelize));
  SubcategoriaSoporte.init(SubcategoriaSoporteSchema, SubcategoriaSoporte.config(sequelize));
  Evidencia.init(EvidenciaSchema, Evidencia.config(sequelize));
  Solicitud.init(SolicitudSchema, Solicitud.config(sequelize));


  //Funcionario.associate(sequelize.models);
  //Asignacion.associate(sequelize.models);
  //Dependencia.associate(sequelize.models);
  //Soporte.associate(sequelize.models);
  //Modificacion.associate(sequelize.models);
  //Encuesta.associate(sequelize.models);
  //Solicitud.associate(sequelize.models);
}

module.exports = setupModels;