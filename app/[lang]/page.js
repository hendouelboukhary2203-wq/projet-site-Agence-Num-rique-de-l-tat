import HomeClient from './HomeClient';

export async function generateStaticParams() {
  return [
    { lang: 'fr' },
    { lang: 'ar' }
  ];
}

export default function HomePage({ params }) {
  return <HomeClient params={params} />;
}