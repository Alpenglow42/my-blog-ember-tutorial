export default function(server) {
  server.createList('post',5); /* 5 here corresonds to number of lines
  posted if I changed it to 10 I would see 10 lines*/

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
