# AGENTS.md — SER · Crescer na Aldeia

> Este ficheiro serve como contexto central para qualquer agente de IA ou desenvolvedor
> que trabalhe neste projeto. Contém toda a informação conhecida sobre o infantário,
> o seu público, filosofia e objetivos do website.

---

## 1. Identidade da Marca

**Nome oficial:** SER – Crescer na Aldeia  
**Abreviação/Marca:** SER  
**Símbolo da marca:** 🍄 **Cogumelo** (chapéu laranja-terracota com pontos brancos/creme, haste castanha) — implementado como `<symbol id="mush-mini">` e `<symbol id="mush-big">` no `index.html`. **Importante:** não usar emojis 🌿 / folhas — a marca é um cogumelo.  
**Tagline IG:** *"Desenvolvimento integral da criança · na aldeia · na natureza"*  
**Tagline do footer:** *"Cultivamos liberdade, criatividade, empatia, muito amor e legumes biológicos."*  
**Tipo de projeto:** Babysitting & kids-sitting + ateliers de aprendizagem em comunidade. Alternativa ao ensino tradicional. **Não é creche/JI** — mas esta clarificação deve ficar **implícita** no copy, não explícita.  
**Morada completa:** Rua Leiras do Monte, Tarei, 4520-719 Santa Maria da Feira, Portugal  
**Instagram:** [@ser.crescernaldeia](https://www.instagram.com/ser.crescernaldeia/) — 6.226 seguidores, 80 posts (mai 2026)  
**Threads:** [@ser.crescernaldeia](https://www.threads.com/@ser.crescernaldeia)  
**Linktree:** [linktr.ee/ser.crescernaaldeia](https://linktr.ee/ser.crescernaaldeia)  

---

## 2. Filosofia & Valores

### Provérbio fundador
> *"É preciso uma aldeia inteira para educar uma criança."*  
> — Provérbio africano

Este provérbio é o coração do projeto. A ideia de que educar não é responsabilidade só da família ou da escola, mas de uma comunidade inteira que abraça, cuida e inspira.

### Valores nucleares
1. **Liberdade** — Dar espaço à criança para explorar, errar, descobrir
2. **Criatividade** — Arte, jogo livre, expressão sem limitações
3. **Empatia** — Ligação com o outro, com a natureza, com a comunidade
4. **Amor** — Afeto como base de toda a aprendizagem
5. **Natureza** — O exterior é a sala de aula principal
6. **Comunidade** — A aldeia como ecossistema educativo
7. **Alimentação consciente** — Horta biológica, relação com a terra e com o alimento

### Abordagem pedagógica
- **Educação alternativa** baseada na natureza (forest school / outdoor education)
- Desenvolvimento integral da criança (emocional, físico, cognitivo, social)
- Sem currículos rígidos — a curiosidade natural da criança guia a aprendizagem
- Contacto direto com a terra: horta, animais, estações do ano
- Ritmo natural do dia: tempo livre, descanso, refeições em comunidade
- Inspirações: Montessori, Waldorf, Reggio Emilia, Forest School

---

## 3. Público-Alvo

### Pais (decisores de compra)
- Pais entre 28–45 anos
- Preocupados com o bem-estar emocional dos filhos
- Desconfiantes do ensino tradicional/academicista
- Valorizam natureza, autenticidade, comunidade
- Geralmente com valores ecológicos/sustentáveis
- Dispostos a investir numa educação diferente
- Muitas vezes já vivem em zonas rurais ou querem sair das cidades

### As crianças (utilizadores do espaço)
- Creche e pré-escolar (0–6 anos, a confirmar faixas etárias exatas)
- Energia, curiosidade, necessidade de movimento e contacto com a natureza

### Comunidade
- Famílias da aldeia e região
- Profissionais (educadores, terapeutas, artistas) que se identificam com o projeto

---

## 4. Contexto do Projeto Website

### Fase 1 (atual) — Landing Page
- Site de apresentação sem automações
- Objetivo: contar a história do infantário, apresentar a filosofia
- Convencer pais a inscreverem os filhos
- Estrutura simples: HTML puro, sem framework, sem base de dados
- O cliente (as fundadoras do infantário) irá ajudar a afinar o texto

### Fase 2 (futura) — Área de Pais
- Login de pais para aceder a galeria de fotos do filho
- Objetivo: substituir o "desvaziar o telemóvel" — uma cloud privada por criança
- Modelo de negócio sugerido: ~2€/mês por criança (~40€/mês com 20 famílias)
- Justificação comercial: storage tem custo, mas o valor percebido pelos pais é alto
- Tecnologia: Next.js + Supabase (Storage para fotos, Auth para login)
- **NÃO implementar nesta fase** — propor aos clientes depois de verem a landing

### Agente responsável (Nova Sinapse)
- Tomas Nunes / Nova Sinapse — agência de desenvolvimento e IA
- Email: tomaslebreironunes@gmail.com
- O projeto da Joana C. Nova (terapeuta) é um projeto paralelo da mesma agência

---

## 5. Estrutura do Website (Fase 1)

### Secções da Landing Page
1. **Nav** — logo + links internos + CTA de contacto
2. **Hero** — headline emocional, subheadline, CTA "Conhece o Nosso Mundo"
3. **Filosofia** — o provérbio africano + explicação do conceito "aldeia"
4. **Quem Somos** — história do projeto, quem são as pessoas por trás
5. **A Nossa Abordagem** — 4 pilares: Natureza · Liberdade · Comunidade · Alimentação
6. **Um Dia na Aldeia** — timeline visual de um dia típico
7. **Galeria** — grelha de fotos (placeholders na fase 1)
8. **Para os Pais** — secção persuasiva: porquê este infantário é diferente
9. **Testemunhos** — depoimentos de famílias (a preencher)
10. **Inscrições** — CTA + formulário de contacto simples
11. **Footer** — links sociais, contactos, localização

### Tecnologia
- HTML5 + CSS3 (custom properties, flexbox, grid)
- JavaScript vanilla (scroll animations via IntersectionObserver)
- Google Fonts: Playfair Display + Nunito
- Zero dependências externas além das fontes
- Imagens: Unsplash CDN para placeholders (a substituir por fotos reais)

---

## 6. Design System

### Paleta de Cores
```
--forest:    #1D3A1F   /* Verde escuro / fundo escuro */
--moss:      #4A7C59   /* Verde médio / cor primária */
--sage:      #8FAF8A   /* Verde suave / acentos */
--cream:     #F7F0E6   /* Creme quente / fundo principal */
--sand:      #E8D5B7   /* Areia / fundo alternativo */
--earth:     #8B6F47   /* Castanho terra */
--sun:       #D4A843   /* Dourado solar / CTAs */
--bark:      #5C4033   /* Castanho escuro */
--sky:       #B8D4E8   /* Azul céu suave */
```

### Tipografia
- **Display:** Playfair Display (títulos, hero, citações)
- **Body:** Nunito (corpo de texto, botões, navegação)

### Tom de Voz
- Caloroso, próximo, autêntico
- Poético mas acessível
- Não técnico nem academicista
- Em português europeu (não brasileiro)
- Fala diretamente aos pais: "os vossos filhos", "a vossa família"

---

## 7. Conteúdo Confirmado (via PDF "informações.SER.pdf", 2026-05-13)

- ✅ **Localização:** Tarei, Santa Maria da Feira
- ✅ **Tipo de serviço:** NÃO é creche/JI — babysitting e kids-sitting + ateliers de aprendizagem em comunidade
- ✅ **Idades:** a partir da aquisição de marcha (bebés acompanhados às sextas, 10h00–11h30, com ama/cuidador)
- ✅ **Horários:**
  - Tempo Total: 09h00–17h30
  - Tempo Parcial Manhã: 09h00–12h00
  - Tempo Parcial Tarde: 14h30–17h30
  - Atividade Bebés: Sextas 10h00–11h30
- ✅ **Preços:**
  - Tempo Total: 320€/mês
  - Tempo Parcial: 220€/mês
  - Bebés: 15€/sessão · 48€/4 sessões · 100€/10 sessões
  - Inscrição: 100€ (seguro incluído)
- ✅ **Ano letivo:** 9 de setembro a 31 de julho
- ✅ **Alimentação:** trazida de casa (frigorífico + micro-ondas disponíveis)
- ✅ **Pedagogia:** própria, inspirada em Waldorf, Montessori, Reggio Emilia e Pikler
- ✅ **Valores nucleares:** espírito crítico, autonomia, criatividade, valorização das emoções, filosofia para crianças

## 7b. Ainda Por Confirmar

- [ ] Capacidade máxima (nº de crianças)
- [ ] Nome(s) das fundadoras / educadoras
- [ ] Fotos reais para substituir os placeholders Unsplash
- [ ] Testemunhos reais de famílias (os atuais são fictícios)
- [ ] Número de telefone oficial
- [ ] Email de contacto oficial (a usar `geral@sercrescernaldeia.pt` como placeholder)
- [ ] Regulamento Interno (referenciado no PDF para detalhes de interrupções)

---

## 8. Notas para Futuras Iterações

- A secção de galeria pode evoluir para uma área privada por criança (Fase 2)
- O formulário de inscrição pode ligar a um Google Form ou Tally enquanto não há backend
- Considerar adicionar um blog/diário com histórias do dia a dia (SEO + comunidade)
- Versão multilíngue (PT/EN) pode ser relevante para famílias expatriadas em Portugal
