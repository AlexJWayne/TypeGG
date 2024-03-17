
/**
 * [SpinBox] is a numerical input text field. It allows entering integers and floating point numbers.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var spin_box = SpinBox.new()
 * add_child(spin_box)
 * var line_edit = spin_box.get_line_edit()
 * line_edit.context_menu_enabled = false
 * spin_box.horizontal_alignment = LineEdit.HORIZONTAL_ALIGNMENT_RIGHT
 * 
 * 
 * var spinBox = new SpinBox();
 * AddChild(spinBox);
 * var lineEdit = spinBox.GetLineEdit();
 * lineEdit.ContextMenuEnabled = false;
 * spinBox.AlignHorizontal = LineEdit.HorizontalAlignEnum.Right;
 * 
 * @summary 
 * 
 *
 * The above code will create a [SpinBox], disable context menu on it and set the text alignment to right.
 *
 * See [Range] class for more options over the [SpinBox].
 *
 * **Note:** With the [SpinBox]'s context menu disabled, you can right-click the bottom half of the spinbox to set the value to its minimum, while right-clicking the top half sets the value to its maximum.
 *
 * **Note:** [SpinBox] relies on an underlying [LineEdit] node. To theme a [SpinBox]'s background, add theme items for [LineEdit] and customize them.
 *
 * **Note:** If you want to implement drag and drop for the underlying [LineEdit], you can use [method Control.set_drag_forwarding] on the node returned by [method get_line_edit].
 *
*/
declare class SpinBox extends Range  {

  
/**
 * [SpinBox] is a numerical input text field. It allows entering integers and floating point numbers.
 *
 * **Example:**
 *
 * @example 
 * 
 * 
 * var spin_box = SpinBox.new()
 * add_child(spin_box)
 * var line_edit = spin_box.get_line_edit()
 * line_edit.context_menu_enabled = false
 * spin_box.horizontal_alignment = LineEdit.HORIZONTAL_ALIGNMENT_RIGHT
 * 
 * 
 * var spinBox = new SpinBox();
 * AddChild(spinBox);
 * var lineEdit = spinBox.GetLineEdit();
 * lineEdit.ContextMenuEnabled = false;
 * spinBox.AlignHorizontal = LineEdit.HorizontalAlignEnum.Right;
 * 
 * @summary 
 * 
 *
 * The above code will create a [SpinBox], disable context menu on it and set the text alignment to right.
 *
 * See [Range] class for more options over the [SpinBox].
 *
 * **Note:** With the [SpinBox]'s context menu disabled, you can right-click the bottom half of the spinbox to set the value to its minimum, while right-clicking the top half sets the value to its maximum.
 *
 * **Note:** [SpinBox] relies on an underlying [LineEdit] node. To theme a [SpinBox]'s background, add theme items for [LineEdit] and customize them.
 *
 * **Note:** If you want to implement drag and drop for the underlying [LineEdit], you can use [method Control.set_drag_forwarding] on the node returned by [method get_line_edit].
 *
*/
  new(): SpinBox; 
  static "new"(): SpinBox 


/** Changes the alignment of the underlying [LineEdit]. */
alignment: int;

/** If not [code]0[/code], [member Range.value] will always be rounded to a multiple of [member custom_arrow_step] when interacting with the arrow buttons of the [SpinBox]. */
custom_arrow_step: float;

/** If [code]true[/code], the [SpinBox] will be editable. Otherwise, it will be read only. */
editable: boolean;

/** Adds the specified prefix string before the numerical value of the [SpinBox]. */
prefix: string;

/** If [code]true[/code], the [SpinBox] will select the whole text when the [LineEdit] gains focus. Clicking the up and down arrows won't trigger this behavior. */
select_all_on_focus: boolean;



/** Adds the specified suffix string after the numerical value of the [SpinBox]. */
suffix: string;

/** Sets the value of the [Range] for this [SpinBox] when the [LineEdit] text is [i]changed[/i] instead of [i]submitted[/i]. See [signal LineEdit.text_changed] and [signal LineEdit.text_submitted]. */
update_on_text_changed: boolean;

/** Applies the current value of this [SpinBox]. */
apply(): void;

/**
 * Returns the [LineEdit] instance from this [SpinBox]. You can use it to access properties and methods of [LineEdit].
 *
 * **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.
 *
*/
get_line_edit(): LineEdit;

  connect<T extends SignalsOf<SpinBox>>(signal: T, method: SignalFunction<SpinBox[T]>): number;






}

