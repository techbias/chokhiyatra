export default {
  name: 'flightPartner',
  title: 'Flight Partners',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Airline Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'webCheckinUrl',
      title: 'Web Check-in URL',
      type: 'url',
    },
    {
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
};
