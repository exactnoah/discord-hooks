# Discord Hooks
Houses discord webhooks with secrets management, various api endpoint integrations, node.js, and github actions workflows.

## Build Info for other Technical Users
- daily-quote.yml is the pipeline. You can add your bot api webhook as an environment variable and pass it to your scripts. 
- Add a producer for whatever bot you integrate.
- If you want to interact with an external API, you can use `fetch` and hit whatever api you want. I have an example that gets a daily quote in json.
- You can modify whatever bot you use. All bots have a webhook (discord integration; this is the environment variable), username, avatarURL (profile picture), logfile, and boolean for resetting their identities in case discord bugs out.
- package.json is a node package where you'll need to run your script.
*note:* the github workflow passes it to a server agent in a virtual machine which they create and destroy for you upon request. This particular app, is on a schedule. (~9:00am). The node (node.js) is a javascript runtime environment which is a fancy word for a javascript application that lets you run whatever scripts you want as long as you adhere to their schema.

## Instructions for Public Use

Anyone else wanting to use this should fork and clone their project, adding their webhook as an environment variable.
Repo → Settings → Secrets and variables → Actions → New repository secret.

To operate this, you will need to modify the code to enable the bots of your choosing in a fork with the corresponding webhooks they wish to use.

## Version and Feature Table

| Version | Release Date | Features | Notes |
|----------|---------------|-----------|-------|
| 1.0.3 | Nov 2025 | Introduced webhooks for public use. Enabled bots to run, except SUGTFO. | Stable version. |

## Contributor(s)
| Name           | Email                          |
|----------------|--------------------------------|
| Noah Ewell     | [noahewell.life@gmail.com](mailto:noahewell.life@gmail.com) |