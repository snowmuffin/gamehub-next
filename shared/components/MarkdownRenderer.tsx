"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = "" }) => {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
          h1: ({ children }) => <h1 className="fw-bold mb-3 mt-4">{children}</h1>,
          h2: ({ children }) => <h2 className="fw-semibold mb-3 mt-4">{children}</h2>,
          h3: ({ children }) => <h3 className="fw-semibold mb-2 mt-3">{children}</h3>,
          h4: ({ children }) => <h4 className="fw-medium mb-2 mt-3">{children}</h4>,
          h5: ({ children }) => <h5 className="fw-medium mb-2 mt-2">{children}</h5>,
          h6: ({ children }) => <h6 className="fw-medium mb-2 mt-2">{children}</h6>,
          p: ({ children }) => <p className="mb-3">{children}</p>,
          ul: ({ children }) => <ul className="mb-3">{children}</ul>,
          ol: ({ children }) => <ol className="mb-3">{children}</ol>,
          li: ({ children }) => <li className="mb-2">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-start border-primary border-3 ps-3 mb-3 text-muted">
              {children}
            </blockquote>
          ),
          code: ({ inline, children, ...props }: any) => {
            if (inline) {
              return (
                <code className="bg-light px-2 py-1 rounded" {...props}>
                  {children}
                </code>
              );
            }
            return (
              <pre className="bg-dark text-light p-3 rounded mb-3 overflow-auto">
                <code {...props}>{children}</code>
              </pre>
            );
          },
          table: ({ children }) => (
            <div className="table-responsive mb-3">
              <table className="table table-bordered">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="table-light">{children}</thead>,
          a: ({ children, href }) => (
            <a href={href} className="text-primary" target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img src={src} alt={alt} className="img-fluid rounded mb-3" />
          ),
          hr: () => <hr className="my-4" />
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
