--- 

## Setup ReactJs Project TypeScript

--- 

--- 

## Tác giả: 
Trần Bảo Linh

1. Github [https://github.com/baolinh-dev](https://github.com/baolinh-dev)
2. Facebook Profile: [Bảo Linh](https://www.facebook.com/linkdarealest)
---  

---   
### Cách chạy dự án: 
1. Cài đặt một react app bằng CRA
```
yarn create react-app . --template typescript
``` 
2. Cài đặt các plugin Prettier và ESlint cần thiết
```
yarn add -D prettier eslint-plugin-prettier eslint-config-prettier
``` 
3. Thêm script phục vụ việc check lỗi bằng prettier và eslint trong terminal vào file package.json
``` js
{
  "scripts": {
    "lint": "eslint --ext ts,tsx src/",
    "lint:fix": "eslint --fix --ext ts,tsx src/",
    "prettier": "prettier --check \"src/**/(*.tsx|*.ts|*.css|*.scss)\"",
    "prettier:fix": "prettier --write \"src/**/(*.tsx|*.ts|*.css|*.scss)\""
  }
}
```  
4. Tạo file `.editorconfig`
```
[*]
indent_size = 2
indent_style = space
```  
5. Tạo file `.prettierrc`
``` js
{
  "arrowParens": "always",
  "semi": false,
  "trailingComma": "none",
  "tabWidth": 2,
  "endOfLine": "auto",
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120,
  "jsxSingleQuote": true
}
```  
6. Tạo file `.eslintrc`
``` js
{
  "extends": ["react-app", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "warn",
      {
        "arrowParens": "always",
        "semi": false,
        "trailingComma": "none",
        "tabWidth": 2,
        "endOfLine": "auto",
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
      }
    ]
  }
}
```  
7. Thêm cấu hình `.baseUrl` trong file `.tsconfig.json` 
8. Cài đặt Tailwindcss cho React 
```
yarn add -D tailwindcss postcss autoprefixer
```  
Sau khi cài xong thì tiến hành khởi tạo file tailwindcss config 
```
npx tailwindcss init -p
```   
8. Sữa `tailwind.config.js` 
``` js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
```   
9. Sữa `index.css` 
``` js
@tailwind base;
@tailwind components;
@tailwind utilities;
``` 
10. Thêm plugin sắp xếp các class cho tailwindcss
``` 
yarn add -D prettier-plugin-tailwindcss
``` 
--- 