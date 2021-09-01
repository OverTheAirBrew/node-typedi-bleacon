import { Service } from 'typedi';

@Service()
export class Queues {
  private queues: Record<string, ((message: any) => Promise<void>)[]> = {};

  public addListener(uuid: string, listener: (message: any) => Promise<void>) {
    const queues = this.queues[uuid];

    if (!queues) {
      this.queues[uuid] = [listener];
    } else {
      this.queues[uuid] = [...queues, listener];
    }
  }
}
