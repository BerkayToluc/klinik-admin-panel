import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "../globals.css";

// Google ve Sosyal Medya için SEO Ayarları
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isTr = locale === 'tr';

  return {
    title: isTr 
      ? "Klnk. Psk. Gökçe Toluç Saklı | Klinik Psikolog & Psikoterapist"
      : "Klnk. Psk. Gökçe Toluç Saklı | Clinical Psychologist & Psychotherapist",
    description: isTr
      ? "ABD ve Türkiye odaklı online terapi hizmeti. Bilişsel Davranışçı Terapi ve Şema Terapi yaklaşımlarıyla uzman psikolojik destek."
      : "Online psychotherapy services for clients in the US and Turkey. Expert psychological support using CBT and Schema Therapy.",
    keywords: [
      "Gökçe Toluç Saklı", "Klinik Psikolog", "Psikoterapist", "Online Terapi", 
      "Turkish Psychologist USA", "Clinical Psychologist Turkey", "Bilişsel Davranışçı Terapi", 
      "Şema Terapi", "Florida Psychologist", "Istanbul Psychologist"
    ],
    alternates: {
      canonical: `https://www.gokcetolucsakli.com/${locale}`,
      languages: {
        'tr': '/tr',
        'en': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      url: 'https://www.gokcetolucsakli.com',
      siteName: 'Gökçe Toluç Saklı',
      images: [
        {
          url: '/images/1.jpeg', // Paylaşımlarda görünecek ana görsel
          width: 1200,
          height: 630,
          alt: 'Gökçe Toluç Saklı',
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  
  return (
    <html lang={locale} className="scroll-smooth">
      <body className="antialiased bg-sand-50 text-ink-dark">
        <NextIntlClientProvider messages={messages}>
          {children}
          {/* WhatsApp Butonu Burada */}
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}