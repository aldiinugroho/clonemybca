import { LanguageSelector, storeLanguage } from "./store"

interface languageauthprops {
  tvhello?: string,
  tvpass?: string,
  tvpassreset?: string,
  tvlogin?: string,
  tvanotheracc?: string,
  tvupdatepwwarn?: string,
  tvmoreinfo?: string,
  tvabout?: string
}

interface languageprops {
  auth?: languageauthprops
}

export function Language() {
  const mainlang = storeLanguage((state) => state.defaultlang)
  if (mainlang === LanguageSelector.ID) {
    const langresult: languageprops = {
      auth: {
        tvhello: 'HALO,',
        tvpass: 'Kata sandi',
        tvpassreset: 'Ganti Kata sandi',
        tvlogin: 'Masuk',
        tvanotheracc: 'Masuk dengan akun lain',
        tvupdatepwwarn: 'Update your BCA ID Password periodically through the settings to stay secure.',
        tvmoreinfo: 'Informasi lebih.',
        tvabout: 'Seputar myBCA'
      }
    }
    return langresult
  }
  if (mainlang === LanguageSelector.EN) {
    const langresult: languageprops = {
      auth: {
        tvhello: 'HELLO,',
        tvpass: 'Password',
        tvpassreset: 'Reset Password',
        tvlogin: 'Log in',
        tvanotheracc: 'Log in with another account',
        tvupdatepwwarn: 'Update your BCA ID Password periodically through the settings to stay secure.',
        tvmoreinfo: 'More Information.',
        tvabout: 'About myBCA'
      }
    }
    return langresult
  }
}