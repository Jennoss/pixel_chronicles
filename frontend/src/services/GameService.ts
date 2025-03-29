import axios from "axios";
import { GAME_CONFIG } from "../config";

const api = axios.create({
  baseURL: GAME_CONFIG.apiUrl,
});

export const GameService = {
  // Player data
  getPlayerData: async (playerId: string) => {
    try {
      const response = await api.get(`/api/game/progress?playerId=${playerId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching player data:", error);
      throw error;
    }
  },
  
  savePlayerData: async (playerId: string, data: any) => {
    try {
      const response = await api.post(`/api/game/progress`, {
        playerId,
        data,
      });
      return response.data;
    } catch (error) {
      console.error("Error saving player data:", error);
      throw error;
    }
  },
  
  // Game state
  getGameData: async () => {
    try {
      const response = await api.get("/api/game/data");
      return response.data;
    } catch (error) {
      console.error("Error fetching game data:", error);
      throw error;
    }
  },
};
