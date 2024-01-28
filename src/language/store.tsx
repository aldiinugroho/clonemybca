import { create } from 'zustand'

export enum LanguageSelector {
  ID = 'ID',
  EN = 'EN',
}

interface storeLanguageProps {
  defaultlang: String,
  setvalue: (values: LanguageSelector) => void
}

export const storeLanguage = create<storeLanguageProps>()((set) => ({
  defaultlang: 'ID',
  setvalue: (values: LanguageSelector) => {
    set({
      defaultlang: values
    })
  }
}))