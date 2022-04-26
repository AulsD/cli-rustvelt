import { Command, flags } from "@oclif/config";

class Rustvelt extends Command {
  static description = "describe the command here";

  static flags = {
    version: flags.version({char: "v"}),
    help: flags.help({ char: "h" }),
    name: flags.string({
      char: "n",
      description: "name to print",
      default: "people"
    }),
    force: flags.boolean({ char: "r" })
  };

  static args = [{ name: "file" }];
  static strict = false;

  async run(){
    const {argv, flags} = this.parse(Rustvelt);
    console.log("hello from serve");
    const name = flags.name || "world";
    console.log(`hello gans ${name} from ./src/index.ts`)
  }
}

export = Rustvelt;
