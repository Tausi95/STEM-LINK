const redis = require('redis');
const client = redis.createClient({ host: 'localhost', port: 6379 });

client.on('connect', () => {
  console.log('Connected to Redis...');
});

// cache data with expiration (in seconds)
const setCache = (key, value, expiry = 3600) => {
  client.setex(key, expiry, JSON.stringify(value)); // Expiry set to 1 hour by default
};

// Get data
const getCache = (key, callback) => {
  client.get(key, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, JSON.parse(data));
    }
  });
};

// Delete 
const deleteCache = (key) => {
  client.del(key);
};

module.exports = { setCache, getCache, deleteCache };
