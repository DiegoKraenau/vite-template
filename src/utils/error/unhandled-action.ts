export const throwUnhandledActionError = (actionType: string): never => {
  throw new Error(`Unhandled action type: ${actionType}`);
};
