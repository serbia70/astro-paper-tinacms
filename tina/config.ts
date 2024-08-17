import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        fields: [
          // 作者
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true
          },
		  // 发布时间
          {
            type: 'datetime',
            name: 'pubDatetime',
            label: 'pubDatetime',
            required: true
          },
		  // 更新时间
          {
            type: 'datetime',
            name: 'modDatetime',
            label: 'modDatetime',
            required: false
          },
		  // 标题	
		  {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
		  // 精选
          {
            type: 'boolean',
            name: 'featured',
            label: 'featured',
            required: false
          },
		  // 草稿
		  {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
            required: false
          },         
		  // slug
		  {
			type: "string",
			name: "slug",
			label: "Slug",			
			required: true,			
		  },
		  // 标签
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            required: true,
            list: true,
            ui: {
              component: 'tags'
            }
          },
		  // 图像
		  {
            type: 'string',
            name: 'image',
            label: 'Image',
            required: false,
          },
		  // Description
		  {
            type: "string",
            name: "description",
            label: "Description",
          },		
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
