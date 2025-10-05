export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'testimonial',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      description: 'e.g., great experience',
    },
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
    },
  ],
};
