import {createClient} from '@sanity/client';
import {createImageUrlBuilder} from '@sanity/image-url';

const projectId = import.meta.env.SANITY_PROJECT_ID;
const dataset = import.meta.env.SANITY_DATASET;
const apiVersion = import.meta.env.SANITY_API_VERSION;
const useCdn = import.meta.env.SANITY_USE_CDN === 'true';
const token = import.meta.env.SANITY_API_TOKEN;

export const hasSanityConfig = Boolean(projectId && dataset && apiVersion);

export const sanityClient = hasSanityConfig
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
      perspective: 'published',
    })
  : null;

const imageBuilder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function sanityImageUrl(source: unknown, options: {width?: number; height?: number; quality?: number} = {}) {
  if (!imageBuilder || !source) return null;

  try {
    let image = imageBuilder.image(source);

    if (options.width) image = image.width(options.width);
    if (options.height) image = image.height(options.height);
    if (options.quality) image = image.quality(options.quality);

    return image.auto('format').url();
  } catch {
    return null;
  }
}

async function fetchSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  if (!sanityClient) return null;

  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (error) {
    console.warn('[sanity] Falha ao buscar conteudo. Usando fallback local.', error);
    return null;
  }
}

const imageFields = `
  ...,
  asset
`;

const seoFields = `
  ...,
  ogImage {${imageFields}}
`;

const caseFields = `
  title,
  treatment,
  caption,
  targetPage,
  image {${imageFields}}
`;

const carouselItemFields = `
  title,
  caption,
  targetPage,
  hint,
  image {${imageFields}}
`;

const testimonialFields = `
  patientName,
  quote,
  source,
  stars
`;

export async function getHomeData() {
  return fetchSanity(`
    {
      "settings": *[_type == "siteSettings"][0]{
        ...,
        headerLogo {${imageFields}},
        footerLogo {${imageFields}},
        favicon {${imageFields}},
        defaultSeo {${seoFields}}
      },
      "page": *[_type == "homePage"][0]{
        ...,
        seo {${seoFields}},
        hero {..., image {${imageFields}}},
        treatmentsSection {
          ...,
          items[] {${carouselItemFields}}
        },
        about {..., portrait {${imageFields}}, signature {${imageFields}}},
        reviews {
          ...,
          buildingImage {${imageFields}},
          testimonials[]->{${testimonialFields}}
        },
        stickyGallery {
          ...,
          cases[]->{${caseFields}}
        }
      },
      "transformationCases": *[_type == "caseStudy" && showInTransformations == true] | order(_createdAt asc) {
        ${caseFields}
      },
      "galleryCases": *[_type == "caseStudy" && showInHomeGallery == true] | order(_createdAt asc) {
        ${caseFields}
      },
      "testimonials": *[_type == "testimonial" && featured == true] | order(_createdAt asc) {
        ${testimonialFields}
      }
    }
  `);
}

export async function getServiceData(slug: string) {
  return fetchSanity(`
    {
      "settings": *[_type == "siteSettings"][0]{
        ...,
        headerLogo {${imageFields}},
        footerLogo {${imageFields}},
        favicon {${imageFields}},
        defaultSeo {${seoFields}}
      },
      "page": *[_type == "servicePage" && slug.current == $slug][0]{
        ...,
        seo {${seoFields}},
        hero {..., image {${imageFields}}},
        transformationsSection {
          ...,
          items[] {${carouselItemFields}},
          cases[]->{${caseFields}}
        },
        areasSection {
          ...,
          cards[] {
            ...,
            image {${imageFields}}
          }
        },
        quiz {..., image {${imageFields}}},
        finalCta {...}
      },
      "transformationCases": *[_type == "caseStudy" && showInTransformations == true] | order(_createdAt asc) {
        ${caseFields}
      }
    }
  `, {slug});
}

export async function getPrivacyPolicyData() {
  return fetchSanity(`
    {
      "settings": *[_type == "siteSettings"][0]{
        ...,
        headerLogo {${imageFields}},
        footerLogo {${imageFields}},
        favicon {${imageFields}},
        defaultSeo {${seoFields}}
      },
      "page": *[_type == "privacyPolicy"][0]{
        ...,
        seo {${seoFields}}
      }
    }
  `);
}
