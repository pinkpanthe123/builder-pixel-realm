export function isBot(): boolean {
  // For testing purposes, check URL parameters first
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("bot") === "true") return true;
  if (urlParams.get("bot") === "false") return false;

  // VERY conservative bot detection - only flag obvious crawlers
  const userAgent = navigator.userAgent.toLowerCase();

  const knownBotPatterns = [
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "facebookexternalhit",
    "twitterbot",
    "linkedinbot",
    "curl/",
    "wget/",
    "python-requests/",
    "node-fetch/",
    "go-http-client/"
  ];

  // Only flag if user agent exactly matches known bot patterns
  const isBotUserAgent = knownBotPatterns.some((pattern) =>
    userAgent.includes(pattern)
  );

  // Check for automation tools (but be very specific)
  const hasWebdriver = "__webdriver_evaluate" in document || "__selenium_evaluate" in document;
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
