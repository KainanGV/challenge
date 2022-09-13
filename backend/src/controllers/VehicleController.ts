import { Request, Response } from "express";

import { FindAllVehicleService } from "../services/FindAllVehicleService";

class VehicleController {
  constructor(private findAllVehicleService: FindAllVehicleService) {}

  handleGetAll(request: Request, response: Response): Response {
    const result = this.findAllVehicleService.execute();

    return response.json(result);
  }
}

export { VehicleController };
