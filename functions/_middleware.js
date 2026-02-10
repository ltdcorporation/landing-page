function hasLangCookie(cookie) {
  if (!cookie) return false;
  return /(?:^|;\s*)lang=/.test(cookie);
}

function detectLang(request) {
  const cfCountry = request.headers.get("CF-IPCountry");
  if (cfCountry) {
    if (cfCountry.toUpperCase() === "ID") return "id";
    return "en";
  }
  const acceptLang = request.headers.get("Accept-Language") || "";
  if (acceptLang.toLowerCase().includes("id")) return "id";
  return "en";
}

export async function onRequest({ request, next }) {
  const cookie = request.headers.get("Cookie") || "";
  const hasLang = hasLangCookie(cookie);
  const response = await next();

  if (hasLang) {
    return response;
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  const lang = detectLang(request);
  const updated = new Response(response.body, response);
  updated.headers.append(
    "Set-Cookie",
    `lang=${lang}; Max-Age=31536000; Path=/; SameSite=Lax`
  );
  return updated;
}
