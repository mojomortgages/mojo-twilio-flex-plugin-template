# Mojo Twilio Flex Plugin Template

This is a template for creating Mojo Twilio plugins.

## How to use

1. Ensure the Twilio CLI is installed on your system
2. Run the command

```
twilio flex:plugins:create <the name of your plugin> --template=https://github.com/mojomortgages/mojo-twilio-flex-plugin-template --install --typescript
```

## What does this do?

This template exists because there's some boilerplate code that gets annoying to copy over and over.

### Logger

Use the custom logger class instead of `console.log`.

1. Twilio's console is absolutely filled with messages, so to find your specific console log you most likely need to prefix it with the name of your plugin. The logger class does this for you.
2. The logger class automatically sets log levels for prod and dev (these can be overridden)

```ts
import { Logger } from "./utils/Logger";

const logger = Logger.getInstance();

const method = () => {
  logger.debug("debug");
  logger.log("log");
};
```

### Component Styles

Twilio Paste components need some boilerplate code to have styles.

```ts
import { CustomizationProvider } from "@twilio-paste/core/customization";

// this adds styles to the paste components
Flex.setProviders({
  PasteThemeProvider: CustomizationProvider,
});
```

This is already done for you.
