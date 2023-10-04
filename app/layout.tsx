import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarshipsProvider from './providers/StarshipsProvider';
import '@/styles/globals.scss';

const noto = Noto_Sans({
    weight: ['400', '700'],
    display: 'swap',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Star Wars Front End Test | CACI | Satpal Singh Chummer',
    description:
        'web app that displays Starships statistics using the https://swapi.dev/ API',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={noto.className}>
                <StarshipsProvider>
                    <Header imgUrl="/logo.png" />
                    <main>{children}</main>
                    <Footer />
                </StarshipsProvider>
            </body>
        </html>
    );
}
