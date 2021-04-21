import { Request, Response } from "express";

import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { chat, username } = request.body;

    const settingServices = new SettingsService();
    
    try {
      const settings = await settingServices.create({chat, username});

      return response.status(201).json(settings);
    } catch (Err) {
      return response.status(400).json({
        Error: Err.message
      });
    }
  }
}

export { SettingsController };