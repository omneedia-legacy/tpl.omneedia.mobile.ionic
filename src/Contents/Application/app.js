APP_NAMESPACE = Settings.NAMESPACE;
LANGS = Settings.LANGS;
IONIC_VER="3.7.1";

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
      '@angular/core': 'npm:@angular/core@4.4.3/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@4.4.3/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@4.4.3/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@4.4.3/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.4.3/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http@4.4.3/bundles/http.umd.js',
      '@angular/forms': 'npm:@angular/forms@4.4.3/bundles/forms.umd.js',
  	  '@ionic/storage': 'npm:@ionic/storage@2.0.1/es2015/index.js',
	  'localforage-cordovasqlitedriver': 'npm:localforage-cordovasqlitedriver@1.6.0/dist/localforage-cordovasqlitedriver.js',
	  'localforage': 'npm:localforage@1.5.0/dist/localforage.js',
      'ionic-angular': 'npm:ionic-angular@3.7.1',
      'rxjs': 'npm:rxjs@5.4.3',
      'ts': 'npm:plugin-typescript@7.1.0/lib/plugin.js',
      'typescript': 'npm:typescript@2.5.3/lib/typescript.js',

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
	System.import('http://cdn.omneedia.com/omneedia/App@angular.js')
	System.import('app/main.ts')
};
__loader__();
