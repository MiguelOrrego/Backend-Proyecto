import {Request,Response} from "express";
const knex=require("../Bd/conexion");
import path from 'path';
import fs from 'fs-extra'

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
        const {nombre,objetivos,descripcion,compromiso_social,costo_minimo,
               costo_optimo,videos,fecha,ubicacion} = req.body;
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

    public async updateProject(req:Request,res:Response){
        const {id} = req.params;
        console.log(req.file.path);
        const {nombre,objetivos,descripcion,compromiso_social,costo_minimo,
               costo_optimo,videos,ubicacion} = req.body;

        const updateProject={
            nombre:nombre,
            objetivos:objetivos,
            descripcion:descripcion,
            compromiso_social:compromiso_social,
            costo_minimo:costo_minimo,
            costo_optimo:costo_optimo,
            videos:videos,
            image:req.file.path,
            ubicacion:ubicacion
        }
        console.log(updateProject);
        await knex('proyectos').where({id:id}).update(updateProject);
        res.json({message:'Project update'})
    }

    public async deleteProject(req:Request,res:Response){
        const {id}=req.params;
        const project=await knex('proyectos').where('id',id).del();
        res.json({ message:'Project delete'})
    }

}

export const projectsController=new ProjectsController();