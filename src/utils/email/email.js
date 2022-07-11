const nodemailer = require('nodemailer');
const config = require('../../config');
const FuncionarioService = require('../../services/funcionario.service');
const service = new FuncionarioService();
const sendMail = async (id, subj, mesg) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        auth: {
            user: config.emailSender,
            pass: config.emailPassword
        }
    });
    const funcionario = await service.getOneFuncionario(id);
    await transporter.sendMail({
        from: '', // sender address
        to: `${funcionario.email}`, // list of receivers
        subject: `${subj}`, // Subject line
        text: `Hola ${funcionario.nombre}, ${mesg}`, // plain text body
       // html: `<b>${mesg}</b>`, // html body
    });
    return { message: 'mail sent' };
}
module.exports ={sendMail}