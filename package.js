Package.describe({
	summary: "Ace editor repackaged for Meteor"
	    });

Package.on_use(function (api) {
        api.add_files([
                'lib/ace/src/ace.js',
		'lib/ace/src/ext-static_highlight.js',
		'lib/ace/src/ext-textarea.js',
		'lib/ace/src/keybinding-emacs.js',
		'lib/ace/src/keybinding-vim.js',
		'lib/ace/src/mode-abap.js',
		'lib/ace/src/mode-asciidoc.js',
		'lib/ace/src/mode-c9search.js',
		'lib/ace/src/mode-c_cpp.js',
		'lib/ace/src/mode-clojure.js',
		'lib/ace/src/mode-coffee.js',
		'lib/ace/src/mode-coldfusion.js',
		'lib/ace/src/mode-csharp.js',
		'lib/ace/src/mode-css.js',
		'lib/ace/src/mode-dart.js',
		'lib/ace/src/mode-diff.js',
		'lib/ace/src/mode-dot.js',
		'lib/ace/src/mode-glsl.js',
		'lib/ace/src/mode-golang.js',
		'lib/ace/src/mode-groovy.js',
		'lib/ace/src/mode-haml.js',
		'lib/ace/src/mode-haxe.js',
		'lib/ace/src/mode-html.js',
		'lib/ace/src/mode-jade.js',
		'lib/ace/src/mode-java.js',
		'lib/ace/src/mode-javascript.js',
		'lib/ace/src/mode-json.js',
		'lib/ace/src/mode-jsp.js',
		'lib/ace/src/mode-jsx.js',
		'lib/ace/src/mode-latex.js',
		'lib/ace/src/mode-less.js',
		'lib/ace/src/mode-liquid.js',
		'lib/ace/src/mode-lisp.js',
		'lib/ace/src/mode-lua.js',
		'lib/ace/src/mode-luapage.js',
		'lib/ace/src/mode-lucene.js',
		'lib/ace/src/mode-makefile.js',
		'lib/ace/src/mode-markdown.js',
		'lib/ace/src/mode-objectivec.js',
		'lib/ace/src/mode-ocaml.js',
		'lib/ace/src/mode-perl.js',
		'lib/ace/src/mode-pgsql.js',
		'lib/ace/src/mode-php.js',
		'lib/ace/src/mode-powershell.js',
		'lib/ace/src/mode-python.js',
		'lib/ace/src/mode-r.js',
		'lib/ace/src/mode-rdoc.js',
		'lib/ace/src/mode-rhtml.js',
		'lib/ace/src/mode-ruby.js',
		'lib/ace/src/mode-sass.js',
		'lib/ace/src/mode-scad.js',
		'lib/ace/src/mode-scala.js',
		'lib/ace/src/mode-scss.js',
		'lib/ace/src/mode-sh.js',
		'lib/ace/src/mode-sql.js',
		'lib/ace/src/mode-stylus.js',
		'lib/ace/src/mode-svg.js',
		'lib/ace/src/mode-tcl.js',
		'lib/ace/src/mode-text.js',
		'lib/ace/src/mode-textile.js',
		'lib/ace/src/mode-typescript.js',
		'lib/ace/src/mode-xml.js',
		'lib/ace/src/mode-xquery.js',
		'lib/ace/src/mode-yaml.js',
		'lib/ace/src/theme-ambiance.js',
		'lib/ace/src/theme-chaos.js',
		'lib/ace/src/theme-chrome.js',
		'lib/ace/src/theme-clouds.js',
		'lib/ace/src/theme-clouds_midnight.js',
                'lib/ace/src/theme-cobalt.js',
                'lib/ace/src/theme-crimson_editor.js',
		'lib/ace/src/theme-dawn.js',
                'lib/ace/src/theme-dreamweaver.js',
                'lib/ace/src/theme-eclipse.js',
		'lib/ace/src/theme-github.js',
                'lib/ace/src/theme-idle_fingers.js',
                'lib/ace/src/theme-kr.js',
		'lib/ace/src/theme-merbivore.js',
                'lib/ace/src/theme-merbivore_soft.js',
                'lib/ace/src/theme-mono_industrial.js',
		'lib/ace/src/theme-monokai.js',
                'lib/ace/src/theme-pastel_on_dark.js',
                'lib/ace/src/theme-solarized_dark.js',
                'lib/ace/src/theme-solarized_light.js',
                'lib/ace/src/theme-textmate.js',
		'lib/ace/src/theme-tomorrow.js',
                'lib/ace/src/theme-tomorrow_night_blue.js',
                'lib/ace/src/theme-tomorrow_night.js',
		'lib/ace/src/theme-tomorrow_night_bright.js',
                'lib/ace/src/theme-tomorrow_night_eighties.js',
                'lib/ace/src/theme-twilight.js',
		'lib/ace/src/theme-vibrant_ink.js',
                'lib/ace/src/theme-xcode.js'
		],'client'
	        );
	//		api.add_files('common.js', 'client');
    });
