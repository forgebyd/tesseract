import { Badge } from '~/components/ui/badge.tsx';
import { Meteor } from '~/components/ui/meteor.tsx';

function Failure({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}): React.ReactNode {
  return (
    <section className='relative overflow-hidden flex items-center justify-center min-h-screen w-full'>
      <Meteor number={30} />
      <div className='flex flex-col items-center gap-8 w-[60%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
        {children}
      </div>
    </section>
  );
}

function FailureContent({
  title,
  children,
}: {
  title: string;
  children: React.ReactElement | React.ReactElement[];
}): React.ReactNode {
  return (
    <main className='flex flex-col items-center gap-4 text-center'>
      <h1 className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
        {title}
      </h1>
      <p className='text-muted-foreground'>{children}</p>
    </main>
  );
}

function FailureDetail({ error }: { error: Error }): React.ReactNode {
  return (
    <section className='min-h-fit w-full font-mono'>
      <pre className='bg-muted px-3 py-2 rounded-md min-h-fit w-full text-sm text-pretty text-muted-foreground leading-6'>
        <div>{error.name}:</div>
        <div>{error.message}</div>
      </pre>
    </section>
  );
}

function FailureFooter({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}): React.ReactNode {
  return <footer className='flex items-center gap-2'>{children}</footer>;
}

function FailureHeader({ code }: { code: number }): React.ReactNode {
  return (
    <header>
      <Badge className='border-destructive/50 bg-destructive/10 text-destructive text-sm'>
        Error - <span className='font-bold'>{code}</span>
      </Badge>
    </header>
  );
}

export { Failure, FailureContent, FailureDetail, FailureFooter, FailureHeader };
