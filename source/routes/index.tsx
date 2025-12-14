import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent(): React.ReactNode {
  return (
    <>
      <h1 className='text-2xl'>Hello World!</h1>
    </>
  );
}
