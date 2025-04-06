import type { Schema, Struct } from '@strapi/strapi';

export interface OrderAddress extends Struct.ComponentSchema {
  collectionName: 'components_order_addresses';
  info: {
    description: 'Adresse de livraison ou facturation';
    displayName: 'Address';
  };
  attributes: {
    address_line1: Schema.Attribute.String & Schema.Attribute.Required;
    address_line2: Schema.Attribute.String;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    full_name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    postal_code: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProductBenefit extends Struct.ComponentSchema {
  collectionName: 'components_product_benefits';
  info: {
    displayName: 'benefit';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'order.address': OrderAddress;
      'product.benefit': ProductBenefit;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
