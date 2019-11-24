import express, {Application} from "express";
import morgan from "morgan";
import cors from "cors";
import projectsRoutes from "./Routes/projectsRoutes";
import path from 'path';


class Server {

    public app:Application;
    
    constructor(){
        this.app=express();
        this.config();
        this.routes();
        
    }

    config():void{
        this.app.set('port',process.env.PORT || 3200);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use('/uploads', express.static(path.resolve('uploads')));

    }

    routes():void{
        this.app.use('/ms/projects',projectsRoutes)
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on Port',this.app.get('port'));
            
        })
    }

}

const server= new Server();
server.start();