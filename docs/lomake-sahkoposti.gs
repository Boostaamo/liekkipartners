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
const SENDER_NAME = "Liekki Partners -lomake";
const SUBJECT = "Liekki Partners: uusi yhteydenotto";

// Poistaa rivinvaihdot ja muuttaa linkit tekstiksi (ei http-alkuja), jotta runko ei sisällä klikattavia linkkejä.
function clean(v) {
  return String(v || "-").replace(/[\r\n]+/g, " ").replace(/https?:\/\//gi, "").trim() || "-";
}

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
    "Nimi: " + clean(lead.name),
    "Sähköposti: " + clean(lead.email),
    "Yritys: " + clean(lead.company),
    "Viesti: " + String(lead.message || "-").replace(/https?:\/\//gi, ""),
    "",
    "Sivu: " + clean(lead.page) + " (" + clean(lead.source) + ")",
    "Viittaaja: " + clean(lead.referrer),
    "UTM: " + [u.source, u.medium, u.campaign, u.term, u.content].map(clean).join(" / "),
    "Vastaanotettu: " + clean(lead.receivedAt),
  ].join("\n");

  MailApp.sendEmail({
    to: TO,
    name: SENDER_NAME,
    replyTo: clean(lead.email),
    subject: SUBJECT,
    body: body,
  });
  return out({ ok: true });
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
