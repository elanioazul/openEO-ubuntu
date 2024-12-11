import {OpenEO, Formula} from '@openeo/js-client';
import * as passport from 'passport'
import { Strategy as OpenIDConnectStrategy } from 'passport-openid';
import { Connection, AuthProvider, OidcProvider  } from "@openeo/js-client";



// const getConfiguredPassport = async () => {

//     // Part 3a, discover Curity Server metadata and configure the OIDC client
//     const client = await passport.discoverAndCreateClient({
//         issuerUrl: 'https://idsvr.example.com/oauth/v2/oauth-anonymous',
//         clientID: "demo-client",
//         clientSecret: "Secr3t",
//         redirectUris: ["http://localhost:3000/callback"]
//     });

//     // Part 3b, configure the passport strategy
//     const strategy = new passport.Strategy({
//         client,
//         params: {
//             scope: "openid profile"
//         }
//     }, function(accessToken, refreshToken, profile, cb) {
//         return cb(null, { profile });
//     });

//     // Part 3c, tell passport to use the strategy
//     passport.use(strategy);

//     // Part 3d, tell passport how to serialize and deserialize user data
//     passport.serializeUser((user, done) => {
//         done(null, user);
//     });

//     passport.deserializeUser((user, done) => {
//         done(null, user);
//     });

//     return passport;
// };

// async function authenticateWithOIDC() {
//   try {
//     // Define backend URL
//     const backendUrl = "https://openeo.cloud"; // Replace with your specific backend URL

//     // Connect to the backend
//     const connection = await OpenEO.connect(backendUrl);
//     console.log("Connected to openEO backend");

//     // Create an AuthProvider instance
//     //const authProvider = connection.getAuthProvider();
//     const authProvider = new AuthProvider('oidc', connection, { } );
    
//     // Configure AuthProvider for OIDC
//     if (authProvider.supportsOIDC()) {
//       const oidcProviders = await authProvider.getOIDCProviders();

//       console.log("Available OIDC Providers:", oidcProviders);

//       // Select an OIDC provider (choose one, if multiple are available)
//       const providerId = oidcProviders[0].id; // Replace with desired provider ID

//       console.log(`Using OIDC Provider: ${providerId}`);

//       // Perform OIDC authentication
//       await authProvider.authenticateOIDC({
//         provider_id: providerId,
//         client_id: "your_client_id", // Replace with your client ID
//         client_secret: "your_client_secret", // Replace with your client secret
//         scopes: "openid profile email", // Adjust scopes if necessary
//       });

//       console.log("Authenticated successfully with OIDC");
//     } else {
//       console.log("OIDC is not supported by the backend");
//       return;
//     }

//     // Access the authenticated connection
//     console.log("Access Token:", authProvider.getAccessToken());

//     // Continue with the authenticated connection...
//     // For example, list available collections:
//     const collections = await connection.listCollections();
//     console.log("Available Collections:", collections);
//   } catch (error) {
//     console.error("Authentication error:", error);
//   }
// }

// authenticateWithOIDC();
