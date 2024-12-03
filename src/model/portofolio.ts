export interface Portofolio {
   id: number;
   documentId: string;
   Judul: string;
   Deskripsi: string;
   Link_Project?: string;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
   Gambar: Gambar;
}

export interface Gambar {
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
   medium: Medium;
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

export interface Medium {
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

export interface Meta {
   pagination: Pagination;
}

export interface Pagination {
   page: number;
   pageSize: number;
   pageCount: number;
   total: number;
}
