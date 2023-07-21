# Reproducing jsonforms 3.1.0 + Angular 15 bug

* *npm --force install*
* *ng server*


* in Chrome console:
```aidl
ERROR DOMException: Failed to execute 'setAttribute' on 'Element': '||' is not a valid attribute name.
```
Reproduced only 
* If configuration has `showUnfocusedDescription: true`
* If a schema has element with `type: "number`

