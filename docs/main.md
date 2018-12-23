## pplugins.json
pplugins.json keeps all plugins config in your system, and the file is in os.tempdir()
```js
{
    "yourModuleName" : [
        {
            "type" : "pluginType",
            "version": "1.0.0",
            "path" : "d:/yourPlugin/p.js",
            "pluginJsonPath" : "d:/yourPlguin/plugin.json" ,
            "updateDate" : "xxxxx"
        }
    ]
}

```

    module : plugin name
    type : plugin-type
        module and type to identify a plugin
    version : pp will give your last version
    path : the path your plugin located

## plugin.json
plugin.json is in your plugin dir , and it will tell pp plguin detail infos
```js
{
    "yourModuleName" : [
        {
            "type" : "pluginType",
            "version": "1.0.0",
            "path" : "yourPlugin/p.js"
        }
    ]
}
``` 
same as pplugins.json