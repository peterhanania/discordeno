import { Bot } from "../../bot.ts";
import type { DiscordGatewayPayload } from "../../types/gateway/gateway_payload.ts";
import type { Interaction } from "../../types/interactions/interaction.ts";
import { SnakeCasedPropertiesDeep } from "../../types/util.ts";

export async function handleInteractionCreate(bot: Bot, data: DiscordGatewayPayload) {
  bot.events.interactionCreate(bot, bot.transformers.interaction(bot, data.d as SnakeCasedPropertiesDeep<Interaction>));
}
