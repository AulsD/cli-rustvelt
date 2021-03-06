import { Command } from "@oclif/command";
const { cosmiconfig } = require("cosmiconfig");
const explorer = cosmiconfig("rustvelt");
var debug = require("debug")("rustvelt:base");

type ConfigType = {
  name?: string;
}

export default abstract class Base extends Command {
  static config: null | ConfigType;

  async init() {
    const { config, filepath } = (await explorer.search()) || {};
    debug("parsing config", { config, filepath });
    this.config = config
  }
} 
