
export class TeacherModel {
    constructor(id,cedula,correoelectronico, telefono, telefonocelular, fechanacimiento,
        sexo, direccion, nombre, apellidopaterno,apellidomaterno, idCarreras, usuario,
        nacionalidad ) {
            this.id = id;
            this.cedula = cedula;
            this.correoelectronico = correoelectronico;
            this.telefono = telefono;
            this.telefonocelular = telefonocelular;
            this.fechanacimiento = fechanacimiento;
            this.sexo = sexo;
            this.direccion = direccion;
            this.nombre= nombre;
            this.apellidopaterno = apellidopaterno;
            this.apellidomaterno =apellidomaterno;
            this.idCarreras = idCarreras;
            this.usuario = usuario;
            this.nacionalidad = nacionalidad;
        }
}