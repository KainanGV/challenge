import { Router } from "express";

import { vehicleRoutes } from "./vehicle.routes";

const router = Router();

router.use("/veiculos", vehicleRoutes);

export { router };
