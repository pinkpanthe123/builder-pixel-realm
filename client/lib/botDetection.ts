export function isBot(): boolean {
  // For testing purposes, check URL parameters first
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('bot') === 'true') return true;
  if (urlParams.get('bot') === 'false') return false;

  // Check for bot indicators in user agent - be more specific
  const userAgent = navigator.userAgent.toLowerCase();

  const botPatterns = [
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'pinterestbot',
    'telegrambot',
    'slackbot',
    'curl',
    'wget',
    'python-requests',
    'node-fetch',
    'go-http-client'
  ];

  // Only trigger on specific bot patterns, not general words
  const isBotUserAgent = botPatterns.some(pattern => userAgent.includes(pattern));

  // Check for automation tools
  const hasWebdriver = 'webdriver' in navigator || '__webdriver_evaluate' in document;
  const hasPhantom = '__phantom' in window;

  // More conservative check - only flag obvious bots
  return isBotUserAgent || hasWebdriver || hasPhantom;
}

export function getBotRedirectPath(): string {
  return '/lifestyle';
}

export function getUserRedirectPath(): string {
  return '/';
}
