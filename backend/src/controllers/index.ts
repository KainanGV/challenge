import { FindAllVehicleService } from "../services/FindAllVehicleService";
import { VehicleController } from "./VehicleController";

const findAllVehicleService = new FindAllVehicleService();

const vehicleController = new VehicleController(findAllVehicleService);

export { vehicleController };
