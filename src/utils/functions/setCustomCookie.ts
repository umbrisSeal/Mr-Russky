

export function setCustomCookie(cookieName: string, cookieValue: string) {
    const expirationDate = new Date(Date.now() + 3 * 864e5).toUTCString();
    return document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)}; expires=${expirationDate}; path=/`;
};