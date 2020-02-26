const counts = [
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk"
];

function processCounts(counts) {
  return counts.map(count => {
    const [hits, domain] = count.split(',');
    return {
      hits: parseInt(hits),
      domain,
    }
  });
}

// console.log(processCounts(counts));

function splitDomain(domain) {
  const domainLength = domain.length;
  const response = [domain];

  for (let i = domainLength - 1; i > -1; i--) {
    if (domain[i] === '.') {
      response.push(domain.substring(i + 1, domainLength));
    }
  }

  return response;
}

// console.log(splitDomain('a.b.c.d.e.f.g'));

function hitCounts(counts) {
  const aggregate = {};

  const processedCounts = processCounts(counts);

  processedCounts.forEach(count => {
    const {domain, hits} = count;
    const subdomains = splitDomain(domain);
    subdomains.forEach(subdomain => {
      const domainHits = aggregate[subdomain];
      aggregate[subdomain] = domainHits ? domainHits + hits : hits;
    });
  });

  return aggregate;
}

console.log(hitCounts(counts));
