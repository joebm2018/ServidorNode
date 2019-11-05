import express,{Request,Response} from 'express';

export class Servidor{
    public app:express.Application;
    public puerto:any;
    constructor(){
        this.app=express();
        this.puerto= process.env.PORT || 3000,
        this.configurarRutas();
    }
    start(){
        this.app.listen(this.puerto,()=>{
            console.log("Servidor Corriendo en el puerto "+ this.puerto);
        })
    }
    configurarRutas(){
        this.app.get('/',(req:Request, res:Response)=>{
            res.status(200).send("Bienvenido al Servidor");
            
        })
    }

}