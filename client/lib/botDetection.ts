export function isBot(): boolean {
  // For testing purposes, check URL parameters first
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("bot") === "true") return true;
  if (urlParams.get("bot") === "false") return false;

  // Check for bot indicators in user agent
  const userAgent = navigator.userAgent.toLowerCase();

  const botPatterns = [
    "bot",
    "crawl",
    "spider",
    "scrape",
    "facebook",
    "twitter",
    "linkedin",
    "pinterest",
    "whatsapp",
    "telegram",
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "facebookexternalhit",
    "twitterbot",
    "linkedinbot",
    "pinterestbot",
    "skypeuripreview",
    "vkshare",
    "applebot",
    "discordbot",
    "telegrambot",
    "slackbot",
    "curl",
    "wget",
    "httpclient",
    "python",
    "go-http-client",
    "java",
    "okhttp",
    "axios",
    "postman",
    "insomnia",
    "test",
    "monitoring",
    "health",
    "preview",
  ];

  // Check if any bot pattern exists in user agent
  const isBotUserAgent = botPatterns.some((pattern) =>
    userAgent.includes(pattern),
  );

  // Additional checks for bot-like behavior
  const hasWebdriver =
    "webdriver" in navigator ||
    "__webdriver_evaluate" in document ||
    "__selenium_evaluate" in document;
  const hasPhantom = "__phantom" in window || "callPhantom" in window;
  const hasHeadlessChrome = navigator.webdriver === true;

  // Check for automation indicators
  const automationIndicators = hasWebdriver || hasPhantom || hasHeadlessChrome;

  // For regular users, be more lenient
  return isBotUserAgent || automationIndicators;
}

export function getBotRedirectPath(): string {
  return "/lifestyle";
}

export function getUserRedirectPath(): string {
  return "/";
}
