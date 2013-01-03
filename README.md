# Meteor Ace Editor

Ace editor  repackaged for Meteor. [http://ace.ajax.org/](http://ace.ajax.org/)

## Quickstart
_see [http://github.com/Jay-Oh-eN/mondocode](http://github.com/Jay-Oh-eN/mondocode) for an example of this in the wild._

Add this package to your project
```
mrt add ace
```

Declare a _div_ with an #id.  Fill it with sweet code. 

```
<div id="editor">
function() {
  console.log("Meteor Rocks!);
}
<div>
```
Call the javascript magic provided by Ace that transforms that plain old div into a magic editor!

``` 
var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
  
```
Declare where you want the editor placed...
```
<style type="text/css" media="screen">
    #editor { 
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
```
And watch and enjoy your web page transform into a full featured IDE with themes, syntax highlighting, and live syntax checking/linting! Plus much more...

## Caveats

Currently does not work with reactive templates since the Ace editor javascript rewrites the "<div>" element.  
Rather than using handlebars (or another template):
```
<div id="editor">
  {{ editorContents }}
</div>
```
you currently have to use the Ace API to write and read from the editor.  

Observing a Mongo query works great for listening to changes:
```
var query = File.find({_id : Session.get("file")});

handle = query.observe({		
  changed : function(newDoc, oldIndex, oldDoc) {
	  if(editor !== undefined){
 	    editor.setValue(newDoc.contents);
 	  }
	}
});
```
And to push the writes to the editor to all clients, update to the database:
```
editor.getSession().on('change', function(e) {
    // update the File collection
    File.update({_id: Session.get("file")}, 
      { $set : 
        { 
          contents : editor.getValue()
        }
      });
});
```

And now you have a collaborative code editor!
