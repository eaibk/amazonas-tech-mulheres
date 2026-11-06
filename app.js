const areas={
 frontend:{name:"Front End",description:"Quem trabalha com Front End desenvolve a parte de sites e aplicativos que as pessoas veem e utilizam. Essa profissional transforma layouts em páginas interativas, organiza textos, imagens e botões e busca garantir que tudo funcione bem em computadores e celulares. No dia a dia, pode usar HTML, CSS e JavaScript para criar interfaces acessíveis, bonitas e fáceis de navegar.",skills:["HTML, CSS e JavaScript","Acessibilidade e experiência do usuário","React, Vue e interfaces responsivas"],community:"GDG Manaus e PHP Manaus são comunidades locais para trocar experiências sobre desenvolvimento.",keywords:["frontend","design","interface"]},
 dados:{name:"Análise de Dados",description:"Uma profissional de Análise de Dados coleta, organiza e interpreta informações para ajudar empresas e equipes a tomar decisões. Ela pode analisar planilhas, identificar padrões, criar gráficos e painéis e explicar o que os números revelam. No dia a dia, utiliza ferramentas como Excel, SQL e Power BI, além de conhecimentos de estatística.",skills:["Excel e SQL","Power BI e visualização de dados","Estatística e pensamento analítico"],community:"Explore grupos como GDG Manaus e DevOps Manaus para conhecer pessoas e temas próximos de tecnologia.",keywords:["dados","analise","estatistica"]},
 backend:{name:"Desenvolvimento Back End",description:"Quem trabalha com Back End desenvolve a parte que funciona por trás de um site ou aplicativo. Essa profissional cria regras, processa informações, conecta sistemas a bancos de dados e desenvolve APIs para que diferentes partes de uma aplicação se comuniquem. Seu trabalho ajuda a garantir que cadastros, logins e outras funções operem corretamente.",skills:["Lógica de programação","APIs e bancos de dados","Python, Java ou Node.js"],community:"PHP Manaus e GDG Manaus oferecem caminhos para conhecer a comunidade de desenvolvimento local.",keywords:["backend","programacao","logica"]},
 produto:{name:"UX/UI Design e Produto",description:"Uma profissional de UX/UI Design pesquisa como as pessoas utilizam um produto digital e planeja experiências simples e agradáveis. Ela cria fluxos de navegação, protótipos e telas, escolhe elementos visuais e testa se a interface é fácil de entender. UX está ligado à experiência de uso; UI está ligado à apresentação e aos elementos visuais da interface.",skills:["Pesquisa com usuários e empatia","Prototipação e design de interfaces","Jornada do usuário e priorização"],community:"Conheça comunidades locais como Manas Tech e GDG Manaus para ampliar sua rede e descobrir atividades.",keywords:["ux","produto","design"]},
 seguranca:{name:"Cibersegurança",description:"A profissional de Cibersegurança trabalha para proteger sistemas, redes e informações contra acessos indevidos e ameaças digitais. Ela ajuda a identificar vulnerabilidades, acompanhar alertas, avaliar riscos e orientar equipes sobre práticas seguras. Também pode participar da prevenção e da resposta a incidentes para reduzir impactos.",skills:["Fundamentos de redes e sistemas","Boas práticas de segurança","Análise de riscos e resposta a incidentes"],community:"GDG Manaus e DevOps Manaus são pontos de partida para aprender sobre tecnologia e infraestrutura.",keywords:["seguranca","redes","investigacao"]},
 redes:{name:"Infraestrutura e Redes",description:"Quem trabalha com Infraestrutura e Redes cuida da estrutura tecnológica que permite que computadores, servidores e sistemas se conectem e funcionem. Essa profissional pode configurar e acompanhar redes, administrar servidores, apoiar serviços em nuvem e investigar problemas de conexão e disponibilidade.",skills:["Redes e protocolos","Sistemas operacionais e servidores","Computação em nuvem"],community:"DevOps Manaus e GDG Manaus conectam pessoas interessadas em infraestrutura e tecnologia.",keywords:["infraestrutura","redes","cloud"]},
 gestao:{name:"Gestão de Projetos e Product Owner",description:"Uma profissional de Gestão de Projetos organiza o trabalho de uma equipe para que um projeto avance dentro dos objetivos e prazos. Já a Product Owner ajuda a definir prioridades de um produto digital, organiza as necessidades em tarefas e mantém a equipe alinhada sobre o que deve ser desenvolvido. As duas funções conectam pessoas, planejamento e tecnologia.",skills:["Comunicação e facilitação","Organização de projetos e metodologias ágeis","Priorização e visão de produto"],community:"Manas Tech e GDG Manaus ajudam a ampliar contatos e conhecer diferentes frentes da tecnologia.",keywords:["gestao","produto","projetos"]}
};
const questions=[
["Ao começar um projeto, o que mais desperta sua curiosidade?",["Entender as pessoas e criar experiências mais simples.","Encontrar padrões e tirar conclusões a partir de dados.","Construir soluções e descobrir como as coisas funcionam.","Organizar ideias e conectar pessoas para realizar projetos."],["produto","dados","backend","gestao"]],
["Qual atividade parece mais interessante para você?",["Criar o visual de um site ou aplicativo.","Investigar números para responder uma pergunta.","Programar uma funcionalidade do início ao fim.","Planejar tarefas e acompanhar uma equipe."],["frontend","dados","backend","gestao"]],
["Quando um aplicativo é difícil de usar, você costuma pensar em...",["Como deixar a navegação mais intuitiva.","O que os dados de uso poderiam revelar.","Como corrigir o funcionamento por trás da tela.","Como organizar melhor as prioridades do produto."],["produto","dados","backend","gestao"]],
["Que tipo de desafio você gostaria de resolver?",["Criar uma página bonita e acessível.","Descobrir por que um indicador mudou.","Fazer um sistema funcionar com segurança.","Coordenar pessoas para entregar uma solução."],["frontend","dados","backend","gestao"]],
["O que mais combina com seu jeito de aprender?",["Experimentar cores, layouts e protótipos.","Comparar informações e testar hipóteses.","Montar, testar e corrigir códigos.","Conversar, organizar e acompanhar etapas."],["frontend","dados","backend","gestao"]],
["Qual resultado daria mais satisfação?",["Ver pessoas usando uma interface que criei.","Apresentar uma análise que esclarece uma decisão.","Resolver um problema técnico complexo.","Ver um projeto sair do planejamento e acontecer."],["frontend","dados","backend","gestao"]],
["Qual assunto você teria vontade de explorar?",["Experiência do usuário e acessibilidade.","Inteligência artificial e análise de dados.","APIs, lógica e bancos de dados.","Liderança, estratégia e produtos digitais."],["produto","dados","backend","produto"]],
["Ao encontrar um erro em um sistema, sua primeira reação seria...",["Observar como isso afeta a experiência de quem usa.","Investigar registros e informações para achar padrões.","Reproduzir o erro e analisar o código.","Organizar as informações e envolver as pessoas certas."],["produto","dados","backend","gestao"]],
["Que tipo de criação mais chama sua atenção?",["Uma interface visual bem construída.","Um painel que conta uma história com números.","Uma aplicação que automatiza tarefas.","Um plano que transforma uma ideia em entregas."],["frontend","dados","backend","gestao"]],
["Você prefere trabalhar com...",["Design, conteúdo e interação.","Tabelas, indicadores e evidências.","Código, sistemas e lógica.","Pessoas, processos e objetivos."],["frontend","dados","backend","gestao"]],
["Qual pergunta você faria primeiro diante de um novo produto?",["Como as pessoas vão se sentir usando isso?","Quais dados mostram se isso funciona?","Como a solução será construída tecnicamente?","Qual problema é prioridade e para quem?"],["produto","dados","backend","produto"]],
["Que desafio parece mais estimulante?",["Deixar um site acessível em diferentes telas.","Identificar tendências em uma grande base de dados.","Proteger informações contra ameaças digitais.","Alinhar expectativas e organizar entregas."],["frontend","dados","seguranca","gestao"]],
["Em uma equipe, qual contribuição combina mais com você?",["Pensar na interface e nos detalhes visuais.","Interpretar resultados e apresentar evidências.","Desenvolver a estrutura técnica da solução.","Facilitar conversas e definir prioridades."],["frontend","dados","backend","gestao"]],
["Qual ferramenta você teria curiosidade de conhecer?",["Figma ou ferramentas de prototipação.","Power BI ou Python para análise.","Git, SQL ou ferramentas de desenvolvimento.","Trello, Jira ou ferramentas de planejamento."],["produto","dados","backend","gestao"]],
["O que você gostaria de entender melhor?",["Como as pessoas interagem com produtos digitais.","Como dados ajudam a prever cenários.","Como redes e servidores mantêm serviços disponíveis.","Como equipes transformam objetivos em resultados."],["produto","dados","redes","gestao"]],
["Qual situação despertaria sua curiosidade?",["Um site que precisa ser mais rápido e agradável.","Uma empresa que precisa entender seus indicadores.","Uma tentativa de acesso suspeita a um sistema.","Um projeto com muitas tarefas e prazos."],["frontend","dados","seguranca","gestao"]],
["Como você lidaria com um problema novo?",["Desenharia alternativas e testaria com usuários.","Reuniria informações antes de concluir.","Separaria o problema em partes técnicas.","Conversaria com envolvidos e definiria próximos passos."],["produto","dados","backend","gestao"]],
["Que tipo de impacto você gostaria de gerar?",["Ajudar pessoas a usar tecnologia com facilidade.","Apoiar decisões com informação de qualidade.","Criar sistemas confiáveis e protegidos.","Fazer boas ideias chegarem às pessoas."],["frontend","dados","seguranca","produto"]],
["Qual atividade você escolheria em uma oficina?",["Criar uma página usando HTML e CSS.","Montar um painel com dados reais.","Criar uma API simples ou automatização.","Planejar um aplicativo para resolver um problema."],["frontend","dados","backend","produto"]],
["O que você considera mais importante em uma solução digital?",["Clareza, acessibilidade e facilidade de uso.","Precisão e qualidade das informações.","Desempenho, estabilidade e proteção.","Valor para as pessoas e boa execução."],["frontend","dados","seguranca","produto"]],
["Qual tema você pesquisaria por iniciativa própria?",["Design de interfaces e acessibilidade.","Visualização de dados e inteligência artificial.","Segurança digital e redes de computadores.","Metodologias ágeis e gestão de produtos."],["produto","dados","seguranca","gestao"]],
["Quando aprende algo novo, o que mais te motiva?",["Ver imediatamente o resultado visual do que fiz.","Encontrar uma resposta que os dados escondiam.","Entender a lógica por trás de um mecanismo.","Perceber que as pessoas estão avançando juntas."],["frontend","dados","backend","gestao"]],
["Qual projeto voluntário escolheria?",["Melhorar o site de uma iniciativa social.","Analisar dados para apoiar uma causa.","Criar uma ferramenta digital para a comunidade.","Coordenar pessoas e organizar as entregas."],["frontend","dados","backend","gestao"]],
["Qual desafio parece mais próximo do que você quer aprender?",["Construir interfaces para web e celular.","Transformar dados em relatórios e insights.","Entender servidores, redes e proteção de sistemas.","Descobrir necessidades e definir soluções digitais."],["frontend","dados","redes","produto"]],
["Ao imaginar seu futuro na tecnologia, o que mais te anima?",["Criar experiências digitais que encantam e incluem.","Descobrir possibilidades por meio de dados.","Construir soluções técnicas robustas e seguras.","Conectar pessoas e ideias para gerar impacto."],["frontend","dados","backend","gestao"]]
];
function getUser(){try{return JSON.parse(localStorage.getItem("atm_user")||"null")}catch(e){return null}}
function updateHeader(){
 const user=getUser();
 const header=document.querySelector('.site-header');
 const menu=document.getElementById('user-menu');
 if(user){
  header?.classList.add('is-authenticated');
  // Remove os dois links de autenticação do cabeçalho: a pessoa já está conectada.
  header?.querySelectorAll('.header-actions > .auth-link').forEach(link=>link.hidden=true);
  if(menu){
   menu.hidden=false;
   menu.textContent=(user.name||'Minha conta').split(' ')[0]+'　⌄';
   menu.setAttribute('aria-label','Menu da conta. Clique para sair.');
   menu.onclick=()=>{if(confirm('Deseja sair da sua conta?')){localStorage.removeItem('atm_user');location.href='index.html'}};
  }
  // Troca chamadas de login/cadastro por ações úteis para quem já está conectada.
  document.querySelectorAll('a.auth-link').forEach(link=>{
   if(link.closest('.header-actions'))return;
   const href=link.getAttribute('href');
   if(href==='login.html'||href==='quiz.html'){
    link.setAttribute('href','pergunta.html');
    link.textContent='Iniciar quiz　→';
   }else if(href==='cadastro.html'){
    link.setAttribute('href','comunidades.html');
    link.textContent='Explorar comunidades　→';
   }else if(href==='eventos.html'){
    link.textContent='Ver evento　→';
   }
  });
 }else if(menu){
  menu.hidden=true;
  header?.classList.remove('is-authenticated');
 }
 const accessCard=document.getElementById('quiz-access-card');
 if(accessCard&&user){
  accessCard.classList.add('quiz-ready');
  accessCard.innerHTML=`<span class="key-icon" aria-hidden="true">✓</span><h2>Você já pode começar!</h2><p>Olá, ${escapeHTML((user.name||'').split(' ')[0])}. Suas respostas vão ajudar a explorar áreas da tecnologia que combinam com seus interesses.</p><a class="btn btn-dark btn-block quiz-start-button" href="pergunta.html">Iniciar quiz　→</a>`;
 }
}

function escapeHTML(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]))}
function requireAuth(url){if(!getUser()){sessionStorage.setItem("atm_return",url);location.href="login.html";return false}return true}
document.addEventListener("DOMContentLoaded",()=>{
 updateHeader();
 document.querySelectorAll("img").forEach(img=>{
  img.addEventListener("error",()=>{
   if(img.classList.contains("event-photo")||img.closest(".community-card"))img.classList.add("image-fallback");
   if(img.closest(".person-top")){
    const name=img.closest(".person-card")?.querySelector("h3")?.textContent||"Mulher inspiradora";
    const initials=name.split(/\s+/).filter(Boolean).slice(0,2).map(part=>part[0]).join("").toUpperCase();
    const fallback=document.createElement("div");
    fallback.className="portrait-initials";
    fallback.textContent=initials;
    fallback.setAttribute("aria-label","Retrato indisponível");
    img.replaceWith(fallback);
   }
  },{once:true});
 });
 document.querySelectorAll(".mobile-toggle").forEach(b=>b.addEventListener("click",()=>document.querySelector(".main-nav")?.classList.toggle("open")));
 document.querySelectorAll(".show-password").forEach(b=>b.addEventListener("click",()=>{const input=document.getElementById(b.dataset.target);input.type=input.type==="password"?"text":"password"}));
 document.querySelectorAll(".auth-link").forEach(a=>a.addEventListener("click",e=>{
  const href=a.getAttribute("href");
  // Os botões de entrada do quiz sempre retomam na primeira pergunta após autenticar.
  if(document.body.dataset.page==="quiz" && (href==="login.html" || href==="cadastro.html")){
   e.preventDefault();
   sessionStorage.setItem("atm_return","pergunta.html");
   location.href=href;
   return;
  }
  if(getUser() && href==="login.html"){
   e.preventDefault();
   location.href="pergunta.html";
   return;
  }
  if(href==="quiz.html" && !getUser()){
   e.preventDefault();
   requireAuth("pergunta.html");
  }else if((href==="comunidades.html"||href==="eventos.html")&&!getUser()&&a.textContent.toLowerCase().includes("participar")){
   e.preventDefault();
   requireAuth(href);
  }
 }));
 document.querySelectorAll(".community-join, .event-register").forEach(link=>{
  link.addEventListener("click",e=>{
   if(!getUser()){
    e.preventDefault();
    requireAuth(document.body.dataset.page+".html");
   }
  });
 });
 const login=document.getElementById("login-form");if(login)login.addEventListener("submit",e=>{e.preventDefault();const email=document.getElementById("login-email").value.trim().toLowerCase(),pass=document.getElementById("login-password").value;let users=JSON.parse(localStorage.getItem("atm_users")||"[]");const user=users.find(u=>u.email===email&&u.password===pass);const msg=document.getElementById("login-message");if(!user){msg.textContent="E-mail ou senha não encontrados. Confira os dados ou crie sua conta.";return}localStorage.setItem("atm_user",JSON.stringify(user));const dest=sessionStorage.getItem("atm_return")||"pergunta.html";sessionStorage.removeItem("atm_return");location.href=dest});
 const reg=document.getElementById("register-form");if(reg)reg.addEventListener("submit",e=>{e.preventDefault();const name=document.getElementById("register-name").value.trim(),email=document.getElementById("register-email").value.trim().toLowerCase(),password=document.getElementById("register-password").value,confirmPass=document.getElementById("register-confirm").value,msg=document.getElementById("register-message");if(password.length<8){msg.textContent="A senha precisa ter pelo menos 8 caracteres.";return}if(password!==confirmPass){msg.textContent="As senhas não coincidem.";return}let users=JSON.parse(localStorage.getItem("atm_users")||"[]");if(users.some(u=>u.email===email)){msg.textContent="Já existe uma conta com esse e-mail. Faça login.";return}const user={name,email,password};users.push(user);localStorage.setItem("atm_users",JSON.stringify(users));localStorage.setItem("atm_user",JSON.stringify(user));const dest=sessionStorage.getItem("atm_return")||"pergunta.html";sessionStorage.removeItem("atm_return");location.href=dest});
 if(document.body.dataset.page==="pergunta")initQuiz();
 if(document.body.dataset.page==="resultado")showResult();
 if(document.body.dataset.page==="comunidades")initCommunityFilters();
 if(document.body.dataset.page==="eventos")initEvents();
 const restart=document.getElementById("restart-quiz");if(restart)restart.onclick=()=>{localStorage.removeItem("atm_answers");location.href="pergunta.html"};
});
function initQuiz(){if(!requireAuth("pergunta.html"))return;let answers=JSON.parse(localStorage.getItem("atm_answers")||"[]"),index=answers.length;const title=document.getElementById("question-title"),subtitle=document.getElementById("question-subtitle"),list=document.getElementById("answer-list"),count=document.getElementById("question-count"),fill=document.getElementById("progress-fill"),number=document.getElementById("progress-number"),back=document.getElementById("back-question"),next=document.getElementById("next-question");if(index>=25)index=24;function render(){const q=questions[index];count.textContent=`Pergunta ${index+1} de 25`;number.textContent=`${Math.round((index+1)/25*100)}%`;fill.style.width=`${(index+1)/25*100}%`;title.textContent=q[0];subtitle.textContent=`${getUser()?.name?.split(" ")[0]||"Você"}, escolha a alternativa que mais combina com você. Pense no que te dá vontade de aprender.`;list.innerHTML="";q[1].forEach((option,i)=>{const b=document.createElement("button");b.className="answer-option"+(answers[index]===i?" selected":"");b.textContent=option;b.onclick=()=>{answers[index]=i;localStorage.setItem("atm_answers",JSON.stringify(answers));render()};list.appendChild(b)});back.disabled=index===0;back.style.opacity=index===0?".45":"1";next.textContent=index===24?"Ver meu resultado　→":"Continuar　→"}back.onclick=()=>{if(index>0){index--;render()}};next.onclick=()=>{if(answers[index]===undefined){alert("Escolha uma alternativa para continuar.");return}localStorage.setItem("atm_answers",JSON.stringify(answers));if(index===24){calculateResult();location.href="resultado.html"}else{index++;render()}};render()}
function calculateResult(){const answers=JSON.parse(localStorage.getItem("atm_answers")||"[]"),scores={};Object.keys(areas).forEach(k=>scores[k]=0);answers.forEach((answer,i)=>{const key=questions[i]?.[2]?.[answer];if(key)scores[key]++});const ranking=Object.entries(scores).sort((a,b)=>b[1]-a[1]);const top=ranking[0]?.[0]||"produto";localStorage.setItem("atm_result",JSON.stringify({area:top,scores,second:ranking[1]?.[0]}))}
function showResult(){if(!getUser()){location.href="login.html";return}let result=JSON.parse(localStorage.getItem("atm_result")||"null");if(!result){calculateResult();result=JSON.parse(localStorage.getItem("atm_result"))}const area=areas[result.area]||areas.produto,user=getUser();document.getElementById("result-name").textContent=user.name.split(" ")[0];document.getElementById("result-area").textContent=area.name;document.getElementById("result-description").textContent=area.description;document.getElementById("result-community").textContent=area.community;document.getElementById("result-skills").innerHTML=area.skills.map(s=>`<li>${s}</li>`).join("");const grid=document.getElementById("all-areas-grid");if(grid){grid.innerHTML=Object.entries(areas).map(([key,item])=>`<article class="area-explainer ${key===result.area?"is-current":""}"><h3>${item.name}${key===result.area?" <span>Seu destaque</span>":""}</h3><p>${item.description}</p></article>`).join("")}}
function initCommunityFilters(){const search=document.getElementById("community-search"),cards=[...document.querySelectorAll(".community-card")],buttons=[...document.querySelectorAll(".filter")];let category="Todas";function apply(){const term=search.value.toLowerCase();cards.forEach(c=>{const matchText=c.textContent.toLowerCase().includes(term),matchCat=category==="Todas"||c.dataset.category.includes(category);c.style.display=matchText&&matchCat?"grid":"none"})}search.addEventListener("input",apply);buttons.forEach(b=>b.onclick=()=>{buttons.forEach(x=>x.classList.remove("active"));b.classList.add("active");category=b.dataset.filter;apply()})}
function initEvents(){}
