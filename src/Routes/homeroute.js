import { Router } from "express";
import { getrequestHomepage } from "../controllers/homePage.js";


const Routers = Router()
export const homeRoute = Routers.get("/", getrequestHomepage)