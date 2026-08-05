export async function logResumeDownload() {

const ip = await fetch("https://ipwho.is/");
const info = await ip.json();

  const browser = navigator.userAgent;

  const payload = {

   ip: info.ip,
city: info.city,
country: info.country,

    browser: browser,

    os: navigator.platform,

    device:
      /Mobi|Android/i.test(browser)
        ? "Mobile"
        : "Desktop",

    language: navigator.language,

    timezone:
      Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone,

    referrer:
      document.referrer || "Direct",

    userAgent: browser

  };

  await fetch(
    "https://script.google.com/macros/s/AKfycbyuCWg5VTe3kZnDl03e4Mcpds1sWtW4kSi1Ru0aYInLGBzc4s_rWSVSyt7c4CkNgMkq/exec",
    {

      method: "POST",

      body: JSON.stringify(payload),

      headers: {
        "Content-Type":
          "application/json",
      },

      mode: "no-cors",
    }
  );

}