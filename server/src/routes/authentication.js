let routes = async (fastify, options) => {
  // fastify.get('/signup', async function (req, res) {
  //     const token = fastify.jwt.sign({payload})
  //     reply.send({token})
  // })

  fastify.route({
    method: "POST",
    url: "/register",
    schema: {
      body: {
        type: "object",
        properties: {
          user: { type: "string" },
          password: { type: "string" }
        },
        required: ["user", "password"]
      }
    },
    handler: (req, reply) => {
      req.log.info("Creating new user");
      fastify.level.put(req.body.user, req.body.password, onPut);

      function onPut(err) {
        if (err) return reply.send(err);
        fastify.jwt.sign(req.body, onToken);
      }

      function onToken(err, token) {
        if (err) return reply.send(err);
        req.log.info("User created");
        fastify.tokenWhitelist.push(token);
        reply.send({ token });
      }
    }
  });

  fastify.route({
    method: "POST",
    url: "/login",
    schema: {
      body: {
        type: "object",
        properties: {
          user: { type: "string" },
          password: { type: "string" }
        },
        required: ["user", "password"]
      }
    },
    handler: (req, reply) => {
      req.log.info("Logging in user");
      fastify.level.get(req.body.user, onUser);

      function onUser(err, password) {
        if (err) {
          if (err.notFound) {
            // prettier-ignore
            reply.send({
              "Error": "Password not Found",
              "ErrorCode": "501"
            });
          }
          // prettier-ignore
          reply.send({
            "Error": "Password Error",
            "ErrorCode": "500"
          });
        }

        if (!password || password !== req.body.password) {
          // prettier-ignore
          reply.send({
            "Error": "Password not Valid",
            "ErrorCode": "502"
          });
        }
        // prettier-ignore
        onPut();
      }

      function onPut(err) {
        if (err) return reply.send(err);
        fastify.jwt.sign(req.body, onToken);
      }

      function onToken(err, token) {
        if (err) return reply.send(err);
        req.log.info("User Logged In");
        req.log.info("////////// Token Library ///////");
        req.log.info(fastify.tokenWhitelist);
        req.log.info("////////// Token Library End ///////");
        fastify.tokenWhitelist.push(addUserToken(token));
        req.log.info("////////// Token Library ///////");
        req.log.info(fastify.tokenWhitelist);
        req.log.info("////////// Token Library End ///////");
        reply.send({
          token,
          profile: getUserProfile(req.body.user)
        });
      }
    }
  });

  fastify.route({
    method: "GET",
    url: "/logout",
    handler: (req, reply) => {
      if (req.headers.auth) {
        req.log.info("////////// Logout Token Library ///////");
        req.log.info(fastify.tokenWhitelist);
        req.log.info("////////// Token Library End ///////");
        removeUserToken(req.headers.auth);
        req.log.info("////////// Logout Token Library ///////");
        req.log.info(fastify.tokenWhitelist);
        req.log.info("////////// Token Library End ///////");
      }
      // prettier-ignore
      reply.send({
        "Message": "User Logged Out"
      });
    }
  });

  fastify.route({
    method: "GET",
    url: "/no-auth",
    handler: (req, reply) => {
      req.log.info("Auth free route");
      reply.send({ hello: "world" });
    }
  });

  fastify.route({
    method: "GET",
    url: "/auth",
    preHandler: fastify.auth([fastify.verifyJWTandLevel]),
    handler: (req, reply) => {
      req.log.info("Auth route");
      reply.send({ hello: "world" });
    }
  });
};

let getUserProfile = username => {
  let profileData = {
    Name: "Steve Watson",
    username
  };
  return profileData;
};

let setUserProfile = (username, profile) => {};

// prettier-ignore
let addUserToken = token => {
  return {
    token
    // "Expires": fastify.addMinutes(new Date(), 15)
  };
};
let removeUserToken = token => {
  for (let i = 0; i < fastify.tokenWhitelist.length; i++) {
    if (fastify.tokenWhitelist[i]["token"] === token) {
      fastify.tokenWhitelist.splice(i, 1);
    }
  }
};

module.exports = routes;
