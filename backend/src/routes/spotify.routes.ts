import { Router } from "express";

import { GetDevicesController } from "../modules/spotify/useCases/getDevices/GetDevicesController";
import { SearchController } from "../modules/spotify/useCases/search/SearchController";

const spotifyRoutes = Router();

const searchController = new SearchController();
const getDevicesController = new GetDevicesController();

spotifyRoutes.get("/search", searchController.handle);
spotifyRoutes.get("/devices", getDevicesController.handle);

export { spotifyRoutes };
