export type EventType =
  | 'PRODUCT_VIEWED'
  | 'COLLECTION_VIEWED'
  | 'ITEM_ADDED_TO_BAG'
  | 'ITEM_REMOVED_FROM_BAG'
  | 'CHECKOUT_STARTED'
  | 'ERROR_ENCOUNTERED';

export interface AppEvent<T = unknown> {
  type: EventType;
  payload: T;
  timestamp: string;
}

export interface IEventDispatcher {
  dispatch<T>(event: AppEvent<T>): void;
}
