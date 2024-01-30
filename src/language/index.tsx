import { LanguageSelector, storeLanguage } from "./store"

interface languageauthprops {
  tvhello?: string,
  tvpass?: string,
  tvpassreset?: string,
  tvlogin?: string,
  tvanotheracc?: string,
  tvupdatewarn1?: string,
  tvupdatewarn2?: string,
  tvmoreinfo?: string,
  tvabout?: string,
  tvbcaidpass?: string
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
        tvupdatewarn1: 'Perbarui',
        tvupdatewarn2: 'anda secara berkala melalui pengaturan agar tetap aman.',
        tvmoreinfo: 'Informasi lebih.',
        tvabout: 'Seputar myBCA',
        tvbcaidpass: 'Kata sandi BCA ID'
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
        tvupdatewarn1: 'Update your',
        tvupdatewarn2: 'periodically through the settings to stay secure.',
        tvmoreinfo: 'More Information.',
        tvabout: 'About myBCA',
        tvbcaidpass: 'BCA ID Password'
      }
    }
    return langresult
  }
}