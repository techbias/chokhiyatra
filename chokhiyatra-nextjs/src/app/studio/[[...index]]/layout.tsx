export const metadata = {
  title: 'ChokhiYatra CMS Studio',
  description: 'Content Management System for ChokhiYatra',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
