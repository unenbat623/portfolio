"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Lang, T } from "./content";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Localized text getter: t(someTextPair) */
  t: (text: T) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "mn") {
      setLangState(stored);
      return;
    }
    if (navigator.language?.toLowerCase().startsWith("mn")) setLangState("mn");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t = useCallback((text: T) => text[lang], [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
