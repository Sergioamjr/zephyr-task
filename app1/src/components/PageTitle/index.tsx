export default function PageTitle({ title }: { title: string }) {
  return (
    <h2 data-testid="page_title" className="page_title">
      {title}
    </h2>
  );
}
