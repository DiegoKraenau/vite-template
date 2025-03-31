/**
 * This is a workaround to support import.meta
 */
const meta = {
  get env(): ImportMetaEnv {
    return import.meta.env;
  },
};

export default meta;
