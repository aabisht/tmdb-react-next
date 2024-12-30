import { configurationService } from "@services/tmdb/configuration";
import { cache } from "react";

// Function to get API configuration
export const getAPIConfiguration = cache(async () => {
  try {
    return await configurationService.getRequestToken();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch API configuration");
  }
});

// Function to get countries
export const getCountries = cache(async (language?: string) => {
  try {
    return await configurationService.getCountries(language);
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch countries");
  }
});

// Function to get jobs
export const getJobs = cache(async () => {
  try {
    return await configurationService.getJobs();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch jobs");
  }
});

// Function to get languages
export const getLanguages = cache(async () => {
  try {
    return await configurationService.getLanguages();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch languages");
  }
});

// Function to get primary translations
export const getPrimaryTranslations = cache(async () => {
  try {
    return await configurationService.getPrimaryTranslations();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch primary translations");
  }
});

// Function to get timezones
export const getTimezones = cache(async () => {
  try {
    return await configurationService.getTimezones();
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch timezones");
  }
});
