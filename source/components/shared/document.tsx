import { HeadContent, Scripts } from '@tanstack/react-router';

type DocumentProps = {
  children: React.ReactNode;
};

function Document({ children }: DocumentProps): React.ReactNode {
  return (
    <html>
      <DocumentHead />
      <DocumentBody>{children}</DocumentBody>
    </html>
  );
}

function DocumentHead(): React.ReactNode {
  return (
    <head>
      <HeadContent />
    </head>
  );
}

function DocumentBody({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <body>
      {children}
      <Scripts />
    </body>
  );
}

export { Document, type DocumentProps };
