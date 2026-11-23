"use client";

import { useState } from "react";
import { ArrowUpRight, Bookmark, BookOpen, Boxes, CalendarDays, Compass, Feather, Globe2, Library, Search, Sparkles, StickyNote } from "lucide-react";

const content = {
  zh: {
    eyebrow: "一个为好奇心而留的私人空间",
    title: "研究，是一种观看的方式。",
    intro: "持续生长的艺术研究档案。收集艺术家、学术论文、材料实验与器物观察，让灵感逐渐成为更清晰的思考。",
    today: "今日研究", date: "每日研究辑", artist: "艺术家研究", paper: "学术阅读", notes: "阅读笔记",
    artistTitle: "艺术家档案", artistDesc: "从创作观念、视觉语言、材料选择与工作方法，理解艺术家的实践。",
    paperTitle: "论文阅读台", paperDesc: "以可靠的学术来源为起点，梳理论点、研究方法与文本贡献。",
    noteTitle: "带着问题阅读", noteDesc: "通过阅读问题、重点摘录、个人思考与延伸问题，建立自己的研究线索。",
    prompt: "阅读提示", questions: ["这项研究试图回答什么问题？", "哪一种材料、工艺或视觉策略最值得关注？", "我认同或质疑作者的哪一个判断？", "它能引出怎样的新实验或研究连接？"],
    areas: "研究领域", explore: "进入档案", private: "私人研究空间", footer: "一项持续生长的个人研究实践。"
  },
  en: {
    eyebrow: "A PRIVATE SPACE FOR CURIOUS MINDS",
    title: "Research is a way of seeing.",
    intro: "A growing archive of artists, academic papers, material experiments and object studies — gathered to support a more thoughtful creative practice.",
    today: "TODAY IN THE STUDIO", date: "YOUR DAILY RESEARCH EDITION", artist: "ARTIST STUDY", paper: "ACADEMIC READING", notes: "READING NOTES",
    artistTitle: "The artist file", artistDesc: "A focused introduction to an artist’s ideas, visual language, materials and working methods.",
    paperTitle: "The paper desk", paperDesc: "A carefully selected academic text, with a route into its arguments, methods and contribution.",
    noteTitle: "A note before you read", noteDesc: "Read actively through prompts, excerpts, reflections and questions for further exploration.",
    prompt: "READING PROMPTS", questions: ["What question is this research trying to answer?", "Which material, process or visual strategy matters most?", "What do I agree or disagree with — and why?", "What new experiment or connection does this suggest?"],
    areas: "RESEARCH AREAS", explore: "Explore the archive", private: "PRIVATE STUDIO", footer: "A personal research practice, built one question at a time."
  }
};

export default function Home() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const t = content[lang];
  const areas = lang === "zh" ? ["学术论文", "艺术家", "材料研究", "器物与空间", "个人档案"] : ["Papers", "Artists", "Materials", "Objects & Space", "Archive"];
  const icons = [BookOpen, Feather, Sparkles, Boxes, Library];
  return <main className="shell">
    <aside className="sidebar">
      <a className="brand" href="#"><span className="brand-mark">AR<span>✳</span></span><span>ART RESEARCH<br/>STUDIO</span></a>
      <div className="side-label">{lang === "zh" ? "工作室" : "STUDIO"}</div>
      <nav>{(lang === "zh" ? ["总览", "论文", "艺术家", "材料", "器物", "档案"] : ["Overview", "Papers", "Artists", "Materials", "Objects", "Archive"]).map((x,i)=><a className={i===0?"active":""} href={i===0?"#":"#research-areas"} key={x}>{[Compass,BookOpen,Feather,Sparkles,Boxes,Library].map((I,j)=>i===j?<I size={16} key={j}/>:null)}{x}{i===0&&<i/>}</a>)}</nav>
      <div className="side-bottom"><div className="private"><i/>{t.private}</div><small>MY RESEARCH SPACE</small></div>
    </aside>
    <section className="main-area">
      <header className="topbar"><div className="crumb">STUDIO <span>/</span> {lang==="zh"?"总览":"OVERVIEW"}</div><div className="actions"><label className="search"><Search size={15}/><span>{lang==="zh"?"搜索艺术家、论文、材料…":"Search artists, papers, materials…"}</span><kbd>⌘ K</kbd></label><button className="lang" onClick={()=>setLang(lang==="zh"?"en":"zh")}><Globe2 size={15}/>{lang==="zh"?"中 / EN":"EN / 中"}</button><div className="avatar">Y</div></div></header>
      <div className="content">
        <section className="hero">
          <div className="hero-copy"><div className="eyebrow"><i/>{t.eyebrow}</div><h1>{t.title}</h1><p>{t.intro}</p><a className="text-link" href="#today">{t.explore}<ArrowUpRight size={15}/></a></div>
          <div className="hero-art"><div className="orbit one"/><div className="orbit two"/><div className="shape s1"/><div className="shape s2"/><div className="shape s3"/><div className="art-caption">FORM / MATTER / THOUGHT<br/>FIELD NOTES Nº 001</div><div className="hero-index">01 — 05<br/>RESEARCH JOURNAL</div></div>
        </section>
        <section id="today" className="today">
          <div className="section-head"><div><div className="muted">{t.today}</div><h2>{t.date}</h2></div><div className="date-stamp"><CalendarDays size={15}/> DAILY EDITION <span>✳</span> 08:00</div></div>
          <div className="feature-grid">
            <article className="feature-card"><div className="card-top"><span>01 / {t.artist}</span><Bookmark size={16}/></div><div className="artist-visual"><div className="visual-ring"/><div className="visual-block"/><div className="visual-disc"/></div><div className="card-content"><div className="card-type">{t.artist}</div><h3>{t.artistTitle}</h3><p>{t.artistDesc}</p><a href="#research-areas">{lang==="zh"?"查看研究入口":"Open research"} <ArrowUpRight size={14}/></a></div></article>
            <article className="feature-card"><div className="card-top"><span>02 / {t.paper}</span><BookOpen size={16}/></div><div className="paper-visual"><div className="paper-sheet"><span>JOURNAL / RESEARCH</span><i/><i/><b>Material<br/>& Form</b><i/><i/></div></div><div className="card-content"><div className="card-type">{t.paper}</div><h3>{t.paperTitle}</h3><p>{t.paperDesc}</p><a href="#research-areas">{lang==="zh"?"查看阅读入口":"Open reading"} <ArrowUpRight size={14}/></a></div></article>
            <article className="feature-card"><div className="card-top"><span>03 / {t.notes}</span><StickyNote size={16}/></div><div className="notes-visual"><div className="note-lines"><i/><i/><i/><i/></div><div className="note-stamp">THINK<br/> / NOTE</div></div><div className="card-content"><div className="card-type">{t.notes}</div><h3>{t.noteTitle}</h3><p>{t.noteDesc}</p><a href="#prompts">{lang==="zh"?"开始思考":"Start reflecting"} <ArrowUpRight size={14}/></a></div></article>
          </div>
        </section>
        <section id="prompts" className="prompts"><div className="prompt-heading"><div className="muted">{t.prompt}</div><Sparkles size={19}/></div><div className="prompt-list">{t.questions.map((q,i)=><div className="prompt-row" key={q}><span>0{i+1}</span><p>{q}</p><ArrowUpRight size={14}/></div>)}</div></section>
        <section id="research-areas" className="areas-section"><div className="area-count">01 — 05 / {t.areas}</div><div className="area-grid">{areas.map((a,i)=>{const Icon=icons[i];return <a className="area-item" href="#" key={a}><span className="area-icon"><Icon size={18}/></span><span>{a}</span><ArrowUpRight size={15}/></a>})}</div></section>
        <footer><span>ART RESEARCH STUDIO © 2026</span><span>{t.footer}</span><span>PRIVATE / PERSONAL</span></footer>
      </div>
    </section>
  </main>;
}
