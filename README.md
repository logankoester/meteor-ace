# Meteor Ace Editor

Ace editor  repackaged for Meteor. [http://ace.ajax.org/](http://ace.ajax.org/)

## Quickstart

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
