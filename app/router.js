import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('posts', function() {
    this.route('post' ,{path: ':post_id'});  //had {path: 'post_id'} which caused and error the : before post id tells Ember that part of the path is a dynamic segment
  });
});
