import logLevelData from "./log-level";
import pino, { Logger } from "pino";

const logLevels = new Map<string, string>(Object.entries(logLevelData));

function getLogLevel(logger: string): string {
  return logLevels.get(logger) || logLevels.get("*") || "info";
}

export default function logger(name: string): Logger {
  return pino({ name });
}
