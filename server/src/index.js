const Fastify = require("fastify");
const Mongoose = require("mongoose");
//const MONGO_URI = "mongodb://stevo:L0uisatoni@localhost:27017/dreamspace";
const MONGO_URI = "mongodb://localhost:27017/dreamspace";

function build(opts) {
  const fastify = Fastify(opts);

  fastify
    .register(require("fastify-jwt"), {
      secret: "superdupersecretsquirrel...booya"
    })
    .register(require("fastify-leveldb"), { name: "authdb-async" })
    .register(require("fastify-auth"))
    .register(require("fastify-cors"), { origin: true })
    .after(routes);

  fastify.decorate(
    "MongoDB",
    Mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  );
  fastify.decorate("tokenWhitelist", []);
  fastify.decorate("compareDate", require("date-fns/compareAsc"));
  fastify.decorate("addMinutes", require("date-fns/addMinutes"));
  fastify.decorate("verifyJWTandLevel", verifyJWTandLevel);
  fastify.decorate("verifyUserAndPassword", verifyUserAndPassword);

  function verifyJWTandLevel(request, reply) {
    const jwt = this.jwt;
    const level = this.level;

    if (request.body && request.body.failureWithReply) {
      reply.code(401).send({ error: "Unauthorized" });
      return Promise.reject(new Error());
    }

    if (!request.req.headers.auth) {
      return Promise.reject(new Error("Missing token header"));
    }

    return new Promise(function(resolve, reject) {
      jwt.verify(request.req.headers.auth, function(err, decoded) {
        if (err) {
          return reject(err);
        }

        request.log.info(`Token: ${request.req.headers.auth}`);
        let t = tokenSearch(request.req.headers.auth);
        request.log.info("////////// Token Library ///////");
        request.log.info(fastify.tokenWhitelist);
        request.log.info(t);
        request.log.info("////////// Token Library End ///////");
        if (t != undefined) {
          if (tokenValid(t) < 0) {
            resolve(decoded);
          } else {
            return reject(new Error("Token Expired"));
          }
        } else {
          return reject(new Error("Unathorised"));
        }
      });
    })
      .then(function(decoded) {
        return level.get(decoded.user).then(function(password) {
          if (!password || password !== decoded.password) {
            throw new Error("Token not valid level");
          }
        });
      })
      .catch(function(error) {
        request.log.error(error);
        throw new Error("General Error");
      });
  }

  function verifyUserAndPassword(request, reply, done) {
    const level = this.level;

    level.get(request.body.user, onUser);

    function onUser(err, password) {
      if (err) {
        if (err.notFound) {
          return done(new Error("Password not valid"));
        }
        return done(err);
      }

      if (!password || password !== request.body.password) {
        return done(new Error("Password not valid"));
      }

      done();
    }
  }

  function routes() {
    fastify.register(require("./routes/authentication"));
    fastify.register(require("./routes/general"));
    fastify.register(require("./routes/blog"));
    fastify.register(require("./routes/gaming"));
  }

  let tokenSearch = token =>
    fastify.tokenWhitelist.find(elem => {
      elem["token"] === token;
    });
  let tokenValid = token => fastify.compareDate(new Date(), token.Expires);

  return fastify;
}

//if (require.main === module) {
const fastify = build({
  logger: {
    level: "info"
  }
});
fastify.listen(4000, err => {
  if (err) throw err;
  console.log(
    `Server listenting at http://localhost:${fastify.server.address().port}`
  );
});
//}
