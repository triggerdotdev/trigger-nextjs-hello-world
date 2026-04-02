import { logger, task, wait } from "@trigger.dev/sdk";

export const helloWorldTask = task({
  id: "hello-world",
  retry: {
    maxAttempts: 3,
  },
  run: async (payload: { message: string }) => {
    logger.info("Waiting for 10 seconds", { payload });

    await wait.for({ seconds: 10 });

    const message = `${payload.message} — completed at ${
      new Date().toISOString()
    }`;

    logger.info("Waiting for 10 seconds complete, hello world!", { message });

    return { message };
  },
});
