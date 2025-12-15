function attachLink(
  rel: string,
  href: string,
  options?: Omit<
    React.DetailedHTMLProps<
      React.LinkHTMLAttributes<HTMLLinkElement>,
      HTMLLinkElement
    >,
    'rel' | 'href'
  >
): React.DetailedHTMLProps<
  React.LinkHTMLAttributes<HTMLLinkElement>,
  HTMLLinkElement
> {
  return {
    rel,
    href,
    ...options,
  };
}

function attachMeta(
  name: string,
  content: string
): React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
> {
  if (name === 'title') return { title: content };
  if (name === 'charset') return { charSet: content };

  return {
    name,
    content,
  };
}

function attachSeo(options: {
  title: string;
  description?: string;
  image?: string;
  keywords?: string[];
}): React.DetailedHTMLProps<
  React.MetaHTMLAttributes<HTMLMetaElement>,
  HTMLMetaElement
>[] {
  return [
    { name: 'title', content: options.title },
    { name: 'description', content: options.description },
    { name: 'keywords', content: options.keywords?.join(', ') },

    // twitter
    { name: 'twitter:card', content: 'summary_large' },
    { name: 'twitter:creator', content: '@forgebyd' },
    { name: 'twitter:site', content: '@forgebyd' },
    { name: 'twitter:title', content: options.title },
    { name: 'twitter:description', content: options.description },
    { name: 'twitter:image', content: options.image },

    // open graph
    { name: 'og:type', content: 'website' },
    { name: 'og:title', content: options.title },
    { name: 'og:description', content: options.description },
    { name: 'og:image', content: options.image },
  ];
}

function attachStyle(href: string): {
  rel: 'stylesheet';
  href: string;
} {
  return {
    rel: 'stylesheet',
    href,
  };
}

export { attachLink, attachMeta, attachSeo, attachStyle };
