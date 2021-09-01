import { MetadataBuilder } from './metadata-builder';
import { Queues } from './queues';

export class BleaconManager {
  public static registerController(classes: Function[], queues: Queues): void {
    const jobs = new MetadataBuilder().buildControllerMetadata(classes);

    jobs.forEach((job) => {
      job.listeners.forEach((listener) => {
        try {
          queues.addListener(listener.contract.uuid, listener.exec);
        } catch (err) {
          console.log(err);
        }
      });
    });
  }
}
