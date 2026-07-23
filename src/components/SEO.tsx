import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  type?: string;
  jsonLdSchema?: Record<string, any>[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'Jagdev Medical Shop, Shakurabad Pharmacy, Genuine Medicines Bihar, Medical Store Shakurabad, Online WhatsApp Medicine Order Shakurabad, Surgical Supplies Jehanabad',
  canonicalPath = '',
  type = 'website',
  jsonLdSchema = []
}) => {
  const fullTitle = `${title} | Jagdev Medical Shop - Shakurabad, Bihar`;
  const siteUrl = window.location.origin;
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  useEffect(() => {
    // Page Title
    document.title = fullTitle;

    // Helper function to set or update meta tags
    const updateMeta = (nameAttr: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Metas
    updateMeta('name', 'description', description);
    updateMeta('name', 'keywords', keywords);

    // OpenGraph
    updateMeta('property', 'og:title', fullTitle);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:type', type);
    updateMeta('property', 'og:url', canonicalUrl);
    updateMeta('property', 'og:site_name', 'Jagdev Medical Shop');
    updateMeta('property', 'og:image', 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80');

    // Twitter Card
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', fullTitle);
    updateMeta('name', 'twitter:description', description);
    updateMeta('name', 'twitter:image', 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80');

    // Canonical link
    let linkCanonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // LocalBusiness JSON-LD schema
    const defaultLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      'name': 'Jagdev Medical Shop',
      'image': 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
      '@id': canonicalUrl,
      'url': canonicalUrl,
      'telephone': '+916200828784',
      'priceRange': '₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '05, Shakurabad',
        'addressLocality': 'Shakurabad',
        'addressRegion': 'Bihar',
        'postalCode': '804425',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.1234,
        'longitude': 84.9876
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '07:00',
          'closes': '22:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '08:00',
          'closes': '20:00'
        }
      ],
      'sameAs': []
    };

    const combinedSchemas = [defaultLocalBusinessSchema, ...jsonLdSchema];

    // Remove existing injected JSON-LD script if any
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(combinedSchemas);
    document.head.appendChild(script);

    return () => {
      // Clean up script on unmount
      const s = document.getElementById('json-ld-schema');
      if (s) s.remove();
    };
  }, [fullTitle, description, keywords, canonicalUrl, type, jsonLdSchema]);

  return null;
};
