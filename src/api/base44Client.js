// Standalone stub — replaces the Base44 SDK client so the app makes zero
// external API calls. The platform-managed auth files still import `base44`
// from here, but every method resolves locally and instantly.
const noop = () => {};
const resolveEmpty = () => Promise.resolve({});
const resolveNull = () => Promise.resolve(null);

const makeProxy = () =>
  new Proxy({}, {
    get: () => (...args) => {
      const last = args[args.length - 1];
      // If the last arg is an object with a `file` (binary upload), resolve with a fake url.
      if (last && typeof last === "object" && "file" in last) {
        return Promise.resolve({ file_url: "", file_uri: "" });
      }
      return Promise.resolve({});
    }
  });

export const base44 = {
  app: { getPublicSettings: resolveEmpty },
  auth: {
    me: resolveNull,
    isAuthenticated: () => Promise.resolve(false),
    logout: noop,
    redirectToLogin: noop,
    updateMe: resolveEmpty,
  },
  users: { inviteUser: resolveEmpty },
  analytics: { track: noop },
  entities: makeProxy(),
  integrations: { Core: makeProxy() },
  asServiceRole: { integrations: { Core: makeProxy() }, connectors: { getConnection: resolveNull } },
};