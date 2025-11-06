// src/lib/query.ts

// 📰 All Blogs List (with Category Included)
export const allBlogsQuery = `
*[_type == "post"] | order(publishedAt desc){
  title,
  slug,
  excerpt,
  coverImage{
    asset->{
      _id,
      url
    },
    alt
  },
  publishedAt,
  author->{
    name,
    verified,
    avatar{
      asset->{
        _id,
        url
      }
    }
  },
  category->{
    title
  }
}
`;

// 📝 Single Blog (with FAQs included)
export const singleBlogQuery = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  excerpt,
  publishedAt,
  faqs[]{             // ✅ FAQs added
    question,
    answer[]           // rich text blocks
  },
  author->{
    name,
    verified,
    avatar{
      asset->{
        _id,
        url
      }
    }
  },
  coverImage{
    asset->{
      _id,
      url
    },
    alt
  },
  body[] {
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        url
      }
    }
  }
}
`;
