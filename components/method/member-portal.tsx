"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useAssessment } from "@/components/assessment"

type Tab = "giris" | "kayit" | "sifirla"

const FIELD =
  "w-full rounded-lg border border-hairline bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold/60"
const LABEL = "text-[0.62rem] uppercase tracking-eyebrow text-muted-foreground"

// Front-end only. There is no server yet, so a "membership" is a local
// reading-tier flag; the paid clinic path always runs through the assessment.
function saveMember(email: string, name?: string) {
  try {
    localStorage.setItem(
      "aeterna_member",
      JSON.stringify({ email, name: name ?? "", since: new Date().toISOString() }),
    )
  } catch {
    /* storage unavailable, ignore */
  }
}

export function MemberPortal() {
  const [tab, setTab] = useState<Tab>("giris")
  const [member, setMember] = useState<{ email: string; name: string } | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const { open: openAssessment } = useAssessment()

  useEffect(() => {
    try {
      const raw = localStorage.getItem("aeterna_member")
      if (raw) setMember(JSON.parse(raw))
    } catch {
      /* ignore */
    }
  }, [])

  function signOut() {
    try {
      localStorage.removeItem("aeterna_member")
    } catch {
      /* ignore */
    }
    setMember(null)
    setNotice(null)
  }

  if (member) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-hairline bg-surface p-8 sm:p-10">
        <p className="eyebrow-label">Üye alanı</p>
        <h2 className="mt-4 font-serif text-3xl font-normal text-foreground">
          Hoş geldiniz{member.name ? `, ${member.name}` : ""}.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Ücretsiz okuma üyeliğiniz etkin. Monograflara, derleme yazılarına ve
          biyobelirteç sözlüğüne serbestçe erişebilirsiniz. Kişiye özel protokol,
          tedarik yönlendirmesi ve birebir takip için ön değerlendirmeyle devam
          edin.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => openAssessment()}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm text-background transition-opacity hover:opacity-85"
          >
            Ön değerlendirmeye başla
          </button>
          <Link
            href="/peptidler"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-hairline px-6 py-3.5 text-sm text-foreground transition-colors hover:border-gold/50"
          >
            Monograflara git
          </Link>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="mt-6 text-[0.65rem] uppercase tracking-eyebrow text-muted-foreground transition-colors hover:text-foreground"
        >
          Çıkış yap
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-hairline bg-surface p-8 sm:p-10">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-hairline">
        {[
          { k: "giris" as Tab, l: "Giriş" },
          { k: "kayit" as Tab, l: "Üye ol" },
        ].map((t) => (
          <button
            key={t.k}
            type="button"
            onClick={() => {
              setTab(t.k)
              setNotice(null)
            }}
            className={`-mb-px border-b-2 pb-3 font-serif text-xl transition-colors ${
              tab === t.k
                ? "border-gold text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.l}
          </button>
        ))}
      </div>

      {notice && (
        <p className="mt-6 rounded-lg border border-gold/40 bg-band px-4 py-3 text-sm text-foreground">
          {notice}
        </p>
      )}

      {tab === "giris" && (
        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget)
            const email = String(data.get("email") || "")
            saveMember(email)
            setMember({ email, name: "" })
          }}
        >
          <div className="flex flex-col gap-1.5">
            <label className={LABEL} htmlFor="giris-email">
              E-posta adresi
            </label>
            <input id="giris-email" name="email" type="email" required className={FIELD} placeholder="siz@ornek.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={LABEL} htmlFor="giris-pass">
              Şifre
            </label>
            <input id="giris-pass" name="password" type="password" required className={FIELD} placeholder="••••••••" />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full bg-foreground px-6 py-3.5 text-sm text-background transition-opacity hover:opacity-85"
          >
            Giriş yap
          </button>
          <div className="flex items-center justify-between text-[0.7rem] text-muted-foreground">
            <button type="button" onClick={() => setTab("sifirla")} className="hover:text-foreground">
              Şifreni mi unuttun?
            </button>
            <button type="button" onClick={() => setTab("kayit")} className="hover:text-foreground">
              Method'a yeni misin? Hesap oluştur
            </button>
          </div>
        </form>
      )}

      {tab === "kayit" && (
        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            const data = new FormData(e.currentTarget)
            const email = String(data.get("email") || "")
            const name = String(data.get("first") || "")
            saveMember(email, name)
            setMember({ email, name })
          }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className={LABEL} htmlFor="kayit-first">
                Ad *
              </label>
              <input id="kayit-first" name="first" required className={FIELD} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={LABEL} htmlFor="kayit-last">
                Soyad (isteğe bağlı)
              </label>
              <input id="kayit-last" name="last" className={FIELD} />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={LABEL} htmlFor="kayit-email">
              E-posta adresi *
            </label>
            <input id="kayit-email" name="email" type="email" required className={FIELD} placeholder="siz@ornek.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={LABEL} htmlFor="kayit-pass">
              Şifre * (en az 8 karakter)
            </label>
            <input id="kayit-pass" name="password" type="password" required minLength={8} className={FIELD} placeholder="••••••••" />
          </div>
          <label className="mt-1 flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
            <input type="checkbox" required className="mt-0.5 accent-[color:var(--gold)]" />
            ÆTERNA'nın eğitim odaklı olduğunu ve peptid satmadığını anlıyorum;
            gizlilik ve kullanım koşullarını okudum.
          </label>
          <button
            type="submit"
            className="mt-2 rounded-full bg-foreground px-6 py-3.5 text-sm text-background transition-opacity hover:opacity-85"
          >
            Hesap oluştur · Ücretsiz
          </button>
          <button type="button" onClick={() => setTab("giris")} className="text-[0.7rem] text-muted-foreground hover:text-foreground">
            Zaten üye misin? Giriş yap
          </button>
        </form>
      )}

      {tab === "sifirla" && (
        <form
          className="mt-6 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            setNotice(
              "Eğer bu e-posta kayıtlıysa, şifre sıfırlama bağlantısı gönderildi.",
            )
          }}
        >
          <p className="text-sm leading-relaxed text-muted-foreground">
            E-posta adresinizi girin, size bir sıfırlama bağlantısı gönderelim.
          </p>
          <div className="flex flex-col gap-1.5">
            <label className={LABEL} htmlFor="sif-email">
              E-posta adresi
            </label>
            <input id="sif-email" name="email" type="email" required className={FIELD} placeholder="siz@ornek.com" />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full bg-foreground px-6 py-3.5 text-sm text-background transition-opacity hover:opacity-85"
          >
            Sıfırlama bağlantısı gönder
          </button>
          <button type="button" onClick={() => setTab("giris")} className="text-[0.7rem] text-muted-foreground hover:text-foreground">
            ← Girişe dön
          </button>
        </form>
      )}
    </div>
  )
}
