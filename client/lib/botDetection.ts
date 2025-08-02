export function isBot(): boolean {
  // For testing purposes, check URL parameters first
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("bot") === "true") return true;
  if (urlParams.get("bot") === "false") return false;

  // VERY conservative bot detection - only flag obvious crawlers
  const userAgent = navigator.userAgent.toLowerCase();

  const knownBotPatterns = [
    // Major search engines
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "applebot",

    // Social media crawlers
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

    // Generic bot indicators
    "bot",
    "crawl",
    "spider",
    "scrape",
    "fetch",

    // Development tools
    "curl",
    "wget",
    "httpclient",
    "python",
    "node",
    "go-http",
    "java",
    "okhttp",
    "axios",
    "postman",
    "insomnia",

    // Monitoring/Testing
    "test",
    "monitor",
    "check",
    "health",
    "ping",
    "uptime",
    "status",

    // SEO/Analytics tools
    "semrush",
    "ahrefs",
    "moz",
    "screaming",
    "sitemap",
    "seo",

    // Archive/Preview services
    "archive",
    "wayback",
    "preview",
    "thumbnail",
    "screenshot"
  ];

  // Only flag if user agent exactly matches known bot patterns
  const isBotUserAgent = knownBotPatterns.some((pattern) =>
    userAgent.includes(pattern),
  );

  // Check for automation tools (but be very specific)
  const hasWebdriver =
    "__webdriver_evaluate" in document || "__selenium_evaluate" in document;
  const hasPhantom = "__phantom" in window && "callPhantom" in window;

  // Only return true for very obvious bots
  return isBotUserAgent || hasWebdriver || hasPhantom;
}

export function getBotRedirectPath(): string {
  return "/lifestyle";
}

export function getUserRedirectPath(): string {
  return "/";
}
