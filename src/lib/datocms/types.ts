import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: boolean; output: boolean; }
  CustomData: { input: Record<string, unknown>; output: Record<string, unknown>; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  FloatType: { input: number; output: number; }
  IntType: { input: number; output: number; }
  ItemId: { input: string; output: string; }
  JsonField: { input: unknown; output: unknown; }
  MetaTagAttributes: { input: Record<string, string>; output: Record<string, string>; }
  UploadId: { input: string; output: string; }
};

export type ActionBlockModelItemsField = EmailLinkRecord | ExternalLinkRecord | InternalLinkRecord | PhoneLinkRecord;

/** Block of type 🎛️ Action Block (action_block) */
export type ActionBlockRecord = RecordInterface & {
  __typename?: 'ActionBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  items: Array<ActionBlockModelItemsField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 🎛️ Action Block (action_block) */
export type ActionBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ApartmentCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ApartmentCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ApartmentCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ApartmentCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Apartment category (apartment_category) */
export type ApartmentCategoryRecord = RecordInterface & {
  __typename?: 'ApartmentCategoryRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Apartment category (apartment_category) */
export type ApartmentCategoryRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartment category (apartment_category) */
export type ApartmentCategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartment category (apartment_category) */
export type ApartmentCategoryRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ApartmentModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ApartmentModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ApartmentModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  acaciaReward?: InputMaybe<BooleanFilter>;
  bathrooms?: InputMaybe<IntegerFilter>;
  beddyId?: InputMaybe<StringFilter>;
  bedrooms?: InputMaybe<IntegerFilter>;
  boxImage?: InputMaybe<FileFilter>;
  category?: InputMaybe<LinkFilter>;
  cin?: InputMaybe<StringFilter>;
  claim?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  cuddles?: InputMaybe<LinksFilter>;
  description?: InputMaybe<TextFilter>;
  district?: InputMaybe<LinkFilter>;
  featuredImage?: InputMaybe<FileFilter>;
  featuredSlideshow?: InputMaybe<GalleryFilter>;
  gallery?: InputMaybe<LinksFilter>;
  highlight?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  kigoId?: InputMaybe<StringFilter>;
  kigoSlug?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  notes?: InputMaybe<JsonFilter>;
  position?: InputMaybe<PositionFilter>;
  price?: InputMaybe<StringFilter>;
  propertyId?: InputMaybe<StringFilter>;
  published?: InputMaybe<BooleanFilter>;
  seo?: InputMaybe<SeoFilter>;
  sleeps?: InputMaybe<IntegerFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  ups?: InputMaybe<LinksFilter>;
};

export type ApartmentModelInfoDetailField = InfoAddressRecord | InfoTextRecord;

export type ApartmentModelInfoDetailFieldListListNonNullMultiLocaleField = {
  __typename?: 'ApartmentModelInfoDetailFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<ApartmentModelInfoDetailField>;
};

export enum ApartmentModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  acaciaReward_ASC = 'acaciaReward_ASC',
  acaciaReward_DESC = 'acaciaReward_DESC',
  bathrooms_ASC = 'bathrooms_ASC',
  bathrooms_DESC = 'bathrooms_DESC',
  beddyId_ASC = 'beddyId_ASC',
  beddyId_DESC = 'beddyId_DESC',
  bedrooms_ASC = 'bedrooms_ASC',
  bedrooms_DESC = 'bedrooms_DESC',
  cin_ASC = 'cin_ASC',
  cin_DESC = 'cin_DESC',
  claim_ASC = 'claim_ASC',
  claim_DESC = 'claim_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  highlight_ASC = 'highlight_ASC',
  highlight_DESC = 'highlight_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  kigoId_ASC = 'kigoId_ASC',
  kigoId_DESC = 'kigoId_DESC',
  kigoSlug_ASC = 'kigoSlug_ASC',
  kigoSlug_DESC = 'kigoSlug_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  propertyId_ASC = 'propertyId_ASC',
  propertyId_DESC = 'propertyId_DESC',
  published_ASC = 'published_ASC',
  published_DESC = 'published_DESC',
  sleeps_ASC = 'sleeps_ASC',
  sleeps_DESC = 'sleeps_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Apartments (apartment) */
export type ApartmentRecord = RecordInterface & {
  __typename?: 'ApartmentRecord';
  _allClaimLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allHighlightLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allHomeTruthLocales?: Maybe<Array<TruthRecordListListNonNullMultiLocaleField>>;
  _allInfoDetailLocales?: Maybe<Array<ApartmentModelInfoDetailFieldListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  acaciaReward?: Maybe<Scalars['BooleanType']['output']>;
  bathrooms?: Maybe<Scalars['IntType']['output']>;
  beddyId?: Maybe<Scalars['String']['output']>;
  bedrooms?: Maybe<Scalars['IntType']['output']>;
  boxImage?: Maybe<FileField>;
  category?: Maybe<ApartmentCategoryRecord>;
  cin?: Maybe<Scalars['String']['output']>;
  claim?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  cuddles: Array<CuddleRecord>;
  description?: Maybe<Scalars['String']['output']>;
  district?: Maybe<DistrictsRecord>;
  featuredImage?: Maybe<FileField>;
  featuredSlideshow: Array<FileField>;
  gallery: Array<GalleryImagesRecord>;
  highlight?: Maybe<Scalars['String']['output']>;
  homeTruth: Array<TruthRecord>;
  id: Scalars['ItemId']['output'];
  infoDetail: Array<ApartmentModelInfoDetailField>;
  kigoId?: Maybe<Scalars['String']['output']>;
  kigoSlug?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['JsonField']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  propertyId?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['BooleanType']['output']>;
  seo?: Maybe<SeoField>;
  sleeps?: Maybe<Scalars['IntType']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  ups: Array<UpRecord>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecord_AllClaimLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecord_AllHighlightLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecord_AllHomeTruthLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecord_AllInfoDetailLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecordClaimArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecordHighlightArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecordHomeTruthArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecordInfoDetailArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Apartments (apartment) */
export type ApartmentRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Page Apartments (apartments_page) */
export type ApartmentsPageRecord = RecordInterface & {
  __typename?: 'ApartmentsPageRecord';
  _allIntroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  intro?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Page Apartments (apartments_page) */
export type ApartmentsPageRecord_AllIntroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Apartments (apartments_page) */
export type ApartmentsPageRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Apartments (apartments_page) */
export type ApartmentsPageRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Apartments (apartments_page) */
export type ApartmentsPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Apartments (apartments_page) */
export type ApartmentsPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Apartments (apartments_page) */
export type ApartmentsPageRecordIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Apartments (apartments_page) */
export type ApartmentsPageRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Apartments (apartments_page) */
export type ApartmentsPageRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Apartments (apartments_page) */
export type ApartmentsPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Linking fields */
export enum AppModelFieldsReferencingPageModel {
  app_menuItems = 'app_menuItems',
  app_menuItems__menuItemInternal_link = 'app_menuItems__menuItemInternal_link'
}

export type AppModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AppModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AppModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  allowAiBots?: InputMaybe<BooleanFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum AppModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  allowAiBots_ASC = 'allowAiBots_ASC',
  allowAiBots_DESC = 'allowAiBots_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type 🖥️ Website (app) */
export type AppRecord = RecordInterface & {
  __typename?: 'AppRecord';
  _allMenuItemsLocales?: Maybe<Array<MenuItemInternalRecordListListNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  allowAiBots?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  menuItems: Array<MenuItemInternalRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type 🖥️ Website (app) */
export type AppRecord_AllMenuItemsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🖥️ Website (app) */
export type AppRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🖥️ Website (app) */
export type AppRecordMenuItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type BlogCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum BlogCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Blog category (blog_category) */
export type BlogCategoryRecord = RecordInterface & {
  __typename?: 'BlogCategoryRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Blog category (blog_category) */
export type BlogCategoryRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type BooleanTypeMultiLocaleField = {
  __typename?: 'BooleanTypeMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['BooleanType']['output']>;
};

export type CallToActionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CallToActionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CallToActionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  label?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum CallToActionModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  label_ASC = 'label_ASC',
  label_DESC = 'label_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Call to action (call_to_action) */
export type CallToActionRecord = RecordInterface & {
  __typename?: 'CallToActionRecord';
  _allLabelLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allUrlLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type Call to action (call_to_action) */
export type CallToActionRecord_AllLabelLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Call to action (call_to_action) */
export type CallToActionRecord_AllUrlLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Call to action (call_to_action) */
export type CallToActionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Call to action (call_to_action) */
export type CallToActionRecordLabelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Call to action (call_to_action) */
export type CallToActionRecordUrlArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type CallToActionRecordMultiLocaleField = {
  __typename?: 'CallToActionRecordMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<CallToActionRecord>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CuddleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CuddleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CuddleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum CuddleModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Cuddle (cuddle) */
export type CuddleRecord = RecordInterface & {
  __typename?: 'CuddleRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allUrlLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type Cuddle (cuddle) */
export type CuddleRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cuddle (cuddle) */
export type CuddleRecord_AllUrlLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cuddle (cuddle) */
export type CuddleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cuddle (cuddle) */
export type CuddleRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Cuddle (cuddle) */
export type CuddleRecordUrlArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Date fields */
export type DateFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['Date']['input']>;
};

export type DistrictsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<DistrictsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DistrictsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  abstract?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  gallery?: InputMaybe<LinksFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum DistrictsModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Districts (districts) */
export type DistrictsRecord = RecordInterface & {
  __typename?: 'DistrictsRecord';
  _allAbstractLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  abstract?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  gallery: Array<GalleryImagesRecord>;
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Districts (districts) */
export type DistrictsRecord_AllAbstractLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Districts (districts) */
export type DistrictsRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Districts (districts) */
export type DistrictsRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Districts (districts) */
export type DistrictsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Districts (districts) */
export type DistrictsRecordAbstractArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Districts (districts) */
export type DistrictsRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Districts (districts) */
export type DistrictsRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📧 Email Link (email_link) */
export type EmailLinkRecord = RecordInterface & {
  __typename?: 'EmailLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  emailAddress?: Maybe<Scalars['String']['output']>;
  emailBody?: Maybe<Scalars['String']['output']>;
  emailSubject?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  style?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 📧 Email Link (email_link) */
export type EmailLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📧 Email Link (email_link) */
export type EmailLinkRecordEmailBodyArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 📎 Embed Block (embed_block) */
export type EmbedBlockRecord = RecordInterface & {
  __typename?: 'EmbedBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['JsonField']['output']>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type 📎 Embed Block (embed_block) */
export type EmbedBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🔗 External Link (external_link) */
export type ExternalLinkRecord = RecordInterface & {
  __typename?: 'ExternalLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  openInNewTab?: Maybe<Scalars['BooleanType']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🔗 External Link (external_link) */
export type ExternalLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FaqModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FaqModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  answer?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  posts?: InputMaybe<LinksFilter>;
  question?: InputMaybe<StringFilter>;
  services?: InputMaybe<LinksFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum FaqModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  question_ASC = 'question_ASC',
  question_DESC = 'question_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Faq (faq) */
export type FaqRecord = RecordInterface & {
  __typename?: 'FaqRecord';
  _allAnswerLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allQuestionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  posts: Array<PostRecord>;
  question?: Maybe<Scalars['String']['output']>;
  services: Array<ServiceRecord>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Faq (faq) */
export type FaqRecord_AllAnswerLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Faq (faq) */
export type FaqRecord_AllQuestionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Faq (faq) */
export type FaqRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Faq (faq) */
export type FaqRecordAnswerArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Faq (faq) */
export type FaqRecordQuestionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

export type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

export type FileModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<FileModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FileModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  file?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  locale?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum FileModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  locale_ASC = 'locale_ASC',
  locale_DESC = 'locale_DESC',
  path_ASC = 'path_ASC',
  path_DESC = 'path_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type 📦 File (file) */
export type FileRecord = RecordInterface & {
  __typename?: 'FileRecord';
  _allReferencingHomePages: Array<HomePageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHomePagesMeta: CollectionMetadata;
  _allReferencingNotFoundPages: Array<NotFoundPageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNotFoundPagesMeta: CollectionMetadata;
  _allReferencingPagePartials: Array<PagePartialRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagePartialsMeta: CollectionMetadata;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  file?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type 📦 File (file) */
export type FileRecord_AllReferencingHomePagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomePageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomePageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomePageAndFile>;
};


/** Record of type 📦 File (file) */
export type FileRecord_AllReferencingHomePagesMetaArgs = {
  filter?: InputMaybe<HomePageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomePageAndFile>;
};


/** Record of type 📦 File (file) */
export type FileRecord_AllReferencingNotFoundPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NotFoundPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NotFoundPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNotFoundPageAndFile>;
};


/** Record of type 📦 File (file) */
export type FileRecord_AllReferencingNotFoundPagesMetaArgs = {
  filter?: InputMaybe<NotFoundPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNotFoundPageAndFile>;
};


/** Record of type 📦 File (file) */
export type FileRecord_AllReferencingPagePartialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PagePartialModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PagePartialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPagePartialAndFile>;
};


/** Record of type 📦 File (file) */
export type FileRecord_AllReferencingPagePartialsMetaArgs = {
  filter?: InputMaybe<PagePartialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPagePartialAndFile>;
};


/** Record of type 📦 File (file) */
export type FileRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndFile>;
};


/** Record of type 📦 File (file) */
export type FileRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndFile>;
};


/** Record of type 📦 File (file) */
export type FileRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Multiple files/images field */
export type GalleryFilter = {
  /** Filter records that have all of the specified uploads. The specified values must be Upload IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records that have one of the specified uploads. The specified values must be Upload IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Upload IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that do not have any of the specified uploads. The specified values must be Upload IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

export type GalleryImagesModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<GalleryImagesModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GalleryImagesModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum GalleryImagesModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Gallery_images (gallery_images) */
export type GalleryImagesRecord = RecordInterface & {
  __typename?: 'GalleryImagesRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Gallery_images (gallery_images) */
export type GalleryImagesRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Gallery_images (gallery_images) */
export type GalleryImagesRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Gallery_images (gallery_images) */
export type GalleryImagesRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

/** Block of type 🗃️ Grouping Block (grouping_block) */
export type GroupingBlockRecord = RecordInterface & {
  __typename?: 'GroupingBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  items: Array<GroupingItemRecord>;
  layout?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 🗃️ Grouping Block (grouping_block) */
export type GroupingBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type GroupingItemModelBlocksField = ActionBlockRecord | ImageBlockRecord | TableBlockRecord | TextBlockRecord | TextImageBlockRecord | VideoBlockRecord | VideoEmbedBlockRecord;

/** Block of type 🗂️ Grouping Item (grouping_item) */
export type GroupingItemRecord = RecordInterface & {
  __typename?: 'GroupingItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  blocks: Array<GroupingItemModelBlocksField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 🗂️ Grouping Item (grouping_item) */
export type GroupingItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type GuestPostModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<GuestPostModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GuestPostModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  guestName?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  text?: InputMaybe<TextFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum GuestPostModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  guestName_ASC = 'guestName_ASC',
  guestName_DESC = 'guestName_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Guest post (guest_post) */
export type GuestPostRecord = RecordInterface & {
  __typename?: 'GuestPostRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  guestName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type Guest post (guest_post) */
export type GuestPostRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Guest post (guest_post) */
export type GuestPostRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GuestbookModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<GuestbookModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GuestbookModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  apartment?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  date?: InputMaybe<DateFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  published?: InputMaybe<BooleanFilter>;
  quote?: InputMaybe<TextFilter>;
  service?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum GuestbookModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  published_ASC = 'published_ASC',
  published_DESC = 'published_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Guestbooks (guestbook) */
export type GuestbookRecord = RecordInterface & {
  __typename?: 'GuestbookRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  apartment?: Maybe<ApartmentRecord>;
  createdAt: Scalars['DateTime']['output'];
  date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['BooleanType']['output']>;
  quote?: Maybe<Scalars['String']['output']>;
  service?: Maybe<ServiceRecord>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Guestbooks (guestbook) */
export type GuestbookRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Guestbooks (guestbook) */
export type GuestbookRecordQuoteArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePageModelBodyBlocksField = ActionBlockRecord | EmbedBlockRecord | GroupingBlockRecord | ImageBlockRecord | PagePartialBlockRecord | TableBlockRecord | TextBlockRecord | TextImageBlockRecord | VideoBlockRecord | VideoEmbedBlockRecord;

export type HomePageModelBodyBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'HomePageModelBodyBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<HomePageModelBodyBlocksField>;
};

/** Linking fields */
export enum HomePageModelFieldsReferencingFileModel {
  homePage_bodyBlocks = 'homePage_bodyBlocks',
  homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text = 'homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text',
  homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text = 'homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text',
  homePage_bodyBlocks__textBlock_text = 'homePage_bodyBlocks__textBlock_text',
  homePage_bodyBlocks__textImageBlock_text = 'homePage_bodyBlocks__textImageBlock_text'
}

/** Linking fields */
export enum HomePageModelFieldsReferencingPageModel {
  homePage_bodyBlocks = 'homePage_bodyBlocks',
  homePage_bodyBlocks__actionBlock_items__internalLink_link = 'homePage_bodyBlocks__actionBlock_items__internalLink_link',
  homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__actionBlock_items__internalLink_link = 'homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__actionBlock_items__internalLink_link',
  homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text = 'homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text',
  homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text__actionBlock_items__internalLink_link = 'homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text__actionBlock_items__internalLink_link',
  homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text = 'homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text',
  homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text__actionBlock_items__internalLink_link = 'homePage_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text__actionBlock_items__internalLink_link',
  homePage_bodyBlocks__textBlock_text = 'homePage_bodyBlocks__textBlock_text',
  homePage_bodyBlocks__textBlock_text__actionBlock_items__internalLink_link = 'homePage_bodyBlocks__textBlock_text__actionBlock_items__internalLink_link',
  homePage_bodyBlocks__textImageBlock_text = 'homePage_bodyBlocks__textImageBlock_text',
  homePage_bodyBlocks__textImageBlock_text__actionBlock_items__internalLink_link = 'homePage_bodyBlocks__textImageBlock_text__actionBlock_items__internalLink_link'
}

export type HomePageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomePageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomePageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  moods?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum HomePageModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export type HomePageOriginalModelCtaLinkField = DistrictsRecord | MoodRecord | OfferRecord | PostRecord | ServiceRecord;

/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord = RecordInterface & {
  __typename?: 'HomePageOriginalRecord';
  _allClaimLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allCtaLabelLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allCtaTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allDoTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMoodsTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPromoLocales?: Maybe<Array<PromoApartmentRecordListListNonNullMultiLocaleField>>;
  _allPromoTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allStayTextLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  beddyId?: Maybe<Scalars['String']['output']>;
  claim?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  ctaImage?: Maybe<FileField>;
  ctaLabel?: Maybe<Scalars['String']['output']>;
  ctaLink?: Maybe<HomePageOriginalModelCtaLinkField>;
  ctaText?: Maybe<Scalars['String']['output']>;
  doText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  moods: Array<MoodRecord>;
  moodsTitle?: Maybe<Scalars['String']['output']>;
  promo: Array<PromoApartmentRecord>;
  promoTitle?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  stayText?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_AllClaimLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_AllCtaLabelLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_AllCtaTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_AllDoTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_AllMoodsTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_AllPromoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_AllPromoTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_AllStayTextLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecordClaimArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecordCtaLabelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecordCtaTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecordDoTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecordMoodsTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecordPromoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecordPromoTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecordStayTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Home page Original (home_page_original) */
export type HomePageOriginalRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type 🏠 Home (home_page) */
export type HomePageRecord = RecordInterface & {
  __typename?: 'HomePageRecord';
  _allBodyBlocksLocales?: Maybe<Array<HomePageModelBodyBlocksFieldListListNonNullMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bodyBlocks: Array<HomePageModelBodyBlocksField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  moods: Array<MoodRecord>;
  seo?: Maybe<SeoField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type 🏠 Home (home_page) */
export type HomePageRecord_AllBodyBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏠 Home (home_page) */
export type HomePageRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏠 Home (home_page) */
export type HomePageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏠 Home (home_page) */
export type HomePageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏠 Home (home_page) */
export type HomePageRecordBodyBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏠 Home (home_page) */
export type HomePageRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🏠 Home (home_page) */
export type HomePageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🖼️ Image Block (image_block) */
export type ImageBlockRecord = RecordInterface & {
  __typename?: 'ImageBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 🖼️ Image Block (image_block) */
export type ImageBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ImageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ImageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ImageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum ImageModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Image (image) */
export type ImageRecord = RecordInterface & {
  __typename?: 'ImageRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allUrlLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  position?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type Image (image) */
export type ImageRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Image (image) */
export type ImageRecord_AllUrlLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Image (image) */
export type ImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Image (image) */
export type ImageRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Image (image) */
export type ImageRecordUrlArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/aspect-ratio)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/automatic)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/background-color)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-fallback)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Removal Foreground Type
   *
   * Specifies the image foreground type for background removal.
   *
   * Depends on: `bg-remove=true`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-foreground-type)
   */
  bgRemoveFgType?: InputMaybe<Array<ImgixParamsBgRemoveFgType>>;
  /**
   * Background Removal Semi Transparency
   *
   * Enables background removal while retaining semi-transparent areas.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-removal-semi-transparency)
   */
  bgRemoveSemiTransparency?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement)
   */
  bgReplace?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Replace Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replace-fallback)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/background-replacement-negative-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-height)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-padding)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-width)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-x-position)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/blending/blend-y-position)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/gaussian-blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/outer-border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/inner-border-radius)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/brightness)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/client-hints)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/chroma-subsampling)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-quantization)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/palette-color-count)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/contrast)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/crop-mode)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/color-space)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/download)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/dots-per-inch)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/device-pixel-ratio)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/exposure)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/expiration)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Blur
   *
   * Specifies the amount of blur to apply to detected faces. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-blur)
   */
  faceBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Pixelation
   *
   * Specifies the pixelation amount of the face.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-pixelation)
   */
  facePixel?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-index)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/face-padding)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/face-detection/json-face-data)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-mode)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-negative-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-position)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-generative-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-color-space)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/resize-fit-mode)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/flip-axis)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-format)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-x-position)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-y-position)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/focal-point-crop/focal-point-zoom)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frames-per-second)
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-selection)
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/gamma)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/animated-gif-quality)
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-colors)
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/grid-size)
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-height)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/highlight)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/halftone)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/hue-shift)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-interval)
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/iptc-passthrough)
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/jpg-progressive)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation)
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/lossless-compression)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * License Plate Blur
   *
   * Specifies the amount of blur to apply to detected license plates. Defaults to 0.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/license-plate-detection/license-plate-blur)
   */
  lpBlur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-image-url)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alignment-mode)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-base-url)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-fit-mode)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-height)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark If Minimum Height
   *
   * Displays the watermark if rendered base image pixel height is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-height)
   */
  markIfMinHeight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark If Minimum Width
   *
   * Displays the watermark if rendered base image pixel width is equal to or larger than the supplied value
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-if-minimum-width)
   */
  markIfMinWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-padding)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-rotation)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-width)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-x-position)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/watermark/watermark-y-position)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-type)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/mask-image/mask-background-color)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/maximum-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/minimum-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-bound)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/noise-reduction/noise-reduction-sharpen)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Object Removal Negative Prompt
   *
   * Provides a negative text suggestion to object-removal-prompt. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-negative-prompt)
   */
  objectRemovalNegativePrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Prompt
   *
   * Suggest auto generative fill for the object-removal-rect parameter
   *
   * Depends on: `object-removal-rect`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-prompt)
   */
  objectRemovalPrompt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal
   *
   * Using a specified rectangle, an object is removed from the image
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal)
   */
  objectRemovalRect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Object Removal Seed
   *
   * Sets the generative seed value for object-removal. Used to generate new outputs from the same prompt
   *
   * Depends on: `object-removal-rect`, `object-removal-prompt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/object-manipulation/object-removal-seed)
   */
  objectRemovalSeed?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/orientation)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/border-and-padding/padding-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-page-number)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/color-palette-extraction)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/color-palette/css-prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/pixellate)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=avif`, `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/output-quality)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Rasterize Bypass
   *
   * Bypasses all rendering parameters (including default parameters) and serves the original image. Works for svg+xml,x-eps,pdf, and vnd.adobe.illustrator.
   */
  rasterizeBypass?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/source-rectangle-region)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/reverse)
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Rotation Type
   *
   * Changes the rotation type.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/rotation/rotation-type)
   */
  rotType?: InputMaybe<ImgixParamsRotType>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/saturation)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/stylize/sepia-tone)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/shadow)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/sharpen)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/animation/frame-skip)
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/format/sanitize-svg)
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-image)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Alpha
   *
   * Specifies a trim alpha on a trim operation.
   *
   * Depends on: `trim=alpha`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-alpha)
   */
  trimAlpha?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-mean-difference)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-padding)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-standard-deviation)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/trim/trim-tolerance)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-string)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-clipping-mode)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-fit-mode)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-leading)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-outline-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-padding)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-shadow)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-font-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/typesetting-endpoint/text-tracking)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-x-position)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/text/text-y-position)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscale?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/unsharp-mask-radius)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/adjustment/vibrance)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/size/image-width)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

export enum ImgixParamsBgRemoveFgType {
  auto = 'auto',
  car = 'car'
}

export enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

export enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

export enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

export enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  origin = 'origin',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  blur = 'blur',
  gen = 'gen',
  generative = 'generative',
  gradient = 'gradient',
  solid = 'solid'
}

export enum ImgixParamsFillGenPos {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsFillGradientCs {
  hsl = 'hsl',
  lch = 'lch',
  linear = 'linear',
  oklab = 'oklab',
  srgb = 'srgb'
}

export enum ImgixParamsFillGradientLinearDirection {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsFillGradientType {
  linear = 'linear',
  radial = 'radial'
}

export enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

export enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

export enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

export enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block'
}

export enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

export enum ImgixParamsMarkTile {
  grid = 'grid'
}

export enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

export enum ImgixParamsRotType {
  pivot = 'pivot',
  straighten = 'straighten'
}

export enum ImgixParamsTransparency {
  grid = 'grid'
}

export enum ImgixParamsTrim {
  alpha = 'alpha',
  auto = 'auto',
  color = 'color'
}

export enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

export enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

export enum ImgixParamsTxtFit {
  max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type Info address (info_address) */
export type InfoAddressRecord = RecordInterface & {
  __typename?: 'InfoAddressRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  addressMap?: Maybe<LatLonField>;
  addressText?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  detailsLabel?: Maybe<InfoLabelRecord>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Info address (info_address) */
export type InfoAddressRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type InfoLabelModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<InfoLabelModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InfoLabelModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum InfoLabelModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Info label (info_label) */
export type InfoLabelRecord = RecordInterface & {
  __typename?: 'InfoLabelRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Info label (info_label) */
export type InfoLabelRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Info label (info_label) */
export type InfoLabelRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Info label (info_label) */
export type InfoLabelRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Info text (info_text) */
export type InfoTextRecord = RecordInterface & {
  __typename?: 'InfoTextRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  detailsLabel?: Maybe<InfoLabelRecord>;
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Info text (info_text) */
export type InfoTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Integer fields */
export type IntegerFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

export type InternalLinkModelLinkField = HomePageRecord | PageRecord;

/** Block of type 🔗 Internal Link (internal_link) */
export type InternalLinkRecord = RecordInterface & {
  __typename?: 'InternalLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  link?: Maybe<InternalLinkModelLinkField>;
  style?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 🔗 Internal Link (internal_link) */
export type InternalLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenAppAndPage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AppModelFieldsReferencingPageModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AppModelFieldsReferencingPageModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomePageAndFile = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomePageModelFieldsReferencingFileModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomePageModelFieldsReferencingFileModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenHomePageAndPage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<HomePageModelFieldsReferencingPageModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<HomePageModelFieldsReferencingPageModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNotFoundPageAndFile = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NotFoundPageModelFieldsReferencingFileModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NotFoundPageModelFieldsReferencingFileModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenNotFoundPageAndPage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<NotFoundPageModelFieldsReferencingPageModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<NotFoundPageModelFieldsReferencingPageModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndFile = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingFileModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingFileModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPageAndPage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PageModelFieldsReferencingPageModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PageModelFieldsReferencingPageModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPagePartialAndFile = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PagePartialModelFieldsReferencingFileModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PagePartialModelFieldsReferencingFileModel>>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPagePartialAndPage = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PagePartialModelFieldsReferencingPageModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PagePartialModelFieldsReferencingPageModel>>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenAppAndPage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAppAndPage>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomePageAndFile = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomePageAndFile>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenHomePageAndPage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenHomePageAndPage>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNotFoundPageAndFile = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNotFoundPageAndFile>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenNotFoundPageAndPage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenNotFoundPageAndPage>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndFile = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndFile>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPageAndPage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPageAndPage>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPagePartialAndFile = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPagePartialAndFile>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPagePartialAndPage = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPagePartialAndPage>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type LatLonField = {
  __typename?: 'LatLonField';
  latitude: Scalars['FloatType']['output'];
  longitude: Scalars['FloatType']['output'];
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Linking locales */
export enum LinkingLocale {
  _nonLocalized = '_nonLocalized',
  en = 'en',
  it = 'it'
}

/** Specifies how to filter by linking locales */
export type LinkingLocalesFilter = {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn?: InputMaybe<Array<LinkingLocale>>;
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn?: InputMaybe<Array<LinkingLocale>>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Specifies how to filter by locale */
export type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>;
};

export type MenuItemInternalModelLinkField = HomePageRecord | PageRecord;

/** Block of type 🔗 Menu Item (Internal) (menu_item_internal) */
export type MenuItemInternalRecord = RecordInterface & {
  __typename?: 'MenuItemInternalRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  link?: Maybe<MenuItemInternalModelLinkField>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 🔗 Menu Item (Internal) (menu_item_internal) */
export type MenuItemInternalRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type MenuItemInternalRecordListListNonNullMultiLocaleField = {
  __typename?: 'MenuItemInternalRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<MenuItemInternalRecord>;
};

export type MoodItemsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MoodItemsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MoodItemsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  label?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  object?: InputMaybe<LinksFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

export type MoodItemsModelObjectField = ApartmentRecord | PostRecord | ServiceRecord | TipRecord;

export enum MoodItemsModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  label_ASC = 'label_ASC',
  label_DESC = 'label_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Mood Item (mood_items) */
export type MoodItemsRecord = RecordInterface & {
  __typename?: 'MoodItemsRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allLabelLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allUrlLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  label?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  object: Array<MoodItemsModelObjectField>;
  position?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type Mood Item (mood_items) */
export type MoodItemsRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Mood Item (mood_items) */
export type MoodItemsRecord_AllLabelLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Mood Item (mood_items) */
export type MoodItemsRecord_AllUrlLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Mood Item (mood_items) */
export type MoodItemsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Mood Item (mood_items) */
export type MoodItemsRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Mood Item (mood_items) */
export type MoodItemsRecordLabelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Mood Item (mood_items) */
export type MoodItemsRecordUrlArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type MoodModelBoxesField = ApartmentRecord | DistrictsRecord;

export type MoodModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MoodModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MoodModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  boxes?: InputMaybe<LinksFilter>;
  claim?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  published?: InputMaybe<BooleanFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum MoodModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  claim_ASC = 'claim_ASC',
  claim_DESC = 'claim_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  published_ASC = 'published_ASC',
  published_DESC = 'published_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Moods (mood) */
export type MoodRecord = RecordInterface & {
  __typename?: 'MoodRecord';
  _allClaimLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  boxes: Array<MoodModelBoxesField>;
  claim?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  published?: Maybe<Scalars['BooleanType']['output']>;
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Moods (mood) */
export type MoodRecord_AllClaimLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Moods (mood) */
export type MoodRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Moods (mood) */
export type MoodRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Moods (mood) */
export type MoodRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Moods (mood) */
export type MoodRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Moods (mood) */
export type MoodRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Moods (mood) */
export type MoodRecordClaimArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Moods (mood) */
export type MoodRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Moods (mood) */
export type MoodRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Moods (mood) */
export type MoodRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Moods (mood) */
export type MoodRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

export type NotFoundPageModelBodyBlocksField = ActionBlockRecord | EmbedBlockRecord | ImageBlockRecord | PagePartialBlockRecord | TableBlockRecord | TextBlockRecord | TextImageBlockRecord | VideoBlockRecord | VideoEmbedBlockRecord;

export type NotFoundPageModelBodyBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'NotFoundPageModelBodyBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<NotFoundPageModelBodyBlocksField>;
};

/** Linking fields */
export enum NotFoundPageModelFieldsReferencingFileModel {
  notFoundPage_bodyBlocks = 'notFoundPage_bodyBlocks',
  notFoundPage_bodyBlocks__textBlock_text = 'notFoundPage_bodyBlocks__textBlock_text',
  notFoundPage_bodyBlocks__textImageBlock_text = 'notFoundPage_bodyBlocks__textImageBlock_text'
}

/** Linking fields */
export enum NotFoundPageModelFieldsReferencingPageModel {
  notFoundPage_bodyBlocks = 'notFoundPage_bodyBlocks',
  notFoundPage_bodyBlocks__actionBlock_items__internalLink_link = 'notFoundPage_bodyBlocks__actionBlock_items__internalLink_link',
  notFoundPage_bodyBlocks__textBlock_text = 'notFoundPage_bodyBlocks__textBlock_text',
  notFoundPage_bodyBlocks__textBlock_text__actionBlock_items__internalLink_link = 'notFoundPage_bodyBlocks__textBlock_text__actionBlock_items__internalLink_link',
  notFoundPage_bodyBlocks__textImageBlock_text = 'notFoundPage_bodyBlocks__textImageBlock_text',
  notFoundPage_bodyBlocks__textImageBlock_text__actionBlock_items__internalLink_link = 'notFoundPage_bodyBlocks__textImageBlock_text__actionBlock_items__internalLink_link'
}

export type NotFoundPageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NotFoundPageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NotFoundPageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum NotFoundPageModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type 🤷 Not found (not_found_page) */
export type NotFoundPageRecord = RecordInterface & {
  __typename?: 'NotFoundPageRecord';
  _allBodyBlocksLocales?: Maybe<Array<NotFoundPageModelBodyBlocksFieldListListNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bodyBlocks: Array<NotFoundPageModelBodyBlocksField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type 🤷 Not found (not_found_page) */
export type NotFoundPageRecord_AllBodyBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🤷 Not found (not_found_page) */
export type NotFoundPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🤷 Not found (not_found_page) */
export type NotFoundPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🤷 Not found (not_found_page) */
export type NotFoundPageRecordBodyBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🤷 Not found (not_found_page) */
export type NotFoundPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type OfferModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<OfferModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OfferModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  abstract?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  cta?: InputMaybe<LinkFilter>;
  featuredImage?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  published?: InputMaybe<BooleanFilter>;
  terms?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  validity?: InputMaybe<StringFilter>;
};

export enum OfferModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  published_ASC = 'published_ASC',
  published_DESC = 'published_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  validity_ASC = 'validity_ASC',
  validity_DESC = 'validity_DESC'
}

/** Record of type Offers (offer) */
export type OfferRecord = RecordInterface & {
  __typename?: 'OfferRecord';
  _allAbstractLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allCtaLocales?: Maybe<Array<CallToActionRecordMultiLocaleField>>;
  _allTermsLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allValidityLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  abstract?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<CallToActionRecord>;
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  published?: Maybe<Scalars['BooleanType']['output']>;
  terms?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  validity?: Maybe<Scalars['String']['output']>;
};


/** Record of type Offers (offer) */
export type OfferRecord_AllAbstractLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Offers (offer) */
export type OfferRecord_AllCtaLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Offers (offer) */
export type OfferRecord_AllTermsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Offers (offer) */
export type OfferRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Offers (offer) */
export type OfferRecord_AllValidityLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Offers (offer) */
export type OfferRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Offers (offer) */
export type OfferRecordAbstractArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Offers (offer) */
export type OfferRecordCtaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Offers (offer) */
export type OfferRecordTermsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Offers (offer) */
export type OfferRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Offers (offer) */
export type OfferRecordValidityArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecord = RecordInterface & {
  __typename?: 'PageAcacialifeRecord';
  _allCtaLocales?: Maybe<Array<CallToActionRecordMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  boxes: Array<MoodItemsRecord>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<CallToActionRecord>;
  description?: Maybe<Scalars['String']['output']>;
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecord_AllCtaLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecordCtaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Acacialife (page_acacialife) */
export type PageAcacialifeRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Page blog (page_blog) */
export type PageBlogRecord = RecordInterface & {
  __typename?: 'PageBlogRecord';
  _allIntroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  intro?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Page blog (page_blog) */
export type PageBlogRecord_AllIntroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page blog (page_blog) */
export type PageBlogRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page blog (page_blog) */
export type PageBlogRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page blog (page_blog) */
export type PageBlogRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page blog (page_blog) */
export type PageBlogRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page blog (page_blog) */
export type PageBlogRecordIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page blog (page_blog) */
export type PageBlogRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page blog (page_blog) */
export type PageBlogRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page blog (page_blog) */
export type PageBlogRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Page districts (page_districts) */
export type PageDistrictsRecord = RecordInterface & {
  __typename?: 'PageDistrictsRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Page districts (page_districts) */
export type PageDistrictsRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page districts (page_districts) */
export type PageDistrictsRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page districts (page_districts) */
export type PageDistrictsRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page districts (page_districts) */
export type PageDistrictsRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page districts (page_districts) */
export type PageDistrictsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page districts (page_districts) */
export type PageDistrictsRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page districts (page_districts) */
export type PageDistrictsRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page districts (page_districts) */
export type PageDistrictsRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page districts (page_districts) */
export type PageDistrictsRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Page Events (page_event) */
export type PageEventRecord = RecordInterface & {
  __typename?: 'PageEventRecord';
  _allIntroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  intro?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Page Events (page_event) */
export type PageEventRecord_AllIntroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Events (page_event) */
export type PageEventRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Events (page_event) */
export type PageEventRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Events (page_event) */
export type PageEventRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Events (page_event) */
export type PageEventRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Events (page_event) */
export type PageEventRecordIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Events (page_event) */
export type PageEventRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Events (page_event) */
export type PageEventRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Events (page_event) */
export type PageEventRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Page Faq (page_faq) */
export type PageFaqRecord = RecordInterface & {
  __typename?: 'PageFaqRecord';
  _allIntroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  intro?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Page Faq (page_faq) */
export type PageFaqRecord_AllIntroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Faq (page_faq) */
export type PageFaqRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Faq (page_faq) */
export type PageFaqRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Faq (page_faq) */
export type PageFaqRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Faq (page_faq) */
export type PageFaqRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Faq (page_faq) */
export type PageFaqRecordIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Faq (page_faq) */
export type PageFaqRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Faq (page_faq) */
export type PageFaqRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Faq (page_faq) */
export type PageFaqRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Page Guestbook (page_guestbook) */
export type PageGuestbookRecord = RecordInterface & {
  __typename?: 'PageGuestbookRecord';
  _allIntroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  intro?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Page Guestbook (page_guestbook) */
export type PageGuestbookRecord_AllIntroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Guestbook (page_guestbook) */
export type PageGuestbookRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Guestbook (page_guestbook) */
export type PageGuestbookRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Guestbook (page_guestbook) */
export type PageGuestbookRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Guestbook (page_guestbook) */
export type PageGuestbookRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Guestbook (page_guestbook) */
export type PageGuestbookRecordIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Guestbook (page_guestbook) */
export type PageGuestbookRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Guestbook (page_guestbook) */
export type PageGuestbookRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Guestbook (page_guestbook) */
export type PageGuestbookRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type PageModelBodyBlocksField = ActionBlockRecord | EmbedBlockRecord | GroupingBlockRecord | ImageBlockRecord | PagePartialBlockRecord | TableBlockRecord | TextBlockRecord | TextImageBlockRecord | VideoBlockRecord | VideoEmbedBlockRecord;

export type PageModelBodyBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'PageModelBodyBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<PageModelBodyBlocksField>;
};

/** Linking fields */
export enum PageModelFieldsReferencingFileModel {
  page_bodyBlocks = 'page_bodyBlocks',
  page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text = 'page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text',
  page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text = 'page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text',
  page_bodyBlocks__textBlock_text = 'page_bodyBlocks__textBlock_text',
  page_bodyBlocks__textImageBlock_text = 'page_bodyBlocks__textImageBlock_text'
}

/** Linking fields */
export enum PageModelFieldsReferencingPageModel {
  page_bodyBlocks = 'page_bodyBlocks',
  page_bodyBlocks__actionBlock_items__internalLink_link = 'page_bodyBlocks__actionBlock_items__internalLink_link',
  page_bodyBlocks__groupingBlock_items__groupingItem_blocks__actionBlock_items__internalLink_link = 'page_bodyBlocks__groupingBlock_items__groupingItem_blocks__actionBlock_items__internalLink_link',
  page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text = 'page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text',
  page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text__actionBlock_items__internalLink_link = 'page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textBlock_text__actionBlock_items__internalLink_link',
  page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text = 'page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text',
  page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text__actionBlock_items__internalLink_link = 'page_bodyBlocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text__actionBlock_items__internalLink_link',
  page_bodyBlocks__textBlock_text = 'page_bodyBlocks__textBlock_text',
  page_bodyBlocks__textBlock_text__actionBlock_items__internalLink_link = 'page_bodyBlocks__textBlock_text__actionBlock_items__internalLink_link',
  page_bodyBlocks__textImageBlock_text = 'page_bodyBlocks__textImageBlock_text',
  page_bodyBlocks__textImageBlock_text__actionBlock_items__internalLink_link = 'page_bodyBlocks__textImageBlock_text__actionBlock_items__internalLink_link',
  page_parentPage = 'page_parentPage'
}

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  parentPage?: InputMaybe<LinkFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum PageModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Page Moods (page_moods) */
export type PageMoodsRecord = RecordInterface & {
  __typename?: 'PageMoodsRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Page Moods (page_moods) */
export type PageMoodsRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Moods (page_moods) */
export type PageMoodsRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Moods (page_moods) */
export type PageMoodsRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Moods (page_moods) */
export type PageMoodsRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Moods (page_moods) */
export type PageMoodsRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Moods (page_moods) */
export type PageMoodsRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Moods (page_moods) */
export type PageMoodsRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Moods (page_moods) */
export type PageMoodsRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Moods (page_moods) */
export type PageMoodsRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Page Offers (page_offers) */
export type PageOffersRecord = RecordInterface & {
  __typename?: 'PageOffersRecord';
  _allIntroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  intro?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Page Offers (page_offers) */
export type PageOffersRecord_AllIntroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Offers (page_offers) */
export type PageOffersRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Offers (page_offers) */
export type PageOffersRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Offers (page_offers) */
export type PageOffersRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Offers (page_offers) */
export type PageOffersRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Offers (page_offers) */
export type PageOffersRecordIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Offers (page_offers) */
export type PageOffersRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Offers (page_offers) */
export type PageOffersRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Offers (page_offers) */
export type PageOffersRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🧩 Page Partial Block (page_partial_block) */
export type PagePartialBlockRecord = RecordInterface & {
  __typename?: 'PagePartialBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  items: Array<PagePartialRecord>;
  layout?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 🧩 Page Partial Block (page_partial_block) */
export type PagePartialBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type PagePartialModelBlocksField = ActionBlockRecord | GroupingBlockRecord | ImageBlockRecord | TableBlockRecord | TextBlockRecord | TextImageBlockRecord | VideoBlockRecord | VideoEmbedBlockRecord;

export type PagePartialModelBlocksFieldListListNonNullMultiLocaleField = {
  __typename?: 'PagePartialModelBlocksFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<PagePartialModelBlocksField>;
};

/** Linking fields */
export enum PagePartialModelFieldsReferencingFileModel {
  pagePartial_blocks = 'pagePartial_blocks',
  pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textBlock_text = 'pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textBlock_text',
  pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text = 'pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text',
  pagePartial_blocks__textBlock_text = 'pagePartial_blocks__textBlock_text',
  pagePartial_blocks__textImageBlock_text = 'pagePartial_blocks__textImageBlock_text'
}

/** Linking fields */
export enum PagePartialModelFieldsReferencingPageModel {
  pagePartial_blocks = 'pagePartial_blocks',
  pagePartial_blocks__actionBlock_items__internalLink_link = 'pagePartial_blocks__actionBlock_items__internalLink_link',
  pagePartial_blocks__groupingBlock_items__groupingItem_blocks__actionBlock_items__internalLink_link = 'pagePartial_blocks__groupingBlock_items__groupingItem_blocks__actionBlock_items__internalLink_link',
  pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textBlock_text = 'pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textBlock_text',
  pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textBlock_text__actionBlock_items__internalLink_link = 'pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textBlock_text__actionBlock_items__internalLink_link',
  pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text = 'pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text',
  pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text__actionBlock_items__internalLink_link = 'pagePartial_blocks__groupingBlock_items__groupingItem_blocks__textImageBlock_text__actionBlock_items__internalLink_link',
  pagePartial_blocks__textBlock_text = 'pagePartial_blocks__textBlock_text',
  pagePartial_blocks__textBlock_text__actionBlock_items__internalLink_link = 'pagePartial_blocks__textBlock_text__actionBlock_items__internalLink_link',
  pagePartial_blocks__textImageBlock_text = 'pagePartial_blocks__textImageBlock_text',
  pagePartial_blocks__textImageBlock_text__actionBlock_items__internalLink_link = 'pagePartial_blocks__textImageBlock_text__actionBlock_items__internalLink_link'
}

export type PagePartialModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PagePartialModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PagePartialModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum PagePartialModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type 🧩 Page Partial (page_partial) */
export type PagePartialRecord = RecordInterface & {
  __typename?: 'PagePartialRecord';
  _allBlocksLocales?: Maybe<Array<PagePartialModelBlocksFieldListListNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  blocks: Array<PagePartialModelBlocksField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type 🧩 Page Partial (page_partial) */
export type PagePartialRecord_AllBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🧩 Page Partial (page_partial) */
export type PagePartialRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🧩 Page Partial (page_partial) */
export type PagePartialRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🧩 Page Partial (page_partial) */
export type PagePartialRecordBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🧩 Page Partial (page_partial) */
export type PagePartialRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type 📑 Page (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord';
  _allBodyBlocksLocales?: Maybe<Array<PageModelBodyBlocksFieldListListNonNullMultiLocaleField>>;
  _allReferencingApps: Array<AppRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAppsMeta: CollectionMetadata;
  _allReferencingHomePages: Array<HomePageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingHomePagesMeta: CollectionMetadata;
  _allReferencingNotFoundPages: Array<NotFoundPageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingNotFoundPagesMeta: CollectionMetadata;
  _allReferencingPagePartials: Array<PagePartialRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagePartialsMeta: CollectionMetadata;
  _allReferencingPages: Array<PageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPagesMeta: CollectionMetadata;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bodyBlocks: Array<PageModelBodyBlocksField>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  parentPage?: Maybe<PageRecord>;
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllBodyBlocksLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllReferencingAppsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AppModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AppModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAppAndPage>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllReferencingAppsMetaArgs = {
  filter?: InputMaybe<AppModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAppAndPage>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllReferencingHomePagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<HomePageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<HomePageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomePageAndPage>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllReferencingHomePagesMetaArgs = {
  filter?: InputMaybe<HomePageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenHomePageAndPage>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllReferencingNotFoundPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NotFoundPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NotFoundPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNotFoundPageAndPage>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllReferencingNotFoundPagesMetaArgs = {
  filter?: InputMaybe<NotFoundPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenNotFoundPageAndPage>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllReferencingPagePartialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PagePartialModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PagePartialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPagePartialAndPage>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllReferencingPagePartialsMetaArgs = {
  filter?: InputMaybe<PagePartialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPagePartialAndPage>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllReferencingPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndPage>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllReferencingPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPageAndPage>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📑 Page (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📑 Page (page) */
export type PageRecordBodyBlocksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📑 Page (page) */
export type PageRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📑 Page (page) */
export type PageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 📑 Page (page) */
export type PageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Page Services (page_services) */
export type PageServicesRecord = RecordInterface & {
  __typename?: 'PageServicesRecord';
  _allIntroLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  intro?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<SeoField>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Page Services (page_services) */
export type PageServicesRecord_AllIntroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Services (page_services) */
export type PageServicesRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Services (page_services) */
export type PageServicesRecord_AllSubtitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Services (page_services) */
export type PageServicesRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Services (page_services) */
export type PageServicesRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Services (page_services) */
export type PageServicesRecordIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Page Services (page_services) */
export type PageServicesRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Services (page_services) */
export type PageServicesRecordSubtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Page Services (page_services) */
export type PageServicesRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ParagraphModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ParagraphModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ParagraphModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  body?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ParagraphModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Paragraph (paragraph) */
export type ParagraphRecord = RecordInterface & {
  __typename?: 'ParagraphRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Paragraph (paragraph) */
export type ParagraphRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Paragraph (paragraph) */
export type ParagraphRecordBodyArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 📞 Phone Link (phone_link) */
export type PhoneLinkRecord = RecordInterface & {
  __typename?: 'PhoneLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  action?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 📞 Phone Link (phone_link) */
export type PhoneLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📞 Phone Link (phone_link) */
export type PhoneLinkRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

export type PostModelContentField = GalleryImagesRecord | GuestPostRecord | ImageRecord | ParagraphRecord;

export type PostModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PostModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  abstract?: InputMaybe<TextFilter>;
  category?: InputMaybe<LinkFilter>;
  content?: InputMaybe<LinksFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  cta?: InputMaybe<LinkFilter>;
  featuredImage?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  language?: InputMaybe<StringFilter>;
  published?: InputMaybe<BooleanFilter>;
  publishedAt?: InputMaybe<DateFilter>;
  relatedApartments?: InputMaybe<LinksFilter>;
  relatedDistricts?: InputMaybe<LinksFilter>;
  relatedPosts?: InputMaybe<LinksFilter>;
  relatedServices?: InputMaybe<LinksFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  sticky?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum PostModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  language_ASC = 'language_ASC',
  language_DESC = 'language_DESC',
  publishedAt_ASC = 'publishedAt_ASC',
  publishedAt_DESC = 'publishedAt_DESC',
  published_ASC = 'published_ASC',
  published_DESC = 'published_DESC',
  sticky_ASC = 'sticky_ASC',
  sticky_DESC = 'sticky_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Posts (post) */
export type PostRecord = RecordInterface & {
  __typename?: 'PostRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  abstract?: Maybe<Scalars['String']['output']>;
  category?: Maybe<BlogCategoryRecord>;
  content: Array<PostModelContentField>;
  createdAt: Scalars['DateTime']['output'];
  cta?: Maybe<CallToActionRecord>;
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  language?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['BooleanType']['output']>;
  publishedAt?: Maybe<Scalars['Date']['output']>;
  relatedApartments: Array<ApartmentRecord>;
  relatedDistricts: Array<DistrictsRecord>;
  relatedPosts: Array<PostRecord>;
  relatedServices: Array<ServiceRecord>;
  seo?: Maybe<SeoField>;
  slug?: Maybe<Scalars['String']['output']>;
  sticky?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Posts (post) */
export type PostRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Posts (post) */
export type PostRecordAbstractArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type promo_apartment (promo_apartment) */
export type PromoApartmentRecord = RecordInterface & {
  __typename?: 'PromoApartmentRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  apartment?: Maybe<ApartmentRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  foto?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type promo_apartment (promo_apartment) */
export type PromoApartmentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type PromoApartmentRecordListListNonNullMultiLocaleField = {
  __typename?: 'PromoApartmentRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<PromoApartmentRecord>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allApartmentCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allApartmentsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allBlogCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCallToActionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCuddlesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allDistrictsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFaqsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allFilesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allGalleryImagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allGuestPostsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allGuestbooksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allImagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allInfoLabelsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMoodItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMoodsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allOffersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagePartialsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allParagraphsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPostsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allRedirectRulesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allRedirectsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allServiceCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allServicesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTipsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTranslationsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allUpsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allVideoTextTracksMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a collection of records */
  allApartmentCategories: Array<ApartmentCategoryRecord>;
  /** Returns a collection of records */
  allApartments: Array<ApartmentRecord>;
  /** Returns a collection of records */
  allBlogCategories: Array<BlogCategoryRecord>;
  /** Returns a collection of records */
  allCallToActions: Array<CallToActionRecord>;
  /** Returns a collection of records */
  allCuddles: Array<CuddleRecord>;
  /** Returns a collection of records */
  allDistricts: Array<DistrictsRecord>;
  /** Returns a collection of records */
  allFaqs: Array<FaqRecord>;
  /** Returns a collection of records */
  allFiles: Array<FileRecord>;
  /** Returns a collection of records */
  allGalleryImages: Array<GalleryImagesRecord>;
  /** Returns a collection of records */
  allGuestPosts: Array<GuestPostRecord>;
  /** Returns a collection of records */
  allGuestbooks: Array<GuestbookRecord>;
  /** Returns a collection of records */
  allImages: Array<ImageRecord>;
  /** Returns a collection of records */
  allInfoLabels: Array<InfoLabelRecord>;
  /** Returns a collection of records */
  allMoodItems: Array<MoodItemsRecord>;
  /** Returns a collection of records */
  allMoods: Array<MoodRecord>;
  /** Returns a collection of records */
  allOffers: Array<OfferRecord>;
  /** Returns a collection of records */
  allPagePartials: Array<PagePartialRecord>;
  /** Returns a collection of records */
  allPages: Array<PageRecord>;
  /** Returns a collection of records */
  allParagraphs: Array<ParagraphRecord>;
  /** Returns a collection of records */
  allPosts: Array<PostRecord>;
  /** Returns a collection of records */
  allRedirectRules: Array<RedirectRuleRecord>;
  /** Returns a collection of records */
  allRedirects: Array<RedirectRecord>;
  /** Returns a collection of records */
  allServiceCategories: Array<ServiceCategoriesRecord>;
  /** Returns a collection of records */
  allServices: Array<ServiceRecord>;
  /** Returns a collection of records */
  allTips: Array<TipRecord>;
  /** Returns a collection of records */
  allTranslations: Array<TranslationRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a collection of records */
  allUps: Array<UpRecord>;
  /** Returns a collection of records */
  allVideoTextTracks: Array<VideoTextTrackRecord>;
  /** Returns a specific record */
  apartment?: Maybe<ApartmentRecord>;
  /** Returns a specific record */
  apartmentCategory?: Maybe<ApartmentCategoryRecord>;
  /** Returns the single instance record */
  apartmentsPage?: Maybe<ApartmentsPageRecord>;
  /** Returns the single instance record */
  app?: Maybe<AppRecord>;
  /** Returns a specific record */
  blogCategory?: Maybe<BlogCategoryRecord>;
  /** Returns a specific record */
  callToAction?: Maybe<CallToActionRecord>;
  /** Returns a specific record */
  cuddle?: Maybe<CuddleRecord>;
  /** Returns a specific record */
  districts?: Maybe<DistrictsRecord>;
  /** Returns a specific record */
  faq?: Maybe<FaqRecord>;
  /** Returns a specific record */
  file?: Maybe<FileRecord>;
  /** Returns a specific record */
  galleryImages?: Maybe<GalleryImagesRecord>;
  /** Returns a specific record */
  guestPost?: Maybe<GuestPostRecord>;
  /** Returns a specific record */
  guestbook?: Maybe<GuestbookRecord>;
  /** Returns the single instance record */
  homePage?: Maybe<HomePageRecord>;
  /** Returns the single instance record */
  homePageOriginal?: Maybe<HomePageOriginalRecord>;
  /** Returns a specific record */
  image?: Maybe<ImageRecord>;
  /** Returns a specific record */
  infoLabel?: Maybe<InfoLabelRecord>;
  /** Returns a specific record */
  mood?: Maybe<MoodRecord>;
  /** Returns a specific record */
  moodItems?: Maybe<MoodItemsRecord>;
  /** Returns the single instance record */
  notFoundPage?: Maybe<NotFoundPageRecord>;
  /** Returns a specific record */
  offer?: Maybe<OfferRecord>;
  /** Returns a specific record */
  page?: Maybe<PageRecord>;
  /** Returns the single instance record */
  pageAcacialife?: Maybe<PageAcacialifeRecord>;
  /** Returns the single instance record */
  pageBlog?: Maybe<PageBlogRecord>;
  /** Returns the single instance record */
  pageDistricts?: Maybe<PageDistrictsRecord>;
  /** Returns the single instance record */
  pageEvent?: Maybe<PageEventRecord>;
  /** Returns the single instance record */
  pageFaq?: Maybe<PageFaqRecord>;
  /** Returns the single instance record */
  pageGuestbook?: Maybe<PageGuestbookRecord>;
  /** Returns the single instance record */
  pageMoods?: Maybe<PageMoodsRecord>;
  /** Returns the single instance record */
  pageOffers?: Maybe<PageOffersRecord>;
  /** Returns a specific record */
  pagePartial?: Maybe<PagePartialRecord>;
  /** Returns the single instance record */
  pageServices?: Maybe<PageServicesRecord>;
  /** Returns a specific record */
  paragraph?: Maybe<ParagraphRecord>;
  /** Returns a specific record */
  post?: Maybe<PostRecord>;
  /** Returns a specific record */
  redirect?: Maybe<RedirectRecord>;
  /** Returns a specific record */
  redirectRule?: Maybe<RedirectRuleRecord>;
  /** Returns a specific record */
  service?: Maybe<ServiceRecord>;
  /** Returns a specific record */
  serviceCategories?: Maybe<ServiceCategoriesRecord>;
  /** Returns a specific record */
  tip?: Maybe<TipRecord>;
  /** Returns a specific record */
  translation?: Maybe<TranslationRecord>;
  /** Returns a specific record */
  up?: Maybe<UpRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
  /** Returns a specific record */
  videoTextTrack?: Maybe<VideoTextTrackRecord>;
};


/** The query root for this schema */
export type Query_AllApartmentCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ApartmentCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllApartmentsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ApartmentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllBlogCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BlogCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCallToActionsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CallToActionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllCuddlesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CuddleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllDistrictsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistrictsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllFaqsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllFilesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FileModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllGalleryImagesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<GalleryImagesModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllGuestPostsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<GuestPostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllGuestbooksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<GuestbookModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllImagesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ImageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllInfoLabelsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InfoLabelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMoodItemsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MoodItemsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllMoodsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MoodModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllOffersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<OfferModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPagePartialsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PagePartialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllParagraphsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ParagraphModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPostsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllRedirectRulesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RedirectRuleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllRedirectsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RedirectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllServiceCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceCategoriesModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllServicesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTipsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TipModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTranslationsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUpsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UpModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllVideoTextTracksMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VideoTextTrackModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAllApartmentCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ApartmentCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ApartmentCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllApartmentsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ApartmentModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ApartmentModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllBlogCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BlogCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCallToActionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CallToActionModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CallToActionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllCuddlesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CuddleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CuddleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllDistrictsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistrictsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistrictsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllFaqsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllFilesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FileModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FileModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllGalleryImagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<GalleryImagesModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<GalleryImagesModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllGuestPostsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<GuestPostModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<GuestPostModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllGuestbooksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<GuestbookModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<GuestbookModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllImagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ImageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ImageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllInfoLabelsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InfoLabelModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InfoLabelModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMoodItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MoodItemsModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MoodItemsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllMoodsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MoodModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MoodModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllOffersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<OfferModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<OfferModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPagePartialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PagePartialModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PagePartialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllParagraphsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ParagraphModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ParagraphModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPostsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllRedirectRulesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RedirectRuleModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RedirectRuleModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllRedirectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RedirectModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RedirectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllServiceCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceCategoriesModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ServiceCategoriesModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllServicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ServiceModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTipsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TipModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TipModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTranslationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TranslationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUpsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UpModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UpModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllVideoTextTracksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VideoTextTrackModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<VideoTextTrackModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryApartmentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ApartmentModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ApartmentModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryApartmentCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ApartmentCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ApartmentCategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryApartmentsPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAppArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryBlogCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BlogCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BlogCategoryModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCallToActionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CallToActionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CallToActionModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryCuddleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CuddleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CuddleModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryDistrictsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DistrictsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DistrictsModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFaqArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FaqModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FaqModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryFileArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<FileModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<FileModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryGalleryImagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<GalleryImagesModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<GalleryImagesModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryGuestPostArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<GuestPostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<GuestPostModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryGuestbookArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<GuestbookModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<GuestbookModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryHomePageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryHomePageOriginalArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ImageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ImageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryInfoLabelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InfoLabelModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InfoLabelModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMoodArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MoodModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MoodModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryMoodItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MoodItemsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MoodItemsModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryNotFoundPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryOfferArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<OfferModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<OfferModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPageAcacialifeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryPageBlogArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryPageDistrictsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryPageEventArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryPageFaqArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryPageGuestbookArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryPageMoodsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryPageOffersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryPagePartialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PagePartialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PagePartialModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPageServicesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryParagraphArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ParagraphModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ParagraphModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPostArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryRedirectArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RedirectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RedirectModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryRedirectRuleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RedirectRuleModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RedirectRuleModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryServiceArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ServiceModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryServiceCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ServiceCategoriesModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ServiceCategoriesModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTipArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TipModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TipModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTranslationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TranslationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TranslationModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUpArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UpModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UpModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};


/** The query root for this schema */
export type QueryVideoTextTrackArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<VideoTextTrackModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<VideoTextTrackModelOrderBy>>>;
};

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type RedirectModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<RedirectModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RedirectModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  codiceRedirect?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  destinationUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  originalUrl?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum RedirectModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  codiceRedirect_ASC = 'codiceRedirect_ASC',
  codiceRedirect_DESC = 'codiceRedirect_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  destinationUrl_ASC = 'destinationUrl_ASC',
  destinationUrl_DESC = 'destinationUrl_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  originalUrl_ASC = 'originalUrl_ASC',
  originalUrl_DESC = 'originalUrl_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Redirects (redirect) */
export type RedirectRecord = RecordInterface & {
  __typename?: 'RedirectRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  codiceRedirect?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  destinationUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  originalUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Redirects (redirect) */
export type RedirectRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type RedirectRuleModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<RedirectRuleModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RedirectRuleModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  from?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  statusCode?: InputMaybe<StringFilter>;
  to?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum RedirectRuleModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  from_ASC = 'from_ASC',
  from_DESC = 'from_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  statusCode_ASC = 'statusCode_ASC',
  statusCode_DESC = 'statusCode_DESC',
  to_ASC = 'to_ASC',
  to_DESC = 'to_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type ↪️ Redirect Rule (redirect_rule) */
export type RedirectRuleRecord = RecordInterface & {
  __typename?: 'RedirectRuleRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  position?: Maybe<Scalars['IntType']['output']>;
  statusCode?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type ↪️ Redirect Rule (redirect_rule) */
export type RedirectRuleRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

export type SeoFieldMultiLocaleField = {
  __typename?: 'SeoFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<SeoField>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type ServiceCategoriesModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceCategoriesModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceCategoriesModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ServiceCategoriesModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Service Categories (service_categories) */
export type ServiceCategoriesRecord = RecordInterface & {
  __typename?: 'ServiceCategoriesRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Service Categories (service_categories) */
export type ServiceCategoriesRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Service Categories (service_categories) */
export type ServiceCategoriesRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Service Categories (service_categories) */
export type ServiceCategoriesRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Service Categories (service_categories) */
export type ServiceCategoriesRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Service Categories (service_categories) */
export type ServiceCategoriesRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ServiceModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  abstract?: InputMaybe<TextFilter>;
  category?: InputMaybe<LinkFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  featuredImage?: InputMaybe<FileFilter>;
  gallery?: InputMaybe<LinksFilter>;
  highlight?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  price?: InputMaybe<StringFilter>;
  published?: InputMaybe<BooleanFilter>;
  seo?: InputMaybe<SeoFilter>;
  shopItem?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  trekksoftId?: InputMaybe<IntegerFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum ServiceModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  highlight_ASC = 'highlight_ASC',
  highlight_DESC = 'highlight_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  price_ASC = 'price_ASC',
  price_DESC = 'price_DESC',
  published_ASC = 'published_ASC',
  published_DESC = 'published_DESC',
  shopItem_ASC = 'shopItem_ASC',
  shopItem_DESC = 'shopItem_DESC',
  trekksoftId_ASC = 'trekksoftId_ASC',
  trekksoftId_DESC = 'trekksoftId_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Services (service) */
export type ServiceRecord = RecordInterface & {
  __typename?: 'ServiceRecord';
  _allAbstractLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allHighlightLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allSeoLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  abstract?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ServiceCategoriesRecord>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  featuredImage?: Maybe<FileField>;
  gallery: Array<GalleryImagesRecord>;
  highlight?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['BooleanType']['output']>;
  seo?: Maybe<SeoField>;
  shopItem?: Maybe<Scalars['BooleanType']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  trekksoftId?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type Services (service) */
export type ServiceRecord_AllAbstractLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Services (service) */
export type ServiceRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Services (service) */
export type ServiceRecord_AllHighlightLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Services (service) */
export type ServiceRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Services (service) */
export type ServiceRecord_AllSeoLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Services (service) */
export type ServiceRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Services (service) */
export type ServiceRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Services (service) */
export type ServiceRecordAbstractArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Services (service) */
export type ServiceRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Services (service) */
export type ServiceRecordHighlightArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Services (service) */
export type ServiceRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Services (service) */
export type ServiceRecordSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Services (service) */
export type ServiceRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  en = 'en',
  it = 'it'
}

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']['output']>;
};

/** Block of type 📊 Table Block (table_block) */
export type TableBlockRecord = RecordInterface & {
  __typename?: 'TableBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  hasHeaderColumn?: Maybe<Scalars['BooleanType']['output']>;
  hasHeaderRow?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  table?: Maybe<Scalars['JsonField']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 📊 Table Block (table_block) */
export type TableBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

export type TextBlockModelTextBlocksField = ActionBlockRecord | ImageBlockRecord | TableBlockRecord | VideoBlockRecord | VideoEmbedBlockRecord;

export type TextBlockModelTextField = {
  __typename?: 'TextBlockModelTextField';
  blocks: Array<TextBlockModelTextBlocksField>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<TextBlockModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type TextBlockModelTextLinksField = FileRecord | HomePageRecord | PageRecord;

/** Block of type 📝 Text Block (text_block) */
export type TextBlockRecord = RecordInterface & {
  __typename?: 'TextBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  text?: Maybe<TextBlockModelTextField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 📝 Text Block (text_block) */
export type TextBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type TextImageBlockModelTextBlocksField = ActionBlockRecord | ImageBlockRecord | TableBlockRecord | VideoEmbedBlockRecord;

export type TextImageBlockModelTextField = {
  __typename?: 'TextImageBlockModelTextField';
  blocks: Array<TextImageBlockModelTextBlocksField>;
  inlineBlocks: Array<Scalars['String']['output']>;
  links: Array<TextImageBlockModelTextLinksField>;
  value: Scalars['JsonField']['output'];
};

export type TextImageBlockModelTextLinksField = FileRecord | HomePageRecord | PageRecord;

/** Block of type 📝 🖼️ Text Image Block (text_image_block) */
export type TextImageBlockRecord = RecordInterface & {
  __typename?: 'TextImageBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image?: Maybe<FileField>;
  layout?: Maybe<Scalars['String']['output']>;
  text?: Maybe<TextImageBlockModelTextField>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type 📝 🖼️ Text Image Block (text_image_block) */
export type TextImageBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type TipModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TipModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TipModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  description?: InputMaybe<TextFilter>;
  expiryDate?: InputMaybe<DateFilter>;
  featuredImage?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  published?: InputMaybe<BooleanFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum TipModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  expiryDate_ASC = 'expiryDate_ASC',
  expiryDate_DESC = 'expiryDate_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  published_ASC = 'published_ASC',
  published_DESC = 'published_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Tips (tip) */
export type TipRecord = RecordInterface & {
  __typename?: 'TipRecord';
  _allDescriptionLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allPublishedLocales?: Maybe<Array<BooleanTypeMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allUrlLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  expiryDate?: Maybe<Scalars['Date']['output']>;
  featuredImage?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  published?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type Tips (tip) */
export type TipRecord_AllDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Tips (tip) */
export type TipRecord_AllPublishedLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tips (tip) */
export type TipRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tips (tip) */
export type TipRecord_AllUrlLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tips (tip) */
export type TipRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tips (tip) */
export type TipRecordDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Tips (tip) */
export type TipRecordPublishedArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tips (tip) */
export type TipRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tips (tip) */
export type TipRecordUrlArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type TranslationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TranslationModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TranslationModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  key?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  value?: InputMaybe<StringFilter>;
};

export enum TranslationModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  key_ASC = 'key_ASC',
  key_DESC = 'key_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  value_ASC = 'value_ASC',
  value_DESC = 'value_DESC'
}

/** Record of type 🌐 Translation (translation) */
export type TranslationRecord = RecordInterface & {
  __typename?: 'TranslationRecord';
  _allValueLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  value?: Maybe<Scalars['String']['output']>;
};


/** Record of type 🌐 Translation (translation) */
export type TranslationRecord_AllValueLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🌐 Translation (translation) */
export type TranslationRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type 🌐 Translation (translation) */
export type TranslationRecordValueArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Truth (truth) */
export type TruthRecord = RecordInterface & {
  __typename?: 'TruthRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Block of type Truth (truth) */
export type TruthRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Truth (truth) */
export type TruthRecordBodyArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TruthRecordListListNonNullMultiLocaleField = {
  __typename?: 'TruthRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<TruthRecord>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

export type UpModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<UpModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UpModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum UpModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Up (up) */
export type UpRecord = RecordInterface & {
  __typename?: 'UpRecord';
  _allNameLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allUrlLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['IntType']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};


/** Record of type Up (up) */
export type UpRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Up (up) */
export type UpRecord_AllUrlLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Up (up) */
export type UpRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Up (up) */
export type UpRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Up (up) */
export type UpRecordUrlArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

export enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
};


export type UploadVideoFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type UploadVideoFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


export type UploadVideoFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Block of type 🎬 Video Block (video_block) */
export type VideoBlockRecord = RecordInterface & {
  __typename?: 'VideoBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  autoplay?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  loop?: Maybe<Scalars['BooleanType']['output']>;
  mute?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  tracks: Array<VideoTextTrackRecord>;
  updatedAt: Scalars['DateTime']['output'];
  videoAsset?: Maybe<FileField>;
};


/** Block of type 🎬 Video Block (video_block) */
export type VideoBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🎬 Video Embed Block (video_embed_block) */
export type VideoEmbedBlockRecord = RecordInterface & {
  __typename?: 'VideoEmbedBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  autoplay?: Maybe<Scalars['BooleanType']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  loop?: Maybe<Scalars['BooleanType']['output']>;
  mute?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  video?: Maybe<VideoField>;
};


/** Block of type 🎬 Video Embed Block (video_embed_block) */
export type VideoEmbedBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType']['output'];
  provider: Scalars['String']['output'];
  providerUid: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

export enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

export type VideoTextTrackModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<VideoTextTrackModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VideoTextTrackModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  file?: InputMaybe<FileFilter>;
  id?: InputMaybe<ItemIdFilter>;
  kind?: InputMaybe<StringFilter>;
  locale?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

export enum VideoTextTrackModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  kind_ASC = 'kind_ASC',
  kind_DESC = 'kind_DESC',
  locale_ASC = 'locale_ASC',
  locale_DESC = 'locale_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type 🔡 Video Text Track (video_text_track) */
export type VideoTextTrackRecord = RecordInterface & {
  __typename?: 'VideoTextTrackRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt: Scalars['DateTime']['output'];
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt: Scalars['DateTime']['output'];
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  file?: Maybe<FileField>;
  id: Scalars['ItemId']['output'];
  kind?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** Record of type 🔡 Video Text Track (video_text_track) */
export type VideoTextTrackRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

export type AllLocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLocalesQuery = { __typename?: 'Query', _site: { __typename?: 'Site', locales: Array<SiteLocale> } };

export type ApartmentBaseFragment = { __typename?: 'ApartmentRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, claim?: string | null, highlight?: string | null, price?: string | null, bedrooms?: number | null, bathrooms?: number | null, sleeps?: number | null, acaciaReward?: boolean | null, published?: boolean | null, position?: number | null, beddyId?: string | null, boxImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, featuredImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, category?: { __typename?: 'ApartmentCategoryRecord', id: string, name?: string | null, slug?: string | null } | null, district?: { __typename?: 'DistrictsRecord', id: string, name?: string | null, slug?: string | null } | null };

export type GetAllApartmentsQueryVariables = Exact<{
  locale: SiteLocale;
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type GetAllApartmentsQuery = { __typename?: 'Query', allApartments: Array<{ __typename?: 'ApartmentRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, claim?: string | null, highlight?: string | null, price?: string | null, bedrooms?: number | null, bathrooms?: number | null, sleeps?: number | null, acaciaReward?: boolean | null, published?: boolean | null, position?: number | null, beddyId?: string | null, boxImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, featuredImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, category?: { __typename?: 'ApartmentCategoryRecord', id: string, name?: string | null, slug?: string | null } | null, district?: { __typename?: 'DistrictsRecord', id: string, name?: string | null, slug?: string | null } | null }> };

export type GetApartmentBySlugQueryVariables = Exact<{
  locale: SiteLocale;
  slug: Scalars['String']['input'];
}>;


export type GetApartmentBySlugQuery = { __typename?: 'Query', apartment?: { __typename?: 'ApartmentRecord', cin?: string | null, id: string, name?: string | null, slug?: string | null, description?: string | null, claim?: string | null, highlight?: string | null, price?: string | null, bedrooms?: number | null, bathrooms?: number | null, sleeps?: number | null, acaciaReward?: boolean | null, published?: boolean | null, position?: number | null, beddyId?: string | null, seo?: { __typename?: 'SeoField', title?: string | null, description?: string | null, image?: { __typename?: 'FileField', url: string } | null } | null, gallery: Array<{ __typename?: 'GalleryImagesRecord', id: string, image?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null }>, cuddles: Array<{ __typename?: 'CuddleRecord', id: string, name?: string | null, url?: string | null }>, ups: Array<{ __typename?: 'UpRecord', id: string, name?: string | null, url?: string | null }>, homeTruth: Array<{ __typename?: 'TruthRecord', id: string, body?: string | null }>, boxImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, featuredImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, category?: { __typename?: 'ApartmentCategoryRecord', id: string, name?: string | null, slug?: string | null } | null, district?: { __typename?: 'DistrictsRecord', id: string, name?: string | null, slug?: string | null } | null } | null };

export type PostBaseFragment = { __typename?: 'PostRecord', id: string, title?: string | null, slug?: string | null, abstract?: string | null, publishedAt?: string | null, published?: boolean | null, featuredImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, category?: { __typename?: 'BlogCategoryRecord', id: string, name?: string | null, slug?: string | null } | null };

export type GetAllPostsQueryVariables = Exact<{
  locale: SiteLocale;
  first?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type GetAllPostsQuery = { __typename?: 'Query', allPosts: Array<{ __typename?: 'PostRecord', id: string, title?: string | null, slug?: string | null, abstract?: string | null, publishedAt?: string | null, published?: boolean | null, featuredImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, category?: { __typename?: 'BlogCategoryRecord', id: string, name?: string | null, slug?: string | null } | null }> };

export type GetPostBySlugQueryVariables = Exact<{
  locale: SiteLocale;
  slug: Scalars['String']['input'];
}>;


export type GetPostBySlugQuery = { __typename?: 'Query', post?: { __typename?: 'PostRecord', id: string, title?: string | null, slug?: string | null, abstract?: string | null, publishedAt?: string | null, published?: boolean | null, seo?: { __typename?: 'SeoField', title?: string | null, description?: string | null, image?: { __typename?: 'FileField', url: string } | null } | null, featuredImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, category?: { __typename?: 'BlogCategoryRecord', id: string, name?: string | null, slug?: string | null } | null } | null };

export type GetAllBlogCategoriesQueryVariables = Exact<{
  locale: SiteLocale;
}>;


export type GetAllBlogCategoriesQuery = { __typename?: 'Query', allBlogCategories: Array<{ __typename?: 'BlogCategoryRecord', id: string, name?: string | null, slug?: string | null }> };

export type DistrictBaseFragment = { __typename?: 'DistrictsRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, abstract?: string | null };

export type GetAllDistrictsQueryVariables = Exact<{
  locale: SiteLocale;
}>;


export type GetAllDistrictsQuery = { __typename?: 'Query', allDistricts: Array<{ __typename?: 'DistrictsRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, abstract?: string | null }> };

export type GetDistrictBySlugQueryVariables = Exact<{
  locale: SiteLocale;
  slug: Scalars['String']['input'];
}>;


export type GetDistrictBySlugQuery = { __typename?: 'Query', districts?: { __typename?: 'DistrictsRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, abstract?: string | null, seo?: { __typename?: 'SeoField', title?: string | null, description?: string | null, image?: { __typename?: 'FileField', url: string } | null } | null } | null };

export type GetAllFaqsQueryVariables = Exact<{
  locale: SiteLocale;
}>;


export type GetAllFaqsQuery = { __typename?: 'Query', allFaqs: Array<{ __typename?: 'FaqRecord', id: string, question?: string | null, answer?: string | null, position?: number | null }>, pageFaq?: { __typename?: 'PageFaqRecord', id: string, title?: string | null, seo?: { __typename?: 'SeoField', title?: string | null, description?: string | null, image?: { __typename?: 'FileField', url: string } | null } | null } | null };

export type GetHomePageOriginalQueryVariables = Exact<{
  locale: SiteLocale;
}>;


export type GetHomePageOriginalQuery = { __typename?: 'Query', homePageOriginal?: { __typename?: 'HomePageOriginalRecord', id: string, title?: string | null, claim?: string | null, stayText?: string | null, doText?: string | null, moodsTitle?: string | null, beddyId?: string | null, promoTitle?: string | null, ctaText?: string | null, ctaLabel?: string | null, ctaImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: number, height: number, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null, ctaLink?: { __typename: 'DistrictsRecord' } | { __typename: 'MoodRecord' } | { __typename: 'OfferRecord' } | { __typename: 'PostRecord' } | { __typename: 'ServiceRecord' } | null, moods: Array<{ __typename?: 'MoodRecord', id: string, name?: string | null, slug?: string | null, claim?: string | null, image?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: number, height: number, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null }>, promo: Array<{ __typename?: 'PromoApartmentRecord', id: string, description?: string | null, foto?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: number, height: number, alt?: string | null, title?: string | null, base64?: string | null, sizes: string } | null } | null, apartment?: { __typename?: 'ApartmentRecord', id: string, name?: string | null, slug?: string | null } | null }>, seo?: { __typename?: 'SeoField', title?: string | null, description?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', url: string } | null } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }> } | null };

export type SeoMetaTagsFragment = { __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string };

export type GetHomePageQueryVariables = Exact<{
  locale: SiteLocale;
}>;


export type GetHomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageRecord', id: string, title?: string | null, seo?: { __typename?: 'SeoField', title?: string | null, description?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', url: string } | null } | null, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, moods: Array<{ __typename?: 'MoodRecord', id: string, name?: string | null, slug?: string | null }> } | null };

export type MoodBaseFragment = { __typename?: 'MoodRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, claim?: string | null, image?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null };

export type GetAllMoodsQueryVariables = Exact<{
  locale: SiteLocale;
}>;


export type GetAllMoodsQuery = { __typename?: 'Query', allMoods: Array<{ __typename?: 'MoodRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, claim?: string | null, image?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null }> };

export type GetMoodBySlugQueryVariables = Exact<{
  locale: SiteLocale;
  slug: Scalars['String']['input'];
}>;


export type GetMoodBySlugQuery = { __typename?: 'Query', mood?: { __typename?: 'MoodRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, claim?: string | null, seo?: { __typename?: 'SeoField', title?: string | null, description?: string | null, image?: { __typename?: 'FileField', url: string } | null } | null, boxes: Array<{ __typename: 'ApartmentRecord', id: string, name?: string | null, slug?: string | null, claim?: string | null, highlight?: string | null, price?: string | null, bedrooms?: number | null, bathrooms?: number | null, sleeps?: number | null, featuredImage?: { __typename?: 'FileField', url: string, alt?: string | null } | null, boxImage?: { __typename?: 'FileField', url: string, alt?: string | null } | null, district?: { __typename?: 'DistrictsRecord', name?: string | null, slug?: string | null } | null } | { __typename: 'DistrictsRecord', id: string, name?: string | null, slug?: string | null, abstract?: string | null, gallery: Array<{ __typename?: 'GalleryImagesRecord', image?: { __typename?: 'FileField', url: string, alt?: string | null } | null }> }>, image?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null } | null };

export type GetNavigationDataQueryVariables = Exact<{
  locale: SiteLocale;
}>;


export type GetNavigationDataQuery = { __typename?: 'Query', apartmentsPage?: { __typename?: 'ApartmentsPageRecord', id: string, title?: string | null } | null, pageDistricts?: { __typename?: 'PageDistrictsRecord', id: string, title?: string | null } | null, pageServices?: { __typename?: 'PageServicesRecord', id: string, title?: string | null } | null, pageMoods?: { __typename?: 'PageMoodsRecord', id: string, title?: string | null } | null, pageEvent?: { __typename?: 'PageEventRecord', id: string, title?: string | null } | null, pageBlog?: { __typename?: 'PageBlogRecord', id: string, title?: string | null } | null, pageGuestbook?: { __typename?: 'PageGuestbookRecord', id: string, title?: string | null } | null, pageFaq?: { __typename?: 'PageFaqRecord', id: string, title?: string | null } | null, pageOffers?: { __typename?: 'PageOffersRecord', id: string, title?: string | null } | null };

export type GetAllPagesQueryVariables = Exact<{
  locale: SiteLocale;
}>;


export type GetAllPagesQuery = { __typename?: 'Query', allPages: Array<{ __typename?: 'PageRecord', id: string, title?: string | null, slug?: string | null, seo?: { __typename?: 'SeoField', title?: string | null, description?: string | null } | null }> };

export type GetAllRedirectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRedirectsQuery = { __typename?: 'Query', allRedirects: Array<{ __typename?: 'RedirectRecord', id: string, originalUrl?: string | null, destinationUrl?: string | null, codiceRedirect?: string | null }> };

export type ServiceBaseFragment = { __typename?: 'ServiceRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, abstract?: string | null, featuredImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, category?: { __typename?: 'ServiceCategoriesRecord', id: string, name?: string | null, slug?: string | null } | null };

export type GetAllServicesQueryVariables = Exact<{
  locale: SiteLocale;
}>;


export type GetAllServicesQuery = { __typename?: 'Query', allServices: Array<{ __typename?: 'ServiceRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, abstract?: string | null, featuredImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, category?: { __typename?: 'ServiceCategoriesRecord', id: string, name?: string | null, slug?: string | null } | null }> };

export type GetServiceBySlugQueryVariables = Exact<{
  locale: SiteLocale;
  slug: Scalars['String']['input'];
}>;


export type GetServiceBySlugQuery = { __typename?: 'Query', service?: { __typename?: 'ServiceRecord', id: string, name?: string | null, slug?: string | null, description?: string | null, abstract?: string | null, seo?: { __typename?: 'SeoField', title?: string | null, description?: string | null, image?: { __typename?: 'FileField', url: string } | null } | null, featuredImage?: { __typename?: 'FileField', url: string, alt?: string | null, title?: string | null } | null, category?: { __typename?: 'ServiceCategoriesRecord', id: string, name?: string | null, slug?: string | null } | null } | null };

export type GetAllServiceCategoriesQueryVariables = Exact<{
  locale: SiteLocale;
}>;


export type GetAllServiceCategoriesQuery = { __typename?: 'Query', allServiceCategories: Array<{ __typename?: 'ServiceCategoriesRecord', id: string, name?: string | null, slug?: string | null }> };

export const ApartmentBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ApartmentBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApartmentRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"claim"}},{"kind":"Field","name":{"kind":"Name","value":"highlight"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"sleeps"}},{"kind":"Field","name":{"kind":"Name","value":"acaciaReward"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"beddyId"}},{"kind":"Field","name":{"kind":"Name","value":"boxImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"district"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<ApartmentBaseFragment, unknown>;
export const PostBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<PostBaseFragment, unknown>;
export const DistrictBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DistrictBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DistrictsRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}}]}}]} as unknown as DocumentNode<DistrictBaseFragment, unknown>;
export const SeoMetaTagsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SeoMetaTags"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]} as unknown as DocumentNode<SeoMetaTagsFragment, unknown>;
export const MoodBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MoodBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MoodRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"claim"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<MoodBaseFragment, unknown>;
export const ServiceBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<ServiceBaseFragment, unknown>;
export const AllLocalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_site"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locales"}}]}}]}}]} as unknown as DocumentNode<AllLocalesQuery, AllLocalesQueryVariables>;
export const GetAllApartmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllApartments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allApartments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"position_ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ApartmentBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ApartmentBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApartmentRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"claim"}},{"kind":"Field","name":{"kind":"Name","value":"highlight"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"sleeps"}},{"kind":"Field","name":{"kind":"Name","value":"acaciaReward"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"beddyId"}},{"kind":"Field","name":{"kind":"Name","value":"boxImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"district"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetAllApartmentsQuery, GetAllApartmentsQueryVariables>;
export const GetApartmentBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetApartmentBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apartment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ApartmentBase"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cuddles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"homeTruth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cin"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ApartmentBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApartmentRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"claim"}},{"kind":"Field","name":{"kind":"Name","value":"highlight"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"sleeps"}},{"kind":"Field","name":{"kind":"Name","value":"acaciaReward"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"beddyId"}},{"kind":"Field","name":{"kind":"Name","value":"boxImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"district"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetApartmentBySlugQuery, GetApartmentBySlugQueryVariables>;
export const GetAllPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"publishedAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetPostBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPostBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostBase"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetPostBySlugQuery, GetPostBySlugQueryVariables>;
export const GetAllBlogCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllBlogCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allBlogCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetAllBlogCategoriesQuery, GetAllBlogCategoriesQueryVariables>;
export const GetAllDistrictsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllDistricts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDistricts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"position_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DistrictBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DistrictBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DistrictsRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}}]}}]} as unknown as DocumentNode<GetAllDistrictsQuery, GetAllDistrictsQueryVariables>;
export const GetDistrictBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDistrictBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"districts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DistrictBase"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DistrictBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DistrictsRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}}]}}]} as unknown as DocumentNode<GetDistrictBySlugQuery, GetDistrictBySlugQueryVariables>;
export const GetAllFaqsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllFaqs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFaqs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"position_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"position"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageFaq"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllFaqsQuery, GetAllFaqsQueryVariables>;
export const GetHomePageOriginalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomePageOriginal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePageOriginal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"claim"}},{"kind":"Field","name":{"kind":"Name","value":"stayText"}},{"kind":"Field","name":{"kind":"Name","value":"doText"}},{"kind":"Field","name":{"kind":"Name","value":"moodsTitle"}},{"kind":"Field","name":{"kind":"Name","value":"beddyId"}},{"kind":"Field","name":{"kind":"Name","value":"promoTitle"}},{"kind":"Field","name":{"kind":"Name","value":"ctaText"}},{"kind":"Field","name":{"kind":"Name","value":"ctaLabel"}},{"kind":"Field","name":{"kind":"Name","value":"ctaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"ctaLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"moods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"claim"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"promo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"foto"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"apartment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"twitterCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]}}]}}]} as unknown as DocumentNode<GetHomePageOriginalQuery, GetHomePageOriginalQueryVariables>;
export const GetHomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"twitterCard"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SeoMetaTags"}}]}},{"kind":"Field","name":{"kind":"Name","value":"moods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SeoMetaTags"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]} as unknown as DocumentNode<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetAllMoodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllMoods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allMoods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"position_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MoodBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MoodBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MoodRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"claim"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetAllMoodsQuery, GetAllMoodsQueryVariables>;
export const GetMoodBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMoodBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mood"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MoodBase"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"boxes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApartmentRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"claim"}},{"kind":"Field","name":{"kind":"Name","value":"highlight"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"sleeps"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"boxImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"district"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DistrictsRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"gallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MoodBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MoodRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"claim"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetMoodBySlugQuery, GetMoodBySlugQueryVariables>;
export const GetNavigationDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNavigationData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apartmentsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageDistricts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageServices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageMoods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageBlog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageGuestbook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageFaq"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageOffers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetNavigationDataQuery, GetNavigationDataQueryVariables>;
export const GetAllPagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPagesQuery, GetAllPagesQueryVariables>;
export const GetAllRedirectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllRedirects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRedirects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"destinationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"codiceRedirect"}}]}}]}}]} as unknown as DocumentNode<GetAllRedirectsQuery, GetAllRedirectsQueryVariables>;
export const GetAllServicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllServices"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allServices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"position_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetAllServicesQuery, GetAllServicesQueryVariables>;
export const GetServiceBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceBase"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ServiceRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetServiceBySlugQuery, GetServiceBySlugQueryVariables>;
export const GetAllServiceCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllServiceCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allServiceCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"position_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetAllServiceCategoriesQuery, GetAllServiceCategoriesQueryVariables>;