export function isBot(): boolean {
  // For testing purposes, check URL parameters first
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("bot") === "true") return true;
  if (urlParams.get("bot") === "false") return false;

  // STRICT but PRECISE bot detection - target actual crawlers/bots only
  const userAgent = navigator.userAgent.toLowerCase();

  const strictBotPatterns = [
    // Major search engines (exact matches)
    "googlebot",
    "bingbot",
    "slurp", // Yahoo
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "applebot",

    // Social media crawlers (exact matches)
    "facebookexternalhit",
    "facebookcatalog",
    "twitterbot",
    "linkedinbot",
    "pinterestbot",
    "whatsapp",
    "telegram",
    "skypeuripreview",
    "vkshare",
    "discordbot",
    "slackbot",

    // Development tools (exact matches)
    "curl/",
    "wget/",
    "python-requests",
    "python-urllib",
    "go-http-client",
    "okhttp/",
    "axios/",
    "postman",
    "insomnia",

    // SEO/Analytics tools
    "semrushbot",
    "ahrefsbot",
    "mj12bot",
    "screaming frog",
    "seobot",

    // Archive/Preview services
    "archive.org_bot",
    "wayback",
    "ia_archiver"
  ];

  // Check for exact bot patterns (not partial matches that could affect humans)
  const isBotUserAgent = strictBotPatterns.some((pattern) => {
    if (pattern.endsWith("/")) {
      // For patterns ending with /, check if they appear with version numbers
      return userAgent.includes(pattern);
    }
    // For other patterns, check for word boundaries to avoid false positives
    return new RegExp(`\\b${pattern}\\b`).test(userAgent);
  });

  // Check for automation tools (Selenium/PhantomJS)
  const hasWebdriver =
    "__webdriver_evaluate" in document ||
    "__selenium_evaluate" in document ||
    "webdriver" in navigator;
  const hasPhantom = "__phantom" in window && "callPhantom" in window;

  // Additional checks for headless browsers
  const isHeadless =
    navigator.webdriver === true ||
    (window.outerHeight === 0 && window.outerWidth === 0);

  // Only return true for confirmed bots/crawlers
  return isBotUserAgent || hasWebdriver || hasPhantom || isHeadless;
}

export function getBotRedirectPath(): string {
  return "/lifestyle";
}

export function getUserRedirectPath(): string {
  return "/";
}
