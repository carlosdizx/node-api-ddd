import { SchedulerConfig } from "../SchedulerConfig";


export const schedulerGetAllUsers = async () => {
  const scheduler: SchedulerConfig = new SchedulerConfig(
    "5 0 1 * *", //At 00:05 on day-of-month 1
    async () => console.log("Hola")
  );
  await scheduler.start();
};
