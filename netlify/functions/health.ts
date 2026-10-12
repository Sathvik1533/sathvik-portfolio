export default async (req: Request) => {
  return new Response(
    JSON.stringify({
      status: 'ok',
      service: 'sathvik-portfolio-api',
      timestamp: new Date().toISOString(),
      author: 'Kotagiri Sathvik',
      focus: 'Backend & Applied AI Systems',
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      status: 200,
    }
  );
};
