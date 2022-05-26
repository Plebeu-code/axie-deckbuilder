export enum ELanguages {
  "pt-br",
  "en-us",
}

export type TLanguageTypes = keyof typeof ELanguages;

export default class LanguageHandler {
  private _language: string | null =
    window.localStorage.getItem("language");

  public get language(): string {
    return this._language
  }

  constructor() {
    if (!this.isValid()) this.mount();
  }

  protected isValid(): boolean {
    if (!this._language) return false;

    const languagesKeys = Object.keys(ELanguages);

    for (const languageKey of languagesKeys) {
      if (this._language !== languageKey) return false;
    }

    return true;
  }

  protected mount(): this {
    window.localStorage.setItem("language", "en-us");
    this._language = "en-us";
    return this;
  }

  public set(language: TLanguageTypes): this {
    if (!this.isValid()) this.mount();

    if (this._language === language) return this;

    window.localStorage.setItem("language", language);

    this._language = language;

    return this;
  }
}
