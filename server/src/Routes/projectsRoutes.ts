import {Router} from "express";
import {projectsController} from "../Controllers/projectsController";
import upload from '../libs/muter'

class ProjectsRouter {

    public routerProjects:Router=Router();
    constructor() {
        this.config();
    }

    config():void{
        this.routerProjects.get('/',projectsController.getProjects);
        this.routerProjects.get('/:id',projectsController.getOneProject);
        this.routerProjects.post('/',upload.single('image'),projectsController.createProject);
        this.routerProjects.delete('/:id',projectsController.deleteProject);
        this.routerProjects.put('/:id',projectsController.updateProject)
    }
}
const router=new ProjectsRouter();
export default router.routerProjects;