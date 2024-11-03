// import '../globals.css';
// import type { Metadata } from 'next';
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

// import { Quicksand, Poppins } from 'next/font/google';
// import { locales } from '../../../config';

// const quicksand = Quicksand({
//     weight: ['300', '400', '500', '600', '700'],
//     variable: '--font-quicksand',
//     subsets: ['latin'],
//     display: 'swap',
// });

// const poppins = Poppins({
//     weight: ['100', '200', '300', '400', '500', '600'],
//     variable: '--font-poppins',
//     subsets: ['latin'],
//     display: 'swap',
// });

// export const metadata: Metadata = {
//     title: "Adam Strojil's CV",
//     description: 'CV of a React developer Adam Strojil.',
// };

// export const generateStaticParams =() => {
//     return locales.map((locale) => ({locale}))
// }

// const RootLayout = async ({
//     children,
//     params: { locale },
// }: {
//     children: React.ReactNode;
//     params: { locale: string };
// }) => {
//     const messages = await getMessages();
//     unstable_setRequestLocale(locale)
//     return (
//         <html className={`${quicksand.variable} ${poppins.variable}`} lang={locale}>
//             <body>
//                 <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
//             </body>
//         </html>
//     );
// };

// export default RootLayout;


import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


import '../globals.css';
import type { Metadata } from 'next';
// import { NextIntlClientProvider } from 'next-intl';
// import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Quicksand, Poppins } from 'next/font/google';
import {setRequestLocale} from 'next-intl/server';
import { locales } from '../../../config';



const quicksand = Quicksand({
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-quicksand',
    subsets: ['latin'],
    display: 'swap',
});

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600'],
    variable: '--font-poppins',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Adam Strojil's CV",
    description: 'CV of a React developer Adam Strojil.',
};

export function generateStaticParams() {
    return locales.map((locale) => ({locale}));
  }
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  // if (!routing.locales.includes(locale as any)) {
  //   notFound();
  // }

  setRequestLocale(locale);
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html className={`${quicksand.variable} ${poppins.variable}`} lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

