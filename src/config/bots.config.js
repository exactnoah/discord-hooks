export const botsConfig = {
  conservatory: {
    webhook: process.env.CONSERVATORY_DISCORD_WEBHOOK,
    username: "Sir Mittons The Gray",
    avatarUrl: "https://noahsnook.me/assets/images/sirMittonsTheGray.png",
    logfile: "conservatory-quote-bot.log",
    setIdentityOnStart: false,
  },

  virtualVoid: {
    webhook: process.env.VIRTUAL_VOID_DISCORD_WEBHOOK,
    username: "𝒯𝒽𝑒 𝒱𝑜𝒾𝒹'𝓈 𝒱𝑜𝒾𝒸𝑒𝓁𝑒𝓈𝓈",
    avatarUrl: "https://noahsnook.me/assets/images/voidAvatar.png",
    logfile: "virtual-void-quote-bot.log",
    setIdentityOnStart: false,
  },

  suagtfo: {
    webhook: process.env.SUAGTFO_DISCORD_WEBHOOK,
    username: "The Lord of the Rings",
    avatarUrl: "https://noahsnook.me/assets/images/dark-lord-sauron.png",
    logfile: "suagtfo-quote-bot.log",
    setIdentityOnStart: false,
  },

  cs4760: {
    webhook: process.env.CS4760_DISCORD_WEBHOOK,
    username: "ℂ𝕠𝕞𝕚𝕔 ℂ𝕙𝕒𝕠𝕤",
    avatarUrl: "https://noahsnook.me/assets/images/newspaperCartoon.png",
    logfile: "cs4760-quote-bot.log",
    setIdentityOnStart: false,
  }
};