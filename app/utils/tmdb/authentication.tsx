import { authenticationService } from "@services/tmdb/authentication";
import { cache } from "react";

// Function to get a request token
export const getRequestToken = cache(async () => {
  try {
    return await authenticationService.getRequestToken();
  } catch (error: any) {
    throw new Error(error.message || "Failed to get request token");
  }
});

// Function to create a session
export const createSession = cache(async (data: { [key: string]: string }) => {
  try {
    return await authenticationService.createSession(data);
  } catch (error: any) {
    throw new Error(error.message || "Failed to create session");
  }
});

// Function to create a session with login
export const createSessionWithLogin = cache(
  async (data: { [key: string]: string }) => {
    try {
      return await authenticationService.createSessionWithLogin(data);
    } catch (error: any) {
      throw new Error(error.message || "Failed to create session with login");
    }
  },
);

// Function to delete a session
export const deleteSession = cache(async (data: { [key: string]: string }) => {
  try {
    return await authenticationService.deleteSession(data);
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete session");
  }
});
