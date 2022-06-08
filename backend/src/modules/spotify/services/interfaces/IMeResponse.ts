import { IImage } from "./IImage";

interface IMeResponse {
  display_name: string;
  external_urls: { spotify: string };
  country: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: IImage[];
  product: string;
  type: "user";
  uri: string;
}

export { IMeResponse };
