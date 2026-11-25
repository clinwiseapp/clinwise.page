export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.clinwiseapp.com";
export const SIGNUP_URL = `${APP_URL}/cadastro`;
export const CONTACT_EMAIL = "contato@clinwiseapp.com";

export const NAV = [
  { href: "#demo", label: "Demonstração" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
] as const;

export const HERO = {
  eyebrow: "Para estudantes no internato",
  titleA: "Você atende.",
  titleB: "A banca corrige.",
  lead: "Grave os atendimentos do rodízio hospitalar e receba a anamnese em Porto ou SOAP, a nota no checklist OSCE e o que a sua banca cobraria daquele caso.",
};

export const STEPS = [
  { n: "01", title: "Grave", text: "Inicie, pause e conclua no app. Errou o começo? Apague e recomece do zero. Também aceita MP3, WAV e M4A." },
  { n: "02", title: "Organize", text: "A fala do paciente vira linguagem técnica, estruturada em Porto (QP, HDA, ISDA, antecedentes) ou SOAP." },
  { n: "03", title: "Corrija", text: "Med-Score de 0 a 100 no checklist OSCE, o que faltou perguntar e a prioridade do tema na sua banca dos sonhos." },
] as const;

export const PLANS = {
  free: { name: "Livre", tagline: "Para conhecer a ClinWise.", items: ["3 consultas por mês", "Anamnese em Porto ou SOAP", "Hipótese diagnóstica principal"] },
  pro: {
    name: "Internato",
    tagline: "Para quem vai prestar residência.",
    monthly: 39,
    annualPerMonth: 29,
    items: ["Consultas ilimitadas", "Med-Score com checklist OSCE", "Estatísticas da sua banca dos sonhos", "Exame físico focado sugerido", "Histórico de evolução por especialidade"],
  },
} as const;

export const FAQ = [
  { q: "Posso gravar atendimentos reais no internato?", a: "Sim, a ClinWise foi feita para os atendimentos do rodízio entre as áreas no hospital. Peça sempre o consentimento do paciente antes de gravar e siga as regras do serviço e do seu preceptor." },
  { q: "Quais formatos de áudio são aceitos?", a: "Você pode gravar direto no app ou enviar arquivos MP3, WAV e M4A. A transcrição separa as falas do médico e do paciente." },
  { q: "Qual a diferença entre Porto e SOAP?", a: "São dois padrões de anamnese. Porto organiza em QP, HDA, ISDA e antecedentes; SOAP em Subjetivo, Objetivo, Avaliação e Plano. Você escolhe o padrão no perfil e pode trocar quando quiser." },
  { q: "Como o Med-Score é calculado?", a: "Sua anamnese é comparada item por item com o checklist OSCE do caso. Cada item atendido soma pontos; os omitidos aparecem com o que faltou perguntar." },
  { q: "Quais bancas estão disponíveis?", a: "USP-SP, ENARE, UNIFESP, SUS-SP, AMRIGS e UFRJ, entre outras. A lista cresce a cada edição das provas." },
  { q: "O que acontece com meus áudios?", a: "Os áudios são processados com criptografia e tratados conforme a LGPD. Você pode apagar qualquer gravação, ou a conta inteira, a qualquer momento." },
] as const;

export const DEMO_RESULT = {
  score: 82,
  hypothesis: "DRGE",
  hda: "Dor epigástrica em queimação, início há 24 h, piora após refeições, sem irradiação.",
  checklist: [
    { label: "Caracterizou a dor (tipo, início, irradiação)", pts: "+20", ok: true },
    { label: "Perguntou fatores de piora e melhora", pts: "+15", ok: true },
    { label: "Não investigou sinais de alarme", pts: "0 / 15", ok: false },
  ],
} as const;
