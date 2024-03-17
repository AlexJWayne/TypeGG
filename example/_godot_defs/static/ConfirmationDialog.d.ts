
/**
 * A dialog used for confirmation of actions. This window is similar to [AcceptDialog], but pressing its Cancel button can have a different outcome from pressing the OK button. The order of the two buttons varies depending on the host OS.
 *
 * To get cancel action, you can use:
 *
 * @example 
 * 
 * 
 * get_cancel_button().pressed.connect(self.canceled)
 * 
 * 
 * GetCancelButton().Pressed += Canceled;
 * 
 * @summary 
 * 
 *
*/
declare class ConfirmationDialog extends AcceptDialog  {

  
/**
 * A dialog used for confirmation of actions. This window is similar to [AcceptDialog], but pressing its Cancel button can have a different outcome from pressing the OK button. The order of the two buttons varies depending on the host OS.
 *
 * To get cancel action, you can use:
 *
 * @example 
 * 
 * 
 * get_cancel_button().pressed.connect(self.canceled)
 * 
 * 
 * GetCancelButton().Pressed += Canceled;
 * 
 * @summary 
 * 
 *
*/
  new(): ConfirmationDialog; 
  static "new"(): ConfirmationDialog 


/** The text displayed by the cancel button (see [method get_cancel_button]). */
cancel_button_text: string;




/**
 * Returns the cancel button.
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_cancel_button(): Button;

  connect<T extends SignalsOf<ConfirmationDialog>>(signal: T, method: SignalFunction<ConfirmationDialog[T]>): number;






}

