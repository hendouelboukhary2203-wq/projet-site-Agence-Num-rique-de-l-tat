import AboutClient from './AboutClient';

export async function generateStaticParams() {
  return [
    { lang: 'fr' },
    { lang: 'ar' }
  ];
}

export default function AboutPage({ params }) {
  return <AboutClient params={params} />;
}