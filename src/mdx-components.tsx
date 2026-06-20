import type { MDXComponents } from "mdx/types";

// Global component map applied to every MDX file in the project.
// Styled to match the site's engineering aesthetic instead of pulling
// in @tailwindcss/typography, so blog posts stay visually consistent.
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-12 mb-4 text-3xl font-bold tracking-tight text-foreground first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 border-b border-border pb-2 text-2xl font-bold tracking-tight text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="my-4 leading-relaxed text-muted-foreground">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="font-medium text-erus underline underline-offset-4 transition-colors hover:text-erus/80"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-5 list-disc space-y-2 text-muted-foreground marker:text-erus">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-5 list-decimal space-y-2 text-muted-foreground marker:text-erus">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-erus/40 bg-erus/[0.04] py-1 pl-4 text-muted-foreground italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded-sm border border-border bg-muted/40 px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto border border-border bg-muted/30 p-4 font-mono text-sm leading-relaxed [&>code]:border-0 [&>code]:bg-transparent [&>code]:p-0">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-10 border-border" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse border border-border text-sm">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border bg-muted/40 px-3 py-2 text-left font-mono text-xs uppercase tracking-[0.12em] text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-3 py-2 text-muted-foreground">
      {children}
    </td>
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : ""}
      alt={alt ?? ""}
      className="my-6 w-full border border-border"
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
