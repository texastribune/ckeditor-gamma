/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.allowedContent = true;
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'basicstyles,dialogui,dialog,clipboard,button,toolbar,enterkey,entities,floatingspace,wysiwygarea,fakeobjects,link,undo,pastefromword,codemirror';
	config.skin = 'bootstrapck';
	// %REMOVE_END%

	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'forms' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' },
		{ name: 'about' }
	];

	// The default plugins included in the basic setup define some buttons that
	// are not needed in a basic editor. They are removed here.
	config.removeButtons = 'Cut,Copy,Paste,Undo,Redo,Anchor,Underline,Strike,Subscript,Superscript';

	// Dialog windows are also simplified.
	config.removeDialogTabs = 'link:advanced';

	config.codemirror = {

	    // Whether or not you want Brackets to automatically close themselves
	    autoCloseBrackets: true,

	     // Whether or not you want tags to automatically close themselves
	    autoCloseTags: true,

	     // Whether or not to automatically format code should be done when the editor is loaded
	    autoFormatOnStart: true,

	    // Whether or not to automatically format code which has just been uncommented
	    autoFormatOnUncomment: true,

	    // Whether or not to continue a comment when you press Enter inside a comment block
	    continueComments: true,

	     // Whether or not you wish to enable code folding (requires 'lineNumbers' to be set to 'true')
	    enableCodeFolding: true,

	    // Whether or not to enable code formatting
	    enableCodeFormatting: true,

	    // Whether or not to enable search tools, CTRL+F (Find), CTRL+SHIFT+F (Replace), CTRL+SHIFT+R (Replace All), CTRL+G (Find Next), CTRL+SHIFT+G (Find Previous)
	    enableSearchTools: true,

	    // Whether or not to highlight all matches of current word/selection
	    highlightMatches: true,

	     // Whether, when indenting, the first N*tabSize spaces should be replaced by N tabs
	    indentWithTabs: false,

	     // Whether or not you want to show line numbers
	    lineNumbers: true,

	    // Whether or not you want to use line wrapping
	    lineWrapping: true,

	     // Define the language specific mode 'htmlmixed' for html  including (css, xml, javascript), 'application/x-httpd-php' for php mode including html, or 'text/javascript' for using java script only
	    mode: 'htmlmixed',

	    // Whether or not you want to highlight matching braces
	    matchBrackets: true,

	    // Whether or not you want to highlight matching tags
	    matchTags: true,

	    // Whether or not to show the showAutoCompleteButton   button on the toolbar
	    showAutoCompleteButton: false,

	     // Whether or not to show the comment button on the toolbar
	    showCommentButton: false,

	    // Whether or not to show the format button on the toolbar
	    showFormatButton: true,

	     // Whether or not to show the search Code button on the toolbar
	    showSearchButton: true,

	     // Whether or not to show Trailing Spaces
	    showTrailingSpace: true,

	    // Whether or not to show the uncomment button on the toolbar
	    showUncommentButton: false,

	     // Whether or not to highlight the currently active line
	    styleActiveLine: true,

	     // Set this to the theme you wish to use (codemirror themes)
	    theme: 'ambiance',

	    // "Whether or not to use Beautify for auto formatting
	    useBeautify: false
	};

	config.extraPlugins = 'tt_directory,resize';
};
