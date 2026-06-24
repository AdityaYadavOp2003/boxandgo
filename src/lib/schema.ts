export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Box & Go Movers',
    alternateName: 'Box and Go Movers',
    description: 'India\'s trusted packers and movers providing safe, affordable & professional moving services including household shifting, office relocation, bike transportation, and warehousing across India.',
    url: 'https://boxandgomovers.in',
    telephone: '+919881343100',
    email: 'boxandgomovers@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Bandhan Celebration, Wathoda',
      addressLocality: 'Nagpur',
      addressRegion: 'Maharashtra',
      postalCode: '440035',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '21.1458',
      longitude: '79.0882',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00',
    },
    sameAs: [
      'https://www.facebook.com/share/1KwJ2hTqdR/',
      'https://www.instagram.com/boxandgo_movers',
      'https://www.linkedin.com/company/box-and-go-movers/',
    ],
    priceRange: '₹₹',
    areaServed: [
      { '@type': 'City', name: 'Nagpur' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Noida' },
    ],
  };
}

export function generateServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'MovingCompany',
      name: 'Box & Go Movers',
      telephone: '+919881343100',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: 'Moving Service',
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
