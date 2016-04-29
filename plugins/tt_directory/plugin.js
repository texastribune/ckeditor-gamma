CKEDITOR.plugins.add( 'tt_directory', {
  icons: 'tt_directory',
  init: function( editor ) {
    editor.addCommand( 'insertLink', {
      exec: function( editor ) {
        var name = '';
        var directory_url = '/directory/';

        name = editor.getSelection().getSelectedText();
        slug = convertToSlug(name);

        getPolitician(slug, name);

        function convertToSlug(name){
            name = tidyAccents(name);
            name = name.replace(/\s+/g, '-');
            return name;
        }

        function tidyAccents (s){
          // turns out this is hard. Based on  http://stackoverflow.com/a/990922
          // because it's the most case-specific.
          r = s.toLowerCase()
          r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
          r = r.replace(new RegExp("æ", 'g'),"ae");
          r = r.replace(new RegExp("ç", 'g'),"c");
          r = r.replace(new RegExp("[èéêë]", 'g'),"e");
          r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
          r = r.replace(new RegExp("ñ", 'g'),"n");
          r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
          r = r.replace(new RegExp("œ", 'g'),"oe");
          r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
          r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
          return r;
        };

        function getPolitician(slug, name) {
          $.ajax({
            type: 'GET',
            url: 'https://www.texastribune.org/api/politicians/' + slug + '/',
            success: function(resp, sel) {
              if (resp.url != '') {
                //add a new link element to CKeditor and replace the current selection with it
                var newLink = new CKEDITOR.dom.element("a");
                link_url = 'https://www.texastribune.org' + directory_url + slug + "/";
                newLink.setText(name);
                newLink.setAttributes({href: link_url})
                editor.insertElement(newLink);
              }
              else {
                alert('Unable to find ' + name);
              }
            },
            error: function(jqXHR, exception) {
              if (jqXHR.status == 404) {
                alert( name + ' not found in directory.');
              }
              else {
                alert('Uncaught Error. Show this to the tech team:' + jqXHR.responseText);
              }
            },
          });
        }
      }
    });
    editor.ui.addButton( 'tt_directory', {
      label: 'Insert Link',
      command: 'insertLink',
      toolbar: 'insert'
    });
  }
});
