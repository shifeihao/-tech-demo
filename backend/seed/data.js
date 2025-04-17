export const defaultUser = {
  username: "testuser",
  password: "123456",
};

export const defaultNotes = [
  {
    title: "Welcome to use thie notebook!",
    content:
      "Vue uses Proxy to implement responsive tracking, intercepting the reading and setting behavior of objects. Once the data changes, the binding to the DOM will be automatically updated. This method is more powerful and flexible than Object.defineProperty.In Vue 3, the responsive system is the core of the entire Composition API, which is particularly suitable for building maintainable large-scale front-end projects.🎉",
  },
  {
    title: "Vue + Express 很强大！",
    content:
      "中间件是 Express 中最核心的设计之一。所有请求都会按顺序经过中间件处理，可以做日志、权限、解析 JSON 等操作。中间件函数签名为 (req, res, next)，如果你忘了调用 next()，请求就会卡住。掌握这一点，是写出可维护 API 的关键。",
  },
  {
    title: "Vue + Express is powerful!",
    content:
      "MongoDB is a document-based database, and its strongest advantage is flexibility: there is no mandatory schema. However, it is recommended to use Mongoose to design the schema in the project to ensure data consistency. It is recommended to use ObjectId to associate users and notes, and use ref plus populate() to perform joint queries like a relational database, which is very elegant.",
  },
  {
    title: "Feeling of using these tech stacks",
    content:
      "To be honest, when I first came into contact with MongoDB, I was confused. Starting the service, specifying the dbpath, connecting to Compass... a bunch of operations looked complicated, but once it runs successfully, you will find that it is much lighter than a relational database. After using it for a few days, I even began to like its document-style storage format, which is especially suitable for flexible structured projects such as taking notes!",
  },
];
