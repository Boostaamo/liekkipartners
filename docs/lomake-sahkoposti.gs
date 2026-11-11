/**
 * Liekki Partners: lomakkeen liidit sähköpostiin (Google Apps Script).
 *
 * Käyttöönotto:
 * 1. script.google.com: New project, liitä tämä koodi.
 * 2. Project Settings, Script properties: lisää SECRET (sama arvo kuin Vercelin LEAD_WEBHOOK_SECRET).
 * 3. Deploy, New deployment, Web app. Execute as: Me. Who has access: Anyone.
 * 4. Kopioi Web app -osoite Vercelin muuttujaan LEAD_WEBHOOK_URL (Sensitive) ja tee Redeploy.
 * Salaisuutta ei kirjoiteta koodiin.
 */
const TO = "hannu@dimma.fi";

function doPost(e) {
  let lead;
  try {
    lead = JSON.parse(e.postData.contents);
  } catch (err) {
    return out({ ok: false });
  }
  const secret = PropertiesService.getScriptProperties().getProperty("SECRET");
  if (!secret || lead.secret !== secret) return out({ ok: false });

  const u = lead.utm || {};
  const body = [
    "Uusi yhteydenotto Liekki Partners -sivulta",
    "",
    "Nimi: " + lead.name,
    "Sähköposti: " + lead.email,
    "Yritys: " + (lead.company || "-"),
    "Viesti: " + (lead.message || "-"),
    "",
    "Sivu: " + lead.page + " (" + lead.source + ")",
    "Viittaaja: " + (lead.referrer || "-"),
    "UTM: " + [u.source, u.medium, u.campaign, u.term, u.content].map(function (v) { return v || "-"; }).join(" / "),
    "Vastaanotettu: " + lead.receivedAt,
  ].join("\n");

  MailApp.sendEmail({
    to: TO,
    replyTo: lead.email,
    subject: "Liekki Partners: yhteydenotto, " + lead.name,
    body: body,
  });
  return out({ ok: true });
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
