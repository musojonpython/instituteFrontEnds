import i18next from "i18next";
import { fallbackLng } from "../constants";

export const setLang = (lang) => {
    localStorage.setItem("langu", lang);
}

export const getLang = () => {
    const currentLang = localStorage.getItem("langu");
    if (currentLang === "uz" || currentLang === "ru" || currentLang === "en") return currentLang;
    return fallbackLng;
}

export const changeLang = (lang) => {
    i18next.changeLanguage(lang);
}