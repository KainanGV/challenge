import { VehicleRepository } from "../repositories/VehicleRepository";

class FindAllVehicleService {
  async execute() {
    const data = await VehicleRepository.find();

    return data;
  }
}

export { FindAllVehicleService };
