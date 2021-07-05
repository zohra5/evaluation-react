/**
 * Shows API.
 */

 const _ = require('lodash');
 const shows = require('./shows');
 
 function checkShow(show) {
   const title = show.title;
 
   return Boolean(title) && title.length <= 50
 }
 
 module.exports = function showsRouter(app) {
   let id = _.last(shows).id;
 
   app.get('/rest/shows', (req, res) => {
     console.info('GET /rest/shows');

     return res.status(200).json(shows);
   });
 
   app.get('/rest/shows/:id', (req, res) => {
     console.info(`GET /rest/shows/${req.params.id}`);
 
     const paramId = Number(req.params.id);
     const show = _.find(shows, s => s.id === paramId);
 
     if (!show) {
       return res.status(404).send();
     }
     return res.status(200).json(show);
   });
 
   app.post('/rest/shows', (req, res) => {
     console.info('POST /rest/shows');
     console.info('  => body: ', req.body);
 
     let body = req.body;
 
     if (!body || _.has(body, 'id') || !checkShow(body)) {
       return res.status(400).send();
     }
 
     id += 1;
     body.id = id;
     body = _.defaults(body, {
       seasons: 1,
       episodes: 1,
       genres: [],
       user: {
        favorited: false
       }
     });
 
     shows.push(body);
 
     return res.status(201).json(body);
   });
 
   app.put('/rest/shows/:id', (req, res) => {
     console.info(`PUT /rest/shows/${req.params.id}`);
     console.info('  => body: ', req.body);
 
     const body = req.body;
 
     if (!body || !checkShow(body)) {
       return res.status(400).send();
     }
 
     const paramId = Number(req.params.id);
     let show = _.find(shows, s => s.id === paramId);
 
     if (show) {
       _.extend(show, body);
       return res.status(200).json(show);
     }

     return res.status(404).send()
   });

   app.delete('/rest/shows/:id', (req, res) => {
     console.info(`DELETE /rest/shows/${req.params.id}`);

     const paramId = Number(req.params.id);
     const showIndex = _.findIndex(shows, s => s.id === paramId);

     if (showIndex === -1) return res.status(404).send()

     shows.splice(showIndex, 1)

     return res.status(200).json(shows)
   })
 };
 