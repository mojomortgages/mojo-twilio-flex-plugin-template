import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";
import { CustomizationProvider } from "@twilio-paste/core/customization";
import { Logger } from "./utils/Logger";

// this adds styles to the paste components
Flex.setProviders({
  PasteThemeProvider: CustomizationProvider,
});

const logger = Logger.getInstance();

export const PLUGIN_NAME = "MojoTwilioPluginTemplate";

export default class CallWrapUpPromptPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    logger.debug("debug");
    logger.log("log");
  }
}
