import {Request,Response} from "express";
const knex=require("../Bd/conexion");

class ProjectsController {

    public async getProjects(req:Request,res:Response){
        const lists = await knex.select('*').from('proyectos')        
        res.json(lists)
    }

    public async getOneProject(req:Request,res:Response){
        const {id}= req.params;
        const project= await knex('proyectos').where({id:id}).select('*');
        res.json(project)
    }
    public async createProject(req:Request,res:Response){
        const {nombre,objetivos,descripcion,compromiso_social,costo_minimo,costo_optimo,videos,fecha,ubicacion} = req.body;
        console.log(req.file.path);
        
        const newProject={
            nombre:nombre,
            objetivos:objetivos,
            descripcion:descripcion,
            compromiso_social:compromiso_social,
            costo_minimo:costo_minimo,
            costo_optimo:costo_optimo,
            videos:videos,
            image:req.file.path,
            fecha:fecha,
            ubicacion:ubicacion
        }
        const project=await knex('proyectos').insert(newProject)
        console.log(req.body);
        res.json({message:'Project create'})
    }

    public async deleteProject(req:Request,res:Response){
        const {id}=req.params;
        await knex('proyectos').where('id',id).del();
        res.json({message:'Project delete'})
    }
    public async updateProject(req:Request,res:Response){
        const {id} = req.params;
        await knex('proyectos').where('id','=',id).update(req.body);
        res.json({message:'Project update'})

    }

}

export const projectsController=new ProjectsController();