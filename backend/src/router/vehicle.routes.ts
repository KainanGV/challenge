import { Router, Request, Response } from "express";

import { vehicleController } from "../controllers";

const vehicleRoutes = Router();

const handleGetAllController = (request: Request, response: Response) =>
  vehicleController.handleGetAll(request, response);

vehicleRoutes.get("/", handleGetAllController);
vehicleRoutes.get("/", vehicleController.handleGetFilter);

export { vehicleRoutes };
