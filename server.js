/**
 * Module Dependencies
 */

var yoo = module.exports = require('yoo')(__dirname);

/**
 * Die
 */

 yoo.get('/uncaught/sync', function *(next) {
   throw new Error('sync error');
 });

 yoo.get('/uncaught/async', function *(next) {
   console.log('handling!');
   process.nextTick(function() {
     throw new Error('async error');
   });
 });

 yoo.get('/process/exit', function *(next) {
   process.exit();
 })

 yoo.get('/', function *(next) {
   console.log('getting /');
   this.body = 'I\'m alive!';
 })
