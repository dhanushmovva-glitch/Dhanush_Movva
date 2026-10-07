'use strict';
const skillCategories={"analytics": "Data Analysis & Visualization", "database": "Database & Querying", "fabric": "Microsoft Fabric", "languages": "Programming & Query Languages", "ai": "AI & Advanced Analytics", "tools": "Tools & Platforms"};
const skills=[
  [
    "Bi",
    "Power BI",
    [
      "analytics"
    ],
    "Data analysis, interactive reporting, and dashboards for business users."
  ],
  [
    "Fa",
    "Microsoft Fabric",
    [
      "fabric"
    ],
    "An integrated analytics platform for data engineering, warehousing, and business intelligence."
  ],
  [
    "Dx",
    "DAX",
    [
      "analytics",
      "languages"
    ],
    "Measures, calculations, and business logic for Power BI semantic models."
  ],
  [
    "Pq",
    "Power Query",
    [
      "analytics"
    ],
    "Connecting, cleaning, and transforming data for analysis."
  ],
  [
    "Sm",
    "Semantic Models",
    [
      "analytics"
    ],
    "Organizing relationships, measures, and business definitions into reusable analytical models."
  ],
  [
    "Ss",
    "SQL Server",
    [
      "database"
    ],
    "Relational data storage and querying for enterprise analytics."
  ],
  [
    "Sn",
    "Snowflake",
    [
      "database"
    ],
    "Cloud data warehousing and SQL-based analytics."
  ],
  [
    "Dv",
    "Dataverse",
    [
      "database",
      "tools"
    ],
    "Business data tables and relationships for Power Platform applications."
  ],
  [
    "Sq",
    "SQL (T-SQL)",
    [
      "database",
      "languages"
    ],
    "Querying, joining, aggregating, and transforming relational data."
  ],
  [
    "Dw",
    "Data Warehousing",
    [
      "database"
    ],
    "Structuring integrated business data for consistent analysis and reporting."
  ],
  [
    "Pi",
    "Data Pipelines",
    [
      "database",
      "fabric"
    ],
    "Moving and transforming data across systems, including Microsoft Fabric Pipelines."
  ],
  [
    "Lh",
    "Lakehouse",
    [
      "fabric"
    ],
    "Bringing data lake storage and analytical workloads together in Microsoft Fabric."
  ],
  [
    "Wh",
    "Warehouse",
    [
      "fabric"
    ],
    "SQL-based data warehousing within Microsoft Fabric."
  ],
  [
    "Dg",
    "Dataflow Gen2",
    [
      "fabric"
    ],
    "Data preparation and transformation with Power Query in Microsoft Fabric."
  ],
  [
    "Ol",
    "OneLake",
    [
      "fabric"
    ],
    "The shared data lake foundation for Microsoft Fabric workloads."
  ],
  [
    "Cs",
    "Copilot Studio",
    [
      "ai"
    ],
    "Building agents and conversational experiences connected to business workflows."
  ],
  [
    "Cc",
    "Claude Code",
    [
      "ai"
    ],
    "AI-assisted coding and development workflows."
  ],
  [
    "Pr",
    "Predictive Analytics",
    [
      "ai"
    ],
    "Analyzing patterns to support forecasts and forward-looking business insights."
  ],
  [
    "Af",
    "Azure Functions",
    [
      "tools"
    ],
    "Event-driven functions supporting integrations and automation."
  ],
  [
    "Pa",
    "Power Apps",
    [
      "tools"
    ],
    "Business applications that connect operational processes and data."
  ],
  [
    "Au",
    "Power Automate",
    [
      "tools"
    ],
    "Automated workflows, approvals, and connected business processes."
  ],
  [
    "Gi",
    "Git",
    [
      "tools"
    ],
    "Version control and collaboration for development work."
  ],
  [
    "Ji",
    "JIRA",
    [
      "tools"
    ],
    "Tracking work, issues, and delivery priorities."
  ],
  [
    "Mc",
    "MCP Servers",
    [
      "tools"
    ],
    "Connecting AI tools to data and services through the Model Context Protocol."
  ],
  [
    "Aw",
    "AWS",
    [
      "tools"
    ],
    "Amazon Web Services cloud platform for data and application workloads."
  ],
  [
    "Py",
    "Python",
    [
      "languages"
    ],
    "Programming for data analysis, transformation, and automation."
  ]
];
const skillIcons={"Bi": "power-bi", "Fa": "fabric", "Dx": "dax", "Pq": "power-query", "Sm": "semantic-models", "Ss": "sql-server", "Sn": "snowflake", "Dv": "dataverse", "Sq": "sql", "Dw": "warehouse", "Pi": "pipelines", "Lh": "lakehouse", "Wh": "warehouse", "Dg": "dataflow-gen2", "Ol": "onelake", "Cs": "copilot-studio", "Cc": "claude-code", "Pr": "predictive", "Af": "azure-functions", "Pa": "power-apps", "Au": "power-automate", "Gi": "git", "Ji": "jira", "Mc": "mcp", "Aw": "aws", "Py": "python"};
const skillIconMarkup=s=>`<img class="skill-logo" src="assets/skills/${skillIcons[s[0]]}.svg" alt="" width="48" height="48">`;
const grid=document.getElementById('skills-grid');
function selectSkill(index){const s=skills[index];document.getElementById('skill-symbol').innerHTML=skillIconMarkup(s);document.getElementById('skill-name').textContent=s[1];document.getElementById('skill-category').textContent=s[2].map(category=>skillCategories[category]).join(' / ').toUpperCase();document.getElementById('skill-description').textContent=s[3];grid.querySelectorAll('button').forEach((b,i)=>{b.classList.toggle('selected',i===index);b.setAttribute('aria-pressed',String(i===index))})}
skills.forEach((s,i)=>{const b=document.createElement('button');b.className='skill'+(i===0?' selected':'');b.dataset.category=s[2].join(' ');b.setAttribute('aria-label','Explore '+s[1]);b.setAttribute('aria-pressed',String(i===0));b.innerHTML=`<span class="skill-number">${String(i+1).padStart(2,'0')}</span><span class="skill-symbol" aria-hidden="true">${s[0]}</span><span class="skill-name">${s[1]}</span>`;b.addEventListener('click',()=>selectSkill(i));grid.appendChild(b)});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const f=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});grid.querySelectorAll('button').forEach(b=>b.classList.toggle('filtered',f!=='all'&&!b.dataset.category.split(' ').includes(f)));const first=skills.findIndex(s=>f==='all'||s[2].includes(f));selectSkill(first)}));
const cases={driver:{"label": "AI / BUSINESS INSIGHTS", "title": "Intelligence Insights.", "problem": "Managers needed a faster way to review performance information and identify areas for follow-up.", "solution": "Contributed to an AI-assisted analytics solution that turns performance information into concise, actionable insights for managers.", "result": "Less review time. More informed conversations.", "detail": "Helped managers spend less time interpreting information and more time acting on derived insights.", "stack": "Claude AI / Microsoft Fabric / Power BI / Power Apps", "note": "Public summary focused on business purpose and outcomes.", "architecture": "assets/projects/intelligence-overview.svg?v=2", "architectureAlt": "Performance Insights with Claude AI, Microsoft Fabric, Power BI and Power Apps.", "architectureCaption": "Performance insights and the tools used."},fabric:{"label": "MICROSOFT FABRIC / ENTERPRISE ANALYTICS", "title": "One foundation. Reports & conversation.", "problem": "Data was spread across Snowflake, SharePoint, Dataverse, APIs, SQL Server, and Jira. We needed to bring those sources together for reporting and make the data accessible through conversational questions.", "solution": "We gathered the source data into Microsoft Fabric Warehouse, built Direct Lake semantic models, and created Power BI reports. We also added a Fabric data agent on top of the data so users could explore it through a chat-based experience.", "result": "A shared data foundation for reports and questions.", "detail": "The solution brings multiple sources into Fabric Warehouse, supporting both Power BI reporting and conversational access through a Fabric data agent.", "stack": "Snowflake / SharePoint / Dataverse / APIs / SQL Server / Jira / Microsoft Fabric Warehouse / Direct Lake / Power BI / Fabric data agent", "architecture": "assets/projects/fabric-platform.svg?v=3", "architectureAlt": "Six enterprise data sources feed Fabric Warehouse, which supports Direct Lake semantic models and Power BI reports alongside a Fabric data agent.", "architectureCaption": "Fabric Warehouse brings the source data together. Power BI and the Fabric data agent offer two ways to explore it.", "note": "Architecture based on my project description. The diagram shows the logical flow; source ingestion methods are not specified, and confidential data is not displayed."},automation:{"label": "POWER PLATFORM / APPLICATIONS & AUTOMATION", "title": "From manual steps to smarter workflows.", "problem": "Everyday work required navigating multiple applications to find information, write notes, and complete tasks. The goal was to bring that work into one Power Apps application and save users time.", "solution": "Built a single Power Apps application connected to Snowflake, SQL Server, APIs, Dataverse, Power BI semantic models, and Azure Functions. Users can access data and capture notes in one place. SharePoint stores documents, while Dataverse stores application data. Power Automate handles workflows between applications, emails, and document creation, and Power BI reports support analysis.", "result": "$500,000+ in operational cost savings.", "detail": "The application redesign contributed to more than $500,000 in operational cost savings. Bringing data access, note-taking, and connected workflows into one Power Apps application reduced application switching and manual effort.", "stack": "Power Apps / Power Automate / Dataverse / SharePoint / Power BI / Snowflake / SQL Server / APIs / Azure Functions", "architecture": "assets/projects/power-platform.svg?v=1", "architectureAlt": "Enterprise data sources and integrations connect to one Power Apps application. Power Automate supports workflows, emails and document creation. SharePoint stores documents, Dataverse stores application data, and Power BI provides reports.", "architectureCaption": "One Power Apps application brings daily work together, supported by automation, document storage, application data, and reporting.", "note": "Architecture based on my project description. This diagram shows the logical solution components; confidential data and detailed connector configurations are not displayed."}};
const dialog=document.getElementById('case-dialog');let opener;
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{const c=cases[b.dataset.project];opener=b;document.getElementById('case-label').textContent=c.label;document.getElementById('case-title').textContent=c.title;document.getElementById('case-content').innerHTML=`<h3>The business need</h3><p>${c.problem}</p><h3>What I built</h3><p>${c.solution}</p>${c.architecture?`<figure class="case-architecture"><img src="${c.architecture}" alt="${c.architectureAlt||'Project overview.'}" width="440" height="680"><figcaption>${c.architectureCaption||"Project overview."}</figcaption></figure>`:""}<div class="result"><strong>${c.result}</strong><p>${c.detail}</p></div><h3>Technology</h3><p>${c.stack}</p><p class="case-note">${c.note||"Project descriptions and outcomes are drawn from my résumé. Visual previews are illustrative, not screenshots of employer systems."}</p>`;dialog.showModal();document.body.style.overflow='hidden'}));
function closeCase(){dialog.close()}
dialog.querySelector('.dialog-close').addEventListener('click',closeCase);dialog.querySelector('.dialog-done').addEventListener('click',closeCase);dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeCase()}});dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus()});
const navLinks=[...document.querySelectorAll('nav a')];const sectionObserver=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){navLinks.forEach(a=>{const active=a.hash==='#'+e.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}},{rootMargin:'-15% 0px -60% 0px'});document.querySelectorAll('main>section').forEach(s=>sectionObserver.observe(s));
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const revealObserver=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');e.target.classList.remove('ready');revealObserver.unobserve(e.target)}}),{threshold:.05});document.querySelectorAll('.about-grid,.proof-strip,.stack-layout,.project,.journey,.contact h2').forEach(el=>{el.classList.add('reveal','ready');revealObserver.observe(el)})}
document.getElementById('year').textContent=new Date().getFullYear();
