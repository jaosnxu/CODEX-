import messages from "../messages/en.json";

type MessageKey = keyof typeof messages;

export const t = (key: MessageKey): string => messages[key];
