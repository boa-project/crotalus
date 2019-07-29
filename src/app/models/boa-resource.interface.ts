export interface BoaResource {
  manifest: BoaResourceManifest;
  metadata: BoaResourceMetadata;
  social: BoaResourceSocial;
  id: string;
  about: string;
}

interface BoaResourceManifest {
  title: string;
  type: string;
  is_a: string;
  lastpublished: Date;
  entrypoint: string;
  alternate: string[];
  customicon: string;
}

interface BoaResourceMetadata {
  general: {
    title: {
      none: string;
    };
    identifier: any[];
    language: string[];
    description: {
      none: string;
    };
    keywords: {
      none: string[];
    };
  };
  lifecycle: {
    contribution: Contribution[];
  };
  technical: {
    format: string;
    location: string;
  };
  rights: {
    cost: string;
    copyright: string;
    description: {
      none: string;
    };
  };
  annotation: any[];
}

interface Contribution {
  entity: {
    name: string;
    lastname: string;
    company: string;
    email: string;
  };
  rol: string;
  date: Date;
}

interface BoaResourceSocial {
  views: number;
  score: any[];
  comments: number;
}