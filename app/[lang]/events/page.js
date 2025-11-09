import EventsClient from './EventsClient';

export async function generateStaticParams() {
  return [
    { lang: 'fr' },
    { lang: 'ar' }
  ];
}

export default function EventsPage({ params }) {
  return <EventsClient params={params} />;
}