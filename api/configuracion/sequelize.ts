import { pabellon_model } from '../modelos/Pabellon';
import { aula_model } from '../modelos/Aula';
const Sequelize=require('sequelize');
export const conexion= new Sequelize("aulas2","root","root",{
    host:'localhost',
    dialect:'mysql',
    timezone:'-05:00',
    dialectOptions:{
        useUTC:false,
        dateStrings:true,
        typeCast:true
    }
});
export const Pabellon:any=pabellon_model(conexion);
export const Aula:any=aula_model(conexion);

Pabellon.hasMany(Aula,{foreignKey:'pab_id'});
Aula.belongsTo(Pabellon,{foreignKey:'pab_id'});