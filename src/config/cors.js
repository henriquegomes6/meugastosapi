export default function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type,Accept');
  
    if (req.method === 'OPTIONS') {
      res.send();
      return;
    }
  
    next();
}