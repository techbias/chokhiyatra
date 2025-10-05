export default {
  name: 'brand',
  title: 'Brands',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Brand Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo (Default)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'hoverLogo',
      title: 'Logo (Hover)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
};
