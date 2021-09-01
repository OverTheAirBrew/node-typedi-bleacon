import { IControllerMetadataArgs } from '../metadata/args/icontrollermetadataargs';
import { IListenerMetadataArgs } from '../metadata/args/ilistenermetadataargs';

export class MetadataArgsStorage {
  private controller: IControllerMetadataArgs[] = [];
  private listeners: IListenerMetadataArgs[] = [];

  get controllerMetadata(): IControllerMetadataArgs[] {
    return this.controller;
  }

  public addControllerMetadata(metadata: IControllerMetadataArgs): void {
    this.controller.push(metadata);
  }

  public addListenerMetadata(metadata: IListenerMetadataArgs): void {
    if (this.listeners.filter((c) => c.name === metadata.name).length <= 0) {
      this.listeners.push(metadata);
    }
  }

  /**
   * Filters controller metadata for given classes.
   *
   * @param {Function[]} classes Controller classes
   * @returns {IControllerMetadataArgs[]} Filtered controller metadata
   * @memberof MetadataArgsStorage
   */
  public filterControllerMetadataForClasses(
    classes: Function[],
  ): IControllerMetadataArgs[] {
    return this.controller.filter((ctrl) => {
      return classes.filter((cls) => ctrl.target === cls).length > 0;
    });
  }

  public filterListenersWithTarget(target: Function): IListenerMetadataArgs[] {
    return this.listeners.filter((listener) => listener.target === target);
  }

  /**
   * Resets the storage.
   *
   * @memberof MetadataArgsStorage
   */
  public reset(): void {
    this.controller = [];
    this.listeners = [];
  }
}
