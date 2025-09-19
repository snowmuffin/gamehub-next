import React from "react";
import { getFrontendUrl } from "@/shared/utils/environment";

const Head = () => {
  const baseUrl = getFrontendUrl();
  const pagePath = "/utilities/thruster-requirement-calculator";
  const pageUrl = `${baseUrl}${pagePath}`;
  const title = "Thruster Requirement Calculator | Space Engineers 스러스터 계산기";
  const description =
    "우주선 질량·환경을 입력하면 Space Engineers에 필요한 스러스터 수를 즉시 계산합니다. 진공/대기, 중력, 재질별 추력까지 반영하는 정확한 계산기.";

  const webAppLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Thruster Requirement Calculator",
    url: pageUrl,
    applicationCategory: "Calculator",
    operatingSystem: "Web",
    inLanguage: ["ko", "en"],
    description
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Utilities",
        item: `${baseUrl}/utilities`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Thruster Requirement Calculator",
        item: pageUrl
      }
    ]
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      {/* Optionally add an image when available */}
      {/* <meta property="og:image" content={`${baseUrl}/assets/images/og/thruster-calc.png`} /> */}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={pageUrl} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
};

export default Head;
