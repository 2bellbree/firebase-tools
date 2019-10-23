import * as Command from "../command";
import * as logger from "../logger";
import * as requireInstance from "../requireInstance";
import * as requirePermissions from "../requirePermissions";
import * as metadata from "../database/metadata";

export default new Command("database:rules:get <id>")
  .description("get a realtime database ruleset by id")
  .option(
    "--instance <instance>",
    "use the database <instance>.firebaseio.com (if omitted, uses default database instance)"
  )
  .before(requirePermissions, ["firebasedatabase.instances.get"])
  .before(requireInstance)
  .action(async (id: metadata.RulesetId, options: any) => {
    const ruleset = await metadata.getRuleset(options.instance, id);
    logger.info(ruleset);
    return ruleset;
  });
