
  
  export interface Post {
    id: number
    documentId: string
    title: string
    short_description: string
    slug: string
    content: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    post_categories: PostCategory[]
    thumbnail: Thumbnail
  }
  
  export interface PostCategory {
    id: number
    documentId: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    category_name: string
    description: string
    slug: string
  }
  
  export interface Thumbnail {
    id: number
    documentId: string
    name: string
    alternativeText: any
    caption: any
    width: number
    height: number
    formats: Formats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: any
    provider: string
    provider_metadata: any
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  
  export interface Formats {
    large?: Large
    small: Small
    medium?: Medium
    thumbnail: Thumbnail2
  }
  
  export interface Large {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
  }
  
  export interface Small {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
  }
  
  export interface Medium {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
  }
  
  export interface Thumbnail2 {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: any
    size: number
    width: number
    height: number
    sizeInBytes: number
  }
  
  export interface Meta {
    pagination: Pagination
  }
  
  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  