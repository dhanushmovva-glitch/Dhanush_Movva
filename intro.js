'use strict';
(() => {
 const sentences=[
  "Hi, I'm Dhanush Movva, a Business Intelligence & Data Engineer who turns complex data into business solutions.",
  "I work across business intelligence, data engineering, automation, and enterprise analytics using Power BI, Fabric, Power Platform, Snowflake, and SQL.",
  "At WM, I connect enterprise data, build scalable pipelines and semantic models, develop advanced DAX, and transform information into insights people can use.",
  "I've also built Power Apps and Power Automate workflows.",
  "One redesign contributed to more than $500,000 in operational savings.",
  "Now I'm exploring AI-powered analytics and intelligent agents with Copilot Studio, Snowflake Cortex, Claude, and enterprise data, so answers reach the people who need them.",
  "I'm Microsoft-certified in Power BI and Fabric with a Master's in Information Systems.",
  "My goal? Connect data, automation, analytics, and AI to create real impact.",
  "Welcome to my portfolio."
];
 const avatar=document.querySelector('.intro-avatar');
 const play=document.getElementById('intro-play');
 const stop=document.getElementById('intro-restart');
 const caption=document.getElementById('intro-caption');
 const status=document.getElementById('intro-status');
 const progress=document.getElementById('intro-progress');
 const transcript=document.getElementById('intro-transcript');
 sentences.forEach(s=>{const p=document.createElement('p');p.textContent=s;transcript.appendChild(p)});
 const audio=document.getElementById('intro-audio');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 // Timed phrases from the supplied recording. Slides and captions share its playback clock.
 const cues=[
  [
    0.0,
    0,
    "Hi, I'm Dhanush Movva, a Business Intelligence & Data Engineer",
    "welcome"
  ],
  [
    3.38,
    1,
    "who turns complex data into business solutions.",
    "solutions"
  ],
  [
    6.66,
    2,
    "I work across business intelligence, data engineering, automation, and enterprise analytics",
    "disciplines"
  ],
  [
    11.38,
    3,
    "using Power BI, Fabric, Power Platform, Snowflake, and SQL.",
    "toolkit"
  ],
  [
    16.7,
    4,
    "At WM, I connect enterprise data, build scalable pipelines",
    "lifecycle"
  ],
  [
    20.94,
    5,
    "and semantic models,",
    "modeling"
  ],
  [
    22.24,
    6,
    "develop advanced DAX,",
    "dax"
  ],
  [
    24.04,
    7,
    "and transform information into insights people can use.",
    "insights"
  ],
  [
    27.3,
    8,
    "I've also built Power Apps and Power Automate workflows.",
    "automation"
  ],
  [
    30.9,
    9,
    "One redesign contributed to more than $500,000 in operational savings.",
    "savings"
  ],
  [
    35.86,
    10,
    "Now I'm exploring AI-powered analytics and intelligent agents with Copilot Studio, Snowflake",
    "ai"
  ],
  [
    41.08,
    11,
    "Cortex, Claude, and enterprise data,",
    "ai"
  ],
  [
    43.94,
    12,
    "so answers reach the people who need them.",
    "agents"
  ],
  [
    46.66,
    13,
    "I'm Microsoft-certified in Power BI and Fabric with a Master's in Information Systems.",
    "credentials"
  ],
  [
    51.38,
    14,
    "My goal? Connect data, automation, analytics, and AI to create real impact.",
    "impact"
  ],
  [
    57.94,
    15,
    "Welcome to my portfolio.",
    "contact"
  ]
];
 let active=-1,complete=false;
 function scene(state){document.dispatchEvent(new CustomEvent('intro-scene',{detail:{index:cues[Math.max(active,0)][1],key:cues[Math.max(active,0)][3],state}}))}
 function render(){
  const playing=!audio.paused&&!audio.ended;
  play.textContent=playing?'Pause introduction':complete?'Replay introduction':audio.currentTime>0?'Resume introduction':'Play my intro - 1 min';
  play.setAttribute('aria-label',play.textContent);
  avatar.classList.toggle('speaking',playing&&!reduced.matches);
  avatar.dataset.frame=reduced.matches||!playing?'0':active>0&&active<cues.length-1?'1':'0';
 }
 function sync(){
  if(audio.paused&&audio.currentTime===0&&active===-1)return;
  let next=0;for(let i=0;i<cues.length;i++)if(audio.currentTime>=cues[i][0])next=i;
  if(next!==active){active=next;caption.textContent=cues[active][2];scene(audio.paused?'paused':'playing')}
  progress.value=Number.isFinite(audio.duration)&&audio.duration>0?audio.currentTime/audio.duration*100:0;
  if(!audio.paused)status.textContent=`Introduction - ${Math.floor(audio.currentTime)} / ${Math.ceil(audio.duration||59)} sec`;
  render();
 }
 play.addEventListener('click',async()=>{
  if(!audio.paused){audio.pause();return}
  if(complete||audio.ended){audio.currentTime=0;complete=false;active=-1}
  status.textContent='Starting introduction...';
  try{await audio.play()}catch{status.textContent='Unable to play the recording. Please try again.';render()}
 });
 audio.addEventListener('play',()=>{complete=false;sync();scene('playing');render()});
 audio.addEventListener('pause',()=>{if(audio.currentTime===0&&active===-1){render();return}if(!audio.ended){status.textContent=audio.currentTime>0?'Paused':'Ready to play';scene('paused')}render()});
 audio.addEventListener('timeupdate',sync);
 audio.addEventListener('ended',()=>{complete=true;progress.value=100;status.textContent='Introduction complete';scene('complete');render()});
 audio.addEventListener('error',()=>{status.textContent='The recording could not be loaded. You can read the introduction below.';render()});
 stop.addEventListener('click',()=>{
  audio.pause();audio.currentTime=0;complete=false;active=-1;progress.value=0;
  caption.textContent='Meet Dhanush: my experience, skills, and the work I love building.';
  status.textContent='Ready to play';scene('reset');render();
 });
 reduced.addEventListener('change',render);
 document.addEventListener('visibilitychange',()=>{if(document.hidden&&!audio.paused)audio.pause()});
 addEventListener('pagehide',()=>audio.pause());
 render();
})();
