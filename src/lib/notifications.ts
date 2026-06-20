// Entrega de formulários (contato, pré-cadastro de membro, parceria) para a
// equipe. Server-only — usa as chaves/segredos do ambiente.
//
// O canal de entrega é escolhido por variável de ambiente, sem mudar código:
//
//   DISCORD_WEBHOOK_URL                      → posta num canal do Discord
//   RESEND_API_KEY + SUBMISSIONS_EMAIL_TO    → envia um email (via Resend)
//   SUBMISSIONS_EMAIL_FROM (opcional)        → remetente do email
//
// Pode-se configurar os dois ao mesmo tempo (envia para ambos). Se nenhum
// estiver configurado, o envio é registrado no console do servidor e tratado
// como entregue — assim os formulários funcionam em desenvolvimento sem setup.

type SubmissionField = { label: string; value: string };

export type Submission = {
  /** Categoria, ex.: "Pré-cadastro de membro". */
  kind: string;
  /** Linha-resumo, ex.: "Pré-cadastro: Fulano de Tal". */
  subject: string;
  /** Email para responder diretamente, quando houver. */
  replyTo?: string;
  fields: SubmissionField[];
};

const ERUS_COLOR = 0x0a6bd4; // azul ERUS, em decimal (para o embed do Discord)

function asPlainText(submission: Submission): string {
  const lines = submission.fields.map((f) => `${f.label}: ${f.value}`);
  return `[${submission.kind}] ${submission.subject}\n${lines.join("\n")}`;
}

async function sendToDiscord(
  webhookUrl: string,
  submission: Submission,
): Promise<boolean> {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "Site ERUS",
      embeds: [
        {
          title: `${submission.kind}`,
          description: submission.subject,
          color: ERUS_COLOR,
          fields: submission.fields.map((f) => ({
            name: f.label,
            // Discord exige value não-vazio
            value: f.value.slice(0, 1024) || "—",
            inline: f.value.length <= 40,
          })),
        },
      ],
    }),
  });
  return res.ok;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sendByEmail(
  apiKey: string,
  to: string,
  submission: Submission,
): Promise<boolean> {
  const from =
    process.env.SUBMISSIONS_EMAIL_FROM ?? "Site ERUS <onboarding@resend.dev>";

  const rows = submission.fields
    .map(
      (f) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#64748b;white-space:nowrap;vertical-align:top">${escapeHtml(
          f.label,
        )}</td><td style="padding:4px 0;color:#0f172a">${escapeHtml(
          f.value,
        ).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const html = `<div style="font-family:system-ui,sans-serif;font-size:14px">
    <p style="color:#64748b;margin:0 0 8px;text-transform:uppercase;letter-spacing:.08em;font-size:11px">${escapeHtml(
      submission.kind,
    )}</p>
    <table style="border-collapse:collapse">${rows}</table>
  </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `[${submission.kind}] ${submission.subject}`,
      reply_to: submission.replyTo,
      html,
      text: asPlainText(submission),
    }),
  });
  return res.ok;
}

/**
 * Entrega o envio pelos canais configurados. Retorna true se pelo menos um
 * canal aceitou (ou se nenhum canal está configurado — modo dev).
 */
export async function deliverSubmission(
  submission: Submission,
): Promise<boolean> {
  const tasks: Array<Promise<boolean>> = [];

  const webhook = process.env.DISCORD_WEBHOOK_URL;
  if (webhook) tasks.push(sendToDiscord(webhook, submission));

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.SUBMISSIONS_EMAIL_TO;
  if (apiKey && to) tasks.push(sendByEmail(apiKey, to, submission));

  if (tasks.length === 0) {
    console.info(
      `[notifications] nenhum canal configurado — envio registrado apenas no log:\n${asPlainText(
        submission,
      )}`,
    );
    return true;
  }

  const results = await Promise.allSettled(tasks);
  const delivered = results.some(
    (r) => r.status === "fulfilled" && r.value === true,
  );

  if (!delivered) {
    console.error(
      `[notifications] falha ao entregar "${submission.kind}" em todos os canais`,
    );
  }
  return delivered;
}
