
/**
 * External [TextServer] implementations should inherit from this class.
 *
*/
declare class TextServerExtension extends TextServer  {

  
/**
 * External [TextServer] implementations should inherit from this class.
 *
*/
  new(): TextServerExtension; 
  static "new"(): TextServerExtension 



/** No documentation provided. */
protected _cleanup(): void;

/** No documentation provided. */
protected _create_font(): RID;

/** No documentation provided. */
protected _create_font_linked_variation(): RID;

/** No documentation provided. */
protected _create_shaped_text(): RID;

/** No documentation provided. */
protected _draw_hex_code_box(): void;

/** No documentation provided. */
protected _font_clear_glyphs(): void;

/** No documentation provided. */
protected _font_clear_kerning_map(): void;

/** No documentation provided. */
protected _font_clear_size_cache(): void;

/** No documentation provided. */
protected _font_clear_textures(): void;

/** No documentation provided. */
protected _font_draw_glyph(): void;

/** No documentation provided. */
protected _font_draw_glyph_outline(): void;

/** No documentation provided. */
protected _font_get_antialiasing(): int;

/** No documentation provided. */
protected _font_get_ascent(): float;

/** No documentation provided. */
protected _font_get_char_from_glyph_index(): int;

/** No documentation provided. */
protected _font_get_descent(): float;

/** No documentation provided. */
protected _font_get_embolden(): float;

/** No documentation provided. */
protected _font_get_face_count(): int;

/** No documentation provided. */
protected _font_get_face_index(): int;

/** No documentation provided. */
protected _font_get_fixed_size(): int;

/** No documentation provided. */
protected _font_get_fixed_size_scale_mode(): int;

/** No documentation provided. */
protected _font_get_generate_mipmaps(): boolean;

/** No documentation provided. */
protected _font_get_global_oversampling(): float;

/** No documentation provided. */
protected _font_get_glyph_advance(): Vector2;

/** No documentation provided. */
protected _font_get_glyph_contours(): Dictionary<any, any>;

/** No documentation provided. */
protected _font_get_glyph_index(): int;

/** No documentation provided. */
protected _font_get_glyph_list(): PackedInt32Array;

/** No documentation provided. */
protected _font_get_glyph_offset(): Vector2;

/** No documentation provided. */
protected _font_get_glyph_size(): Vector2;

/** No documentation provided. */
protected _font_get_glyph_texture_idx(): int;

/** No documentation provided. */
protected _font_get_glyph_texture_rid(): RID;

/** No documentation provided. */
protected _font_get_glyph_texture_size(): Vector2;

/** No documentation provided. */
protected _font_get_glyph_uv_rect(): Rect2;

/** No documentation provided. */
protected _font_get_hinting(): int;

/** No documentation provided. */
protected _font_get_kerning(): Vector2;

/** No documentation provided. */
protected _font_get_kerning_list(): Vector2i[];

/** No documentation provided. */
protected _font_get_language_support_override(): boolean;

/** No documentation provided. */
protected _font_get_language_support_overrides(): PackedStringArray;

/** No documentation provided. */
protected _font_get_msdf_pixel_range(): int;

/** No documentation provided. */
protected _font_get_msdf_size(): int;

/** No documentation provided. */
protected _font_get_name(): string;

/** No documentation provided. */
protected _font_get_opentype_feature_overrides(): Dictionary<any, any>;

/** No documentation provided. */
protected _font_get_ot_name_strings(): Dictionary<any, any>;

/** No documentation provided. */
protected _font_get_oversampling(): float;

/** No documentation provided. */
protected _font_get_scale(): float;

/** No documentation provided. */
protected _font_get_script_support_override(): boolean;

/** No documentation provided. */
protected _font_get_script_support_overrides(): PackedStringArray;

/** No documentation provided. */
protected _font_get_size_cache_list(): Vector2i[];

/** No documentation provided. */
protected _font_get_spacing(): int;

/** No documentation provided. */
protected _font_get_stretch(): int;

/** No documentation provided. */
protected _font_get_style(): int;

/** No documentation provided. */
protected _font_get_style_name(): string;

/** No documentation provided. */
protected _font_get_subpixel_positioning(): int;

/** No documentation provided. */
protected _font_get_supported_chars(): string;

/** No documentation provided. */
protected _font_get_texture_count(): int;

/** No documentation provided. */
protected _font_get_texture_image(): Image;

/** No documentation provided. */
protected _font_get_texture_offsets(): PackedInt32Array;

/** No documentation provided. */
protected _font_get_transform(): Transform2D;

/** No documentation provided. */
protected _font_get_underline_position(): float;

/** No documentation provided. */
protected _font_get_underline_thickness(): float;

/** No documentation provided. */
protected _font_get_variation_coordinates(): Dictionary<any, any>;

/** No documentation provided. */
protected _font_get_weight(): int;

/** No documentation provided. */
protected _font_has_char(): boolean;

/** No documentation provided. */
protected _font_is_allow_system_fallback(): boolean;

/** No documentation provided. */
protected _font_is_force_autohinter(): boolean;

/** No documentation provided. */
protected _font_is_language_supported(): boolean;

/** No documentation provided. */
protected _font_is_multichannel_signed_distance_field(): boolean;

/** No documentation provided. */
protected _font_is_script_supported(): boolean;

/** No documentation provided. */
protected _font_remove_glyph(): void;

/** No documentation provided. */
protected _font_remove_kerning(): void;

/** No documentation provided. */
protected _font_remove_language_support_override(): void;

/** No documentation provided. */
protected _font_remove_script_support_override(): void;

/** No documentation provided. */
protected _font_remove_size_cache(): void;

/** No documentation provided. */
protected _font_remove_texture(): void;

/** No documentation provided. */
protected _font_render_glyph(): void;

/** No documentation provided. */
protected _font_render_range(): void;

/** No documentation provided. */
protected _font_set_allow_system_fallback(): void;

/** No documentation provided. */
protected _font_set_antialiasing(): void;

/** No documentation provided. */
protected _font_set_ascent(): void;

/** No documentation provided. */
protected _font_set_data(): void;

/** No documentation provided. */
protected _font_set_data_ptr(): void;

/** No documentation provided. */
protected _font_set_descent(): void;

/** No documentation provided. */
protected _font_set_embolden(): void;

/** No documentation provided. */
protected _font_set_face_index(): void;

/** No documentation provided. */
protected _font_set_fixed_size(): void;

/** No documentation provided. */
protected _font_set_fixed_size_scale_mode(): void;

/** No documentation provided. */
protected _font_set_force_autohinter(): void;

/** No documentation provided. */
protected _font_set_generate_mipmaps(): void;

/** No documentation provided. */
protected _font_set_global_oversampling(): void;

/** No documentation provided. */
protected _font_set_glyph_advance(): void;

/** No documentation provided. */
protected _font_set_glyph_offset(): void;

/** No documentation provided. */
protected _font_set_glyph_size(): void;

/** No documentation provided. */
protected _font_set_glyph_texture_idx(): void;

/** No documentation provided. */
protected _font_set_glyph_uv_rect(): void;

/** No documentation provided. */
protected _font_set_hinting(): void;

/** No documentation provided. */
protected _font_set_kerning(): void;

/** No documentation provided. */
protected _font_set_language_support_override(): void;

/** No documentation provided. */
protected _font_set_msdf_pixel_range(): void;

/** No documentation provided. */
protected _font_set_msdf_size(): void;

/** No documentation provided. */
protected _font_set_multichannel_signed_distance_field(): void;

/** No documentation provided. */
protected _font_set_name(): void;

/** No documentation provided. */
protected _font_set_opentype_feature_overrides(): void;

/** No documentation provided. */
protected _font_set_oversampling(): void;

/** No documentation provided. */
protected _font_set_scale(): void;

/** No documentation provided. */
protected _font_set_script_support_override(): void;

/** No documentation provided. */
protected _font_set_spacing(): void;

/** No documentation provided. */
protected _font_set_stretch(): void;

/** No documentation provided. */
protected _font_set_style(): void;

/** No documentation provided. */
protected _font_set_style_name(): void;

/** No documentation provided. */
protected _font_set_subpixel_positioning(): void;

/** No documentation provided. */
protected _font_set_texture_image(): void;

/** No documentation provided. */
protected _font_set_texture_offsets(): void;

/** No documentation provided. */
protected _font_set_transform(): void;

/** No documentation provided. */
protected _font_set_underline_position(): void;

/** No documentation provided. */
protected _font_set_underline_thickness(): void;

/** No documentation provided. */
protected _font_set_variation_coordinates(): void;

/** No documentation provided. */
protected _font_set_weight(): void;

/** No documentation provided. */
protected _font_supported_feature_list(): Dictionary<any, any>;

/** No documentation provided. */
protected _font_supported_variation_list(): Dictionary<any, any>;

/** No documentation provided. */
protected _format_number(): string;

/** No documentation provided. */
protected _free_rid(): void;

/** No documentation provided. */
protected _get_features(): int;

/** No documentation provided. */
protected _get_hex_code_box_size(): Vector2;

/** No documentation provided. */
protected _get_name(): string;

/** No documentation provided. */
protected _get_support_data_filename(): string;

/** No documentation provided. */
protected _get_support_data_info(): string;

/** No documentation provided. */
protected _has(): boolean;

/** No documentation provided. */
protected _has_feature(): boolean;

/** No documentation provided. */
protected _is_confusable(): int;

/** No documentation provided. */
protected _is_locale_right_to_left(): boolean;

/** No documentation provided. */
protected _is_valid_identifier(): boolean;

/** No documentation provided. */
protected _load_support_data(): boolean;

/** No documentation provided. */
protected _name_to_tag(): int;

/** No documentation provided. */
protected _parse_number(): string;

/** No documentation provided. */
protected _parse_structured_text(): Vector3i[];

/** No documentation provided. */
protected _percent_sign(): string;

/** No documentation provided. */
protected _save_support_data(): boolean;

/** No documentation provided. */
protected _shaped_get_span_count(): int;

/** No documentation provided. */
protected _shaped_get_span_meta(): any;

/** No documentation provided. */
protected _shaped_set_span_update_font(): void;

/** No documentation provided. */
protected _shaped_text_add_object(): boolean;

/** No documentation provided. */
protected _shaped_text_add_string(): boolean;

/** No documentation provided. */
protected _shaped_text_clear(): void;

/** No documentation provided. */
protected _shaped_text_closest_character_pos(): int;

/** No documentation provided. */
protected _shaped_text_draw(): void;

/** No documentation provided. */
protected _shaped_text_draw_outline(): void;

/** No documentation provided. */
protected _shaped_text_fit_to_width(): float;

/** No documentation provided. */
protected _shaped_text_get_ascent(): float;

/** No documentation provided. */
protected _shaped_text_get_carets(): void;

/** No documentation provided. */
protected _shaped_text_get_character_breaks(): PackedInt32Array;

/** No documentation provided. */
protected _shaped_text_get_custom_punctuation(): string;

/** No documentation provided. */
protected _shaped_text_get_descent(): float;

/** No documentation provided. */
protected _shaped_text_get_direction(): int;

/** No documentation provided. */
protected _shaped_text_get_dominant_direction_in_range(): int;

/** No documentation provided. */
protected _shaped_text_get_ellipsis_glyph_count(): int;

/** No documentation provided. */
protected _shaped_text_get_ellipsis_glyphs(): const Glyph*;

/** No documentation provided. */
protected _shaped_text_get_ellipsis_pos(): int;

/** No documentation provided. */
protected _shaped_text_get_glyph_count(): int;

/** No documentation provided. */
protected _shaped_text_get_glyphs(): const Glyph*;

/** No documentation provided. */
protected _shaped_text_get_grapheme_bounds(): Vector2;

/** No documentation provided. */
protected _shaped_text_get_inferred_direction(): int;

/** No documentation provided. */
protected _shaped_text_get_line_breaks(): PackedInt32Array;

/** No documentation provided. */
protected _shaped_text_get_line_breaks_adv(): PackedInt32Array;

/** No documentation provided. */
protected _shaped_text_get_object_rect(): Rect2;

/** No documentation provided. */
protected _shaped_text_get_objects(): any[];

/** No documentation provided. */
protected _shaped_text_get_orientation(): int;

/** No documentation provided. */
protected _shaped_text_get_parent(): RID;

/** No documentation provided. */
protected _shaped_text_get_preserve_control(): boolean;

/** No documentation provided. */
protected _shaped_text_get_preserve_invalid(): boolean;

/** No documentation provided. */
protected _shaped_text_get_range(): Vector2i;

/** No documentation provided. */
protected _shaped_text_get_selection(): PackedVector2Array;

/** No documentation provided. */
protected _shaped_text_get_size(): Vector2;

/** No documentation provided. */
protected _shaped_text_get_spacing(): int;

/** No documentation provided. */
protected _shaped_text_get_trim_pos(): int;

/** No documentation provided. */
protected _shaped_text_get_underline_position(): float;

/** No documentation provided. */
protected _shaped_text_get_underline_thickness(): float;

/** No documentation provided. */
protected _shaped_text_get_width(): float;

/** No documentation provided. */
protected _shaped_text_get_word_breaks(): PackedInt32Array;

/** No documentation provided. */
protected _shaped_text_hit_test_grapheme(): int;

/** No documentation provided. */
protected _shaped_text_hit_test_position(): int;

/** No documentation provided. */
protected _shaped_text_is_ready(): boolean;

/** No documentation provided. */
protected _shaped_text_next_character_pos(): int;

/** No documentation provided. */
protected _shaped_text_next_grapheme_pos(): int;

/** No documentation provided. */
protected _shaped_text_overrun_trim_to_width(): void;

/** No documentation provided. */
protected _shaped_text_prev_character_pos(): int;

/** No documentation provided. */
protected _shaped_text_prev_grapheme_pos(): int;

/** No documentation provided. */
protected _shaped_text_resize_object(): boolean;

/** No documentation provided. */
protected _shaped_text_set_bidi_override(): void;

/** No documentation provided. */
protected _shaped_text_set_custom_punctuation(): void;

/** No documentation provided. */
protected _shaped_text_set_direction(): void;

/** No documentation provided. */
protected _shaped_text_set_orientation(): void;

/** No documentation provided. */
protected _shaped_text_set_preserve_control(): void;

/** No documentation provided. */
protected _shaped_text_set_preserve_invalid(): void;

/** No documentation provided. */
protected _shaped_text_set_spacing(): void;

/** No documentation provided. */
protected _shaped_text_shape(): boolean;

/** No documentation provided. */
protected _shaped_text_sort_logical(): const Glyph*;

/** No documentation provided. */
protected _shaped_text_substr(): RID;

/** No documentation provided. */
protected _shaped_text_tab_align(): float;

/** No documentation provided. */
protected _shaped_text_update_breaks(): boolean;

/** No documentation provided. */
protected _shaped_text_update_justification_ops(): boolean;

/** No documentation provided. */
protected _spoof_check(): boolean;

/** No documentation provided. */
protected _string_get_character_breaks(): PackedInt32Array;

/** No documentation provided. */
protected _string_get_word_breaks(): PackedInt32Array;

/** No documentation provided. */
protected _string_to_lower(): string;

/** No documentation provided. */
protected _string_to_upper(): string;

/** No documentation provided. */
protected _strip_diacritics(): string;

/** No documentation provided. */
protected _tag_to_name(): string;

  connect<T extends SignalsOf<TextServerExtension>>(signal: T, method: SignalFunction<TextServerExtension[T]>): number;






}

