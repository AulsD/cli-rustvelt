import { Command, flags } from "@oclif/config";
var debug = require("debug")("rustvelt:build");
class Mycli extends Command {
  static description = "describe the command here";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({char: "n"}),
    name: flags.string({
      char: "n",
      description: "name to print",
      default: "people"
    }),
    force: flags.boolean({ char: "f" })
  };

  static args = [{ name: "file" }];
  static strict = false;
  async run() {

    const {args,flags} = this.parse(Mycli);
    debug("parsing build args", args);
    debug("parsing build flags", flags);
    console.log("hello from build");
    const name = flags.name || "world";
    this.log(`hello commanders ${name} from ./src/index.ts`);
  }
}

export = Mycli;
