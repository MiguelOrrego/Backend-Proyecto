"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projectsController_1 = require("../Controllers/projectsController");
const muter_1 = __importDefault(require("../libs/muter"));
class ProjectsRouter {
    constructor() {
        this.routerProjects = express_1.Router();
        this.config();
    }
    config() {
        this.routerProjects.get('/', projectsController_1.projectsController.getProjects);
        this.routerProjects.get('/:id', projectsController_1.projectsController.getOneProject);
        this.routerProjects.post('/', muter_1.default.single('image'), projectsController_1.projectsController.createProject);
        this.routerProjects.delete('/:id', projectsController_1.projectsController.deleteProject);
        this.routerProjects.put('/:id', projectsController_1.projectsController.updateProject);
    }
}
const router = new ProjectsRouter();
exports.default = router.routerProjects;
