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
    title: "Introduce to Vue.js",
    content:
      "Vue.js is a progressive JavaScript framework designed for building dynamic user interfaces. It is praised for its simplicity and flexibility, making it suitable for projects ranging from small integrations to full-scale applications. The core idea of Vue is its reactive data binding and declarative rendering, which allow developers to focus on their application logic while Vue automatically handles the UI updates. One of Vue's standout features is its component-based architecture. Components encapsulate both the logic and presentation, promoting code reusability and modularity. By using Single File Components (.vue files), developers can combine HTML, CSS, and JavaScript in a single file, streamlining the development process and enhancing code organization. Vue also provides an ecosystem of tools, such as Vue Router for routing and Vuex for state management. These tools, combined with its efficient virtual DOM, make Vue.js an excellent choice for creating interactive and scalable applications. Its flexibility ensures seamless integration with other libraries and frameworks, offering developers the freedom to tailor solutions to their specific needs.",
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
