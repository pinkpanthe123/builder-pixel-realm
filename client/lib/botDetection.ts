export function isBot(): boolean {
  // For testing purposes, check URL parameters first
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("bot") === "true") return true;
  if (urlParams.get("bot") === "false") return false;

  // ULTRA-CONSERVATIVE: Only flag the most obvious search engine bots
  // Default to treating users as HUMAN unless we're 100% certain they're bots
  const userAgent = navigator.userAgent.toLowerCase();

  // Only the most obvious search engine bots - nothing else
  const searchEngineBots = [
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot"
  ];

  // Only flag if user agent contains these exact search engine patterns
  const isSearchBot = searchEngineBots.some(bot => userAgent.includes(bot));

  // Only flag obvious automation (never flag regular browsers)
  const hasWebdriver = navigator.webdriver === true;

  // ONLY return true for confirmed search engines or webdriver
  return isSearchBot || hasWebdriver;
}

export function getBotRedirectPath(): string {
  return "/lifestyle";
}

export function getUserRedirectPath(): string {
  return "/";
}
