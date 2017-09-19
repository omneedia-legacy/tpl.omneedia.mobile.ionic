APP_NAMESPACE = Settings.NAMESPACE;
LANGS = Settings.LANGS;
IONIC_VER="2.0.0-beta.9";

(function (global) {
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core@4.1.2/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@4.1.2/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@4.1.2/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@4.1.2/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.1.2/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http@4.1.2/bundles/http.umd.js',
      '@angular/forms': 'npm:@angular/forms@4.1.2/bundles/forms.umd.js',
  
      'ionic-angular': 'npm:ionic-angular@3.2.1',
      'rxjs': 'npm:rxjs@5.0.0-beta.12',
      'ts': 'npm:plugin-typescript@5.2.7/lib/plugin.js',
      'typescript': 'npm:typescript@2.0.7/lib/typescript.js',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ionic-angular': {
        main: './umd/index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);

function __loader__(i) {	
	System.import('app/main.ts')
};
__loader__();
