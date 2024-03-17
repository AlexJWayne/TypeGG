
/**
*/
declare class StreamPeerExtension extends StreamPeer  {

  
/**
*/
  new(): StreamPeerExtension; 
  static "new"(): StreamPeerExtension 



/** No documentation provided. */
protected _get_available_bytes(): int;

/** No documentation provided. */
protected _get_data(): int;

/** No documentation provided. */
protected _get_partial_data(): int;

/** No documentation provided. */
protected _put_data(): int;

/** No documentation provided. */
protected _put_partial_data(): int;

  connect<T extends SignalsOf<StreamPeerExtension>>(signal: T, method: SignalFunction<StreamPeerExtension[T]>): number;






}

