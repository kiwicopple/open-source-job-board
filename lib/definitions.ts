/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/countries": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.countries.id"];
          /** Full country name. */
          name?: parameters["rowFilter.countries.name"];
          /** ISO 3166-1 alpha-2 code. */
          iso2?: parameters["rowFilter.countries.iso2"];
          /** ISO 3166-1 alpha-3 code. */
          iso3?: parameters["rowFilter.countries.iso3"];
          /** Local variation of the name. */
          local_name?: parameters["rowFilter.countries.local_name"];
          continent?: parameters["rowFilter.countries.continent"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["countries"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** countries */
          countries?: definitions["countries"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.countries.id"];
          /** Full country name. */
          name?: parameters["rowFilter.countries.name"];
          /** ISO 3166-1 alpha-2 code. */
          iso2?: parameters["rowFilter.countries.iso2"];
          /** ISO 3166-1 alpha-3 code. */
          iso3?: parameters["rowFilter.countries.iso3"];
          /** Local variation of the name. */
          local_name?: parameters["rowFilter.countries.local_name"];
          continent?: parameters["rowFilter.countries.continent"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.countries.id"];
          /** Full country name. */
          name?: parameters["rowFilter.countries.name"];
          /** ISO 3166-1 alpha-2 code. */
          iso2?: parameters["rowFilter.countries.iso2"];
          /** ISO 3166-1 alpha-3 code. */
          iso3?: parameters["rowFilter.countries.iso3"];
          /** Local variation of the name. */
          local_name?: parameters["rowFilter.countries.local_name"];
          continent?: parameters["rowFilter.countries.continent"];
        };
        body: {
          /** countries */
          countries?: definitions["countries"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  countries: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Full country name. */
    name?: string;
    /** ISO 3166-1 alpha-2 code. */
    iso2: string;
    /** ISO 3166-1 alpha-3 code. */
    iso3?: string;
    /** Local variation of the name. */
    local_name?: string;
    continent?:
      | "Africa"
      | "Antarctica"
      | "Asia"
      | "Europe"
      | "Oceania"
      | "North America"
      | "South America";
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** countries */
  "body.countries": definitions["countries"];
  "rowFilter.countries.id": string;
  /** Full country name. */
  "rowFilter.countries.name": string;
  /** ISO 3166-1 alpha-2 code. */
  "rowFilter.countries.iso2": string;
  /** ISO 3166-1 alpha-3 code. */
  "rowFilter.countries.iso3": string;
  /** Local variation of the name. */
  "rowFilter.countries.local_name": string;
  "rowFilter.countries.continent": string;
}

export interface operations {}

export interface external {}
