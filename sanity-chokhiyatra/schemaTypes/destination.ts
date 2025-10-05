export default {
  name: 'destination',
  title: 'Destinations/Countries',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Destination Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'region',
      title: 'Region/City',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Destination Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show in main destination selector',
      initialValue: true,
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    },
    {
      name: 'listingCount',
      title: 'Number of Listings',
      type: 'number',
      description: 'Number of tour packages/listings for this destination',
      initialValue: 0,
    },
    {
      name: 'showInPopular',
      title: 'Show in Popular Destinations',
      type: 'boolean',
      description: 'Display in the Popular Destinations section on homepage',
      initialValue: false,
    },
    {
      name: 'destinationNumber',
      title: 'Destination Number',
      type: 'string',
      description: 'e.g., "01", "02", "03" for display purposes',
    },
  ],
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrderAsc',
      by: [
        {field: 'sortOrder', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    }
  ]
};
