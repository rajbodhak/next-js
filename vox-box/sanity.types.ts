/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type Complain = {
  _id: string;
  _type: "complain";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  description?: string;
  image?: string;
  views?: number;
  category?: string;
  pitch?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  email?: string;
  image?: string;
};

export type Markdown = string;

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityImageHotspot | SanityImageCrop | SanityFileAsset | SanityImageAsset | SanityImageMetadata | Geopoint | SanityAssetSourceData | Complain | Slug | Author | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/queries.ts
// Variable: COMPLAIN_QUERY
// Query: *[_type == "complain" && defined(slug.current)] | order(_createdAt desc){    _id,  title,  slug,  _createdAt,  description,  category,  views,  pitch,  image,  "author": author->{    _id,    name,    email,    image}}
export type COMPLAIN_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  _createdAt: string;
  description: string | null;
  category: string | null;
  views: number | null;
  pitch: string | null;
  image: string | null;
  author: {
    _id: string;
    name: string | null;
    email: string | null;
    image: string | null;
  } | null;
}>;
// Variable: COMPLAIN_BY_ID_QUERY
// Query: *[_type == "complain" && _id == $id][0]{  _id,  title,  _createdAt,  slug,  description,  category,  views,  pitch,  image,  "author": author->{    _id,    name,    email,    image  }}
export type COMPLAIN_BY_ID_QUERYResult = {
  _id: string;
  title: string | null;
  _createdAt: string;
  slug: Slug | null;
  description: string | null;
  category: string | null;
  views: number | null;
  pitch: string | null;
  image: string | null;
  author: {
    _id: string;
    name: string | null;
    email: string | null;
    image: string | null;
  } | null;
} | null;
// Variable: COMPLAIN_VIEWS_QUERY
// Query: *[_type == "complain" && _id == $id][0] {  _id, views}
export type COMPLAIN_VIEWS_QUERYResult = {
  _id: string;
  views: number | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"complain\" && defined(slug.current)] | order(_createdAt desc){\n    _id,\n  title,\n  slug,\n  _createdAt,\n  description,\n  category,\n  views,\n  pitch,\n  image,\n  \"author\": author->{\n    _id,\n    name,\n    email,\n    image\n}\n}": COMPLAIN_QUERYResult;
    "*[_type == \"complain\" && _id == $id][0]{\n  _id,\n  title,\n  _createdAt,\n  slug,\n  description,\n  category,\n  views,\n  pitch,\n  image,\n  \"author\": author->{\n    _id,\n    name,\n    email,\n    image\n  }\n}": COMPLAIN_BY_ID_QUERYResult;
    "*[_type == \"complain\" && _id == $id][0] {\n  _id, views\n}": COMPLAIN_VIEWS_QUERYResult;
  }
}