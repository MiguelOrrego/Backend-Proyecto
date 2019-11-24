"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require("../Bd/conexion");
class ProjectsController {
    getProjects(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lists = yield knex.select('*').from('proyectos');
            res.json(lists);
        });
    }
    getOneProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const project = yield knex('proyectos').where({ id: id }).select('*');
            res.json(project);
        });
    }
    createProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, objetivos, descripcion, compromiso_social, costo_minimo, costo_optimo, videos, fecha, ubicacion } = req.body;
            console.log(req.file.path);
            const newProject = {
                nombre: nombre,
                objetivos: objetivos,
                descripcion: descripcion,
                compromiso_social: compromiso_social,
                costo_minimo: costo_minimo,
                costo_optimo: costo_optimo,
                videos: videos,
                image: req.file.path,
                fecha: fecha,
                ubicacion: ubicacion
            };
            const project = yield knex('proyectos').insert(newProject);
            console.log(req.body);
            res.json({ message: 'Project create' });
        });
    }
    deleteProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield knex('proyectos').where('id', id).del();
            res.json({ message: 'Project delete' });
        });
    }
    updateProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield knex('proyectos').where('id', '=', id).update(req.body);
            res.json({ message: 'Project update' });
        });
    }
}
exports.projectsController = new ProjectsController();
