import { Sequelize, DataTypes } from "sequelize";
export let pabellon_model=(sequelize:Sequelize)=>{
    let pabellon=sequelize.define('t_pabellom',{
        pab_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        pab_nom: {
          type: DataTypes.STRING(50),
          allowNull: true
        }
    }, {
    tableName: 't_pabellon',
    timestamps: true
    });
    return pabellon;
}