import React from "react";
import { Link, Redirect, Route, Switch } from "wouter";
import "./playground.css";

import { sections, Section } from "./sections";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

const navClass = (active: boolean) =>
  active ? "pg-nav__link pg-nav__link--active" : "pg-nav__link";

export function App() {
  return (
    <Switch>
      <Route path="/:section/:page?">
        {({ section, page }) => <Shell sectionId={section} pageId={page} />}
      </Route>
      <Route>
        <Redirect to={`/${sections[0].id}`} replace />
      </Route>
    </Switch>
  );
}

function Shell({ sectionId, pageId }: { sectionId: string; pageId?: string }) {
  const section = sections.find((s) => s.id === sectionId);
  if (!section) return <Redirect to={`/${sections[0].id}`} replace />;

  const page = section.pages.find((p) => p.id === pageId);
  if (!page) return <Redirect to={`/${section.id}/${section.pages[0].id}`} replace />;

  const Page = page.component;

  return (
    <div className="pg">
      <header className="pg-header">
        <span className="pg-title">Atomic Libs Playground</span>
        <nav className="pg-nav" aria-label="Packages">
          {sections.map((s) => (
            <Link
              key={s.id}
              href={`/${s.id}`}
              className={navClass(s.id === section.id)}
              aria-current={s.id === section.id ? "page" : undefined}
            >
              {s.label}
            </Link>
          ))}
        </nav>
        <ColorSchemeToggle />
      </header>
      <SubNav section={section} activePageId={page.id} />
      <main className="pg-main">
        <Page key={`${section.id}/${page.id}`} />
      </main>
    </div>
  );
}

function SubNav({ section, activePageId }: { section: Section; activePageId: string }) {
  return (
    <nav className="pg-subnav" aria-label={`${section.label} pages`}>
      {section.pages.map((p) => (
        <Link
          key={p.id}
          href={`/${section.id}/${p.id}`}
          className={navClass(p.id === activePageId)}
          aria-current={p.id === activePageId ? "page" : undefined}
        >
          {p.label}
        </Link>
      ))}
    </nav>
  );
}
