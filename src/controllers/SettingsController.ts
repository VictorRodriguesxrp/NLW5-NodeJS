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

  async findByUserName(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUserName(username);

    return response.json(settings);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat);

    return response.json(settings);
  }
}

export { SettingsController };