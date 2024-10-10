interface LookupResponseI {
  sid: string;
  status: string;
  message: string;
  code: string;
  offset: number;
  phone: string;
  results: number;
  time: number;
  scrubs: boolean;
}

export type { LookupResponseI };
