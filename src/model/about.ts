export interface About {
   data: Data;
}

export interface Data {
   id: number;
   documentId: string;
   isi_tentang_saya: string;
   tentang_saya_singkat: string;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
   foto_profile: FotoProfile;
   cv: Cv;
}

export interface FotoProfile {
   id: number;
   documentId: string;
   name: string;
   alternativeText: any;
   caption: any;
   width: number;
   height: number;
   formats: Formats;
   hash: string;
   ext: string;
   mime: string;
   size: number;
   url: string;
   previewUrl: any;
   provider: string;
   provider_metadata: any;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
}

export interface Formats {
   small: Small;
   thumbnail: Thumbnail;
}

export interface Small {
   ext: string;
   url: string;
   hash: string;
   mime: string;
   name: string;
   path: any;
   size: number;
   width: number;
   height: number;
   sizeInBytes: number;
}

export interface Thumbnail {
   ext: string;
   url: string;
   hash: string;
   mime: string;
   name: string;
   path: any;
   size: number;
   width: number;
   height: number;
   sizeInBytes: number;
}

export interface Cv {
   id: number;
   documentId: string;
   name: string;
   alternativeText: any;
   caption: any;
   width: any;
   height: any;
   formats: any;
   hash: string;
   ext: string;
   mime: string;
   size: number;
   url: string;
   previewUrl: any;
   provider: string;
   provider_metadata: any;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
}
