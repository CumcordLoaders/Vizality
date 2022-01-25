import {Plugin} from "@vizality/entities";

export default class CumcordLoader extends Plugin {
  async start() {
    eval(
      await (
        await fetch(
          "https://raw.githubusercontent.com/Cumcord/builds/main/build.js",
          {cache: "no-store"}
        )
      ).text()
    );
  }
  stop() {
    cumcord?.uninject();
  }
}
