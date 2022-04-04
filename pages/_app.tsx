import '@/styles/globals.css';
import "swiper/css/bundle";
import '@/styles/sliders.css';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import apolloClient from 'graphql/apollo';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { AuthModal } from '@/components/AuthModal';
import { ModalProvider } from '@/context/ModalContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <ModalProvider>
        <AuthModal />
        <Header />
        <main className='mx-auto mt-4 layout-p max-w-7xl'>
          <Component {...pageProps} />
        </main>
        <Navbar />
      </ModalProvider>
    </ApolloProvider>
  );
}

export default MyApp;
