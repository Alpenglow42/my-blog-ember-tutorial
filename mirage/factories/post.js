import { Factory } from 'ember-cli-mirage';
import faker from 'faker'; /* faker js imports fake data to use https://github.com/marak/Faker.js/ */

export default Factory.extend({
    title() {
        return faker.lorem.sentence();
      },
    
      body() {
        return faker.lorem.paragraph();
      },
    
      publishedAt() {
        return faker.date.past();
      }
      
});
